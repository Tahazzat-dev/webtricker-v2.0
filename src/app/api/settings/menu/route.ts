import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, isAdminUser, DecodedToken } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import MenuItem from '@/models/Menu';

export const GET = async (req: NextRequest) => {
  await dbConnect();

  const menuType = req.nextUrl.searchParams.get('type') || 'header';

  const items = await MenuItem.find({ menuType }).sort({ order: 1 }).lean();
  return NextResponse.json({ success: true, items });
};

export const POST = async (req: NextRequest) => {
   await dbConnect();

   // Get token from cookies
    const token = req.cookies.get('accessToken')?.value;
    if (!token) {
      return NextResponse.json({ error: true, message: 'Access token missing' }, { status: 401 });
    }

    // Verify token
    const decoded = verifyToken(token) as DecodedToken | null;
    if (!decoded) {
      return NextResponse.json({ error: true, message: 'Invalid or expired token' }, { status: 401 });
    }

    // Check if user is admin
    if (!isAdminUser(decoded)) {
      return NextResponse.json({ error: true, message: 'Forbidden: Admins only' }, { status: 403 });
    }

  const body = await req.json();
  const newItem = await MenuItem.create(body);
  return NextResponse.json({ success: true, item: newItem }, { status: 201 });
};

export const PUT = async (req: NextRequest) => {
  await dbConnect();

 
   // Get token from cookies
    const token = req.cookies.get('accessToken')?.value;
    if (!token) {
      return NextResponse.json({ error: true, message: 'Access token missing' }, { status: 401 });
    }

    // Verify token
    const decoded = verifyToken(token) as DecodedToken | null;
    if (!decoded) {
      return NextResponse.json({ error: true, message: 'Invalid or expired token' }, { status: 401 });
    }

    // Check if user is admin
    if (!isAdminUser(decoded)) {
      return NextResponse.json({ error: true, message: 'Forbidden: Admins only' }, { status: 403 });
    }

  const updatedOrder: { id: string; order: number }[] = await req.json();

  await Promise.all(
    updatedOrder.map(({ id, order }) =>
      MenuItem.findByIdAndUpdate(id, { order }, { new: true })
    )
  );

  return NextResponse.json({ success: true, message:"update successful" });
};
