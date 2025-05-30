import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMenuItem extends Document {
  label: string;
  url: string;
  order: number;
  target?: '_self' | '_blank';
  menuType: 'header' | 'footer';
  createdAt: Date;
  updatedAt: Date;
}

const MenuItemSchema = new Schema<IMenuItem>(
  {
    label: { type: String, required: true },
    url: { type: String, required: true },
    order: { type: Number, required: true },
    target: { type: String, enum: ['_self', '_blank'], default: '_self' },
    menuType: { type: String, enum: ['header', 'footer'], required: true },
  },
  { timestamps: true }
);

const MenuItem: Model<IMenuItem> =
  mongoose.models.MenuItem || mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);

export default MenuItem;
