import dbConnect from '@/lib/dbConnect';
import SiteLogos from '@/models/Logos';
import { verifyAdmin } from '@/utils/validator';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await dbConnect();
    // Fetch logos
    const siteLogos = await SiteLogos.findOne().lean();
    if (!siteLogos) {
      return NextResponse.json({ error: true, message: 'Logos not configured yet' }, { status: 404 });
    }

    // Return logos
    return NextResponse.json({
      success: true,
      data: siteLogos,
    });
  } catch (error) {
    console.error('GET /api/logos error:', error);
    return NextResponse.json({ error: true, message: 'Internal Server Error' }, { status: 500 });
  }
};


export const PUT = async (req: NextRequest) => {
  try {

    await dbConnect();

    // Authenticate admin user
    try {
      await verifyAdmin(req);
    } catch (error) {
      return NextResponse.json({ success: false, message: (error as Error).message }, { status: 401 });
    }


    const body = await req.json();
    const { lightLargeLogo, darkLargeLogo, smallLogo } = body;

    // Ensure at least one field is being updated
    if (!lightLargeLogo && !darkLargeLogo && !smallLogo) {
      return NextResponse.json(
        { success: false, message: 'At least one logo field (lightLargeLogo, darkLargeLogo, smallLogo) is required.' },
        { status: 400 }
      );
    }

    
    // Build the update object dynamically
    const updateData: Partial<{ lightLargeLogo: string; darkLargeLogo: string; smallLogo: string }> = {};
    if (lightLargeLogo) updateData.lightLargeLogo = lightLargeLogo;
    if (darkLargeLogo) updateData.darkLargeLogo = darkLargeLogo;
    if (smallLogo) updateData.smallLogo = smallLogo;

    // Find and update the single SiteLogos document (assuming one document only)
    const updated = await SiteLogos.findOneAndUpdate({}, updateData, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json({ success: false, message: 'Site logos document not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('GET /api/logos error:', error);
    return NextResponse.json({ error: true, message: 'Internal Server Error' }, { status: 500 });
  }
};
