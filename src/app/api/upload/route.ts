import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { verifyAdmin } from '@/utils/validator';
import dbConnect from '@/lib/dbConnect';

async function uploadFileToCloudinary(file: File): Promise<{ url: string; public_id: string }> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

      const isSvg = file.type === 'image/svg+xml' || file.name.endsWith('.svg');

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: isSvg ? 'raw' : 'auto',
                format: isSvg ? 'svg' : undefined, // optional but explicit
            },
        
            (error, result) => {
                if (error) {
                    console.error(`Cloudinary upload error for file "${file.name}":`, error);
                    return reject(new Error(`Cloudinary upload failed for ${file.name}`));
                }
                if (!result) {
                    return reject(new Error('Cloudinary upload returned no result.'));
                }
                resolve({
                    url: result.secure_url,
                    public_id: result.public_id,
                });
            }
        );
        uploadStream.end(buffer);
    });
}

export async function POST(req: NextRequest) {
    // Only allow multipart/form-data
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
        return NextResponse.json({ success: false, message: 'Invalid content type' }, { status: 415 });
    }

    // Authenticate admin user
    try {
        await dbConnect();
        await verifyAdmin(req);
    } catch (error) {
        return NextResponse.json({ success: false, message: (error as Error).message }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const files = formData.getAll('files') as File[];

        if (!files || files.length === 0) {
            return NextResponse.json({ success: false, message: 'No files provided' }, { status: 400 });
        }

        // limit number of files
        if (files.length > 10) {
            return NextResponse.json({ success: false, message: 'Too many files. Max 10 allowed.' }, { status: 413 });
        }

        const uploadedResults = await Promise.all(files.map(uploadFileToCloudinary));
        const urls = uploadedResults.map((file) => file.url);

        return NextResponse.json({
            success: true,
            message: 'Files uploaded successfully!',
            uploadedFiles: urls,
        });
    } catch (error) {
        console.error('Upload failed:', error);
        return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
    }
}
