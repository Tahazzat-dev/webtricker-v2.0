import mongoose, { Schema, Document, Model, HydratedDocument } from 'mongoose';

// Schema for fallback/default logos
interface IDefaultSiteLogos {
  lightLargeLogo: string;
  darkLargeLogo: string;
  smallLogo: string;
}

// Main document interface
export interface ISiteLogos extends Document {
  lightLargeLogo: string;
  darkLargeLogo: string;
  smallLogo: string;
  defaultLogos: IDefaultSiteLogos;
  createdAt: Date;
  updatedAt: Date;
}

export type SiteLogosDocument = HydratedDocument<ISiteLogos>;

// Sub-schema for default logos (for fallback or reset)
const DefaultSiteLogosSchema = new Schema<IDefaultSiteLogos>(
  {
    lightLargeLogo: {
      type: String,
      required: true,
      trim: true,
    },
    darkLargeLogo: {
      type: String,
      required: true,
      trim: true,
    },
    smallLogo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

// Main schema for site logos
const SiteLogosSchema = new Schema<ISiteLogos>(
  {
    lightLargeLogo: {
      type: String,
      required: true,
      trim: true,
    },
    darkLargeLogo: {
      type: String,
      required: true,
      trim: true,
    },
    smallLogo: {
      type: String,
      required: true,
      trim: true,
    },
    defaultLogos: {
      type: DefaultSiteLogosSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const SiteLogos: Model<ISiteLogos> =
  mongoose.models.SiteLogos || mongoose.model<ISiteLogos>('SiteLogos', SiteLogosSchema);

export default SiteLogos;
