/**
 * Cloudinary Remote Assets Registry
 * 
 * Central registry for portfolio project images hosted on Cloudinary.
 * 
 * Cloudinary Configuration:
 * - Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local
 * - Images are delivered via: https://res.cloudinary.com/{cloud_name}/image/upload/{transformation}{public_id}
 * - Transformations include: f_auto, q_auto, w_auto, h_auto, c_limit for responsive, optimized delivery
 * 
 * Upload Workflow:
 * 1. Upload images to Cloudinary folders: portfolio/{projectSlug}/
 * 2. The upload preset generates public IDs like: {projectSlug}/cover, {projectSlug}/gallery-{number}
 * 3. Add the resulting public IDs/URLs below, or let the system construct them
 *    from the cloud name and public IDs shown in the Cloudinary dashboard.
 * 4. Do not expose API secrets - keep them on the server.
 * 
 * Adding New Images:
 * - Upload images to Cloudinary in the appropriate project folder
 * - Add the resulting public IDs to the appropriate project entry below
 * - No component modifications required - the gallery component handles arbitrary counts
 * - To replace a placeholder: update the publicId in the entry below
 */

// Cloudinary cloud name from environment variable
const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dhipowibc";

// Base URL pattern for Cloudinary delivery
// Format: https://res.cloudinary.com/{cloud_name}/image/upload/{transformation}{public_id}
const cloudinaryBaseUrl = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload`;

// Helper function to generate Cloudinary URLs
// In production, these would be the actual uploaded asset URLs
// For now, using placeholder paths that will be replaced with actual Cloudinary URLs
function cloudinaryUrl(publicId: string, options: { width?: number; quality?: string; format?: string } = {}): string {
  const params = [
    `f_${options.format || "auto"}`,
    `q_${options.quality || "auto"}`,
    `w_${options.width || "auto"}`,
    `c_limit`,
  ];
  const transformation = params.join(",");
  return `${cloudinaryBaseUrl}/${transformation}/${publicId}.webp`;
}

// ---------------------------------------------------------------------------
// Remote Assets Registry
// Each project has a cover image and gallery array.
// Gallery supports arbitrary number of images without component changes.
// ---------------------------------------------------------------------------

export const REMOTE_ASSETS = {
  // --- Existing Projects ---

  // Trading Bolt
  trading_bolt: {
    cover: cloudinaryUrl("trading-bolt/cover"),
    gallery: [
      cloudinaryUrl("trading-bolt/gallery-1"),
      cloudinaryUrl("trading-bolt/gallery-2"),
      cloudinaryUrl("trading-bolt/gallery-3"),
    ],
  },

  // Epilux
  epilux: {
    cover: cloudinaryUrl("epilux/cover"),
    gallery: [
      cloudinaryUrl("epilux/gallery-1"),
      cloudinaryUrl("epilux/gallery-2"),
      cloudinaryUrl("epilux/gallery-3"),
    ],
  },

  // VastCare Pharmacy
  vastcare_pharmacy: {
    cover: cloudinaryUrl("vastcare-pharmacy/cover"),
    gallery: [
      cloudinaryUrl("vastcare-pharmacy/gallery-1"),
      cloudinaryUrl("vastcare-pharmacy/gallery-2"),
      cloudinaryUrl("vastcare-pharmacy/gallery-3"),
    ],
  },

  // Healthcare Management System
  healthcare_management_system: {
    cover: cloudinaryUrl("healthcare-management-system/cover"),
    gallery: [
      cloudinaryUrl("healthcare-management-system/gallery-1"),
      cloudinaryUrl("healthcare-management-system/gallery-2"),
      cloudinaryUrl("healthcare-management-system/gallery-3"),
    ],
  },

  // IBM Capstone (removed from public portfolio but kept in registry)
  ibm_capstone: {
    cover: cloudinaryUrl("ibm-capstone/cover"),
    gallery: [
      cloudinaryUrl("ibm-capstone/gallery-1"),
      cloudinaryUrl("ibm-capstone/gallery-2"),
      cloudinaryUrl("ibm-capstone/gallery-3"),
    ],
  },

  // Cardily
  cardily: {
    cover: cloudinaryUrl("cardily/cover"),
    gallery: [
      cloudinaryUrl("cardily/gallery-1"),
      cloudinaryUrl("cardily/gallery-2"),
      cloudinaryUrl("cardily/gallery-3"),
    ],
  },

  // SAAJ Partners and Consult
  saaj_partners_and_consult: {
    cover: cloudinaryUrl("saaj-partners-and-consult/cover"),
    gallery: [],
  },

  // New Projects

  // Epilux Water
  epilux_water: {
    cover: cloudinaryUrl("epilux-water/cover"),
    gallery: [],
  },

  // Future Homes Properties
  future_homes_properties: {
    cover: cloudinaryUrl("future-homes-properties/cover"),
    gallery: [],
  },

  // Gorro
  gorro: {
    cover: cloudinaryUrl("gorro/cover"),
    gallery: [],
  },

  // --- Original Portfolio Projects (kept for reference) ---

  // Epilux (original entry)
  epilux_original: {
    cover: cloudinaryUrl("epilux/cover"),
    gallery: [
      cloudinaryUrl("epilux/gallery-1"),
      cloudinaryUrl("epilux/gallery-2"),
      cloudinaryUrl("epilux/gallery-3"),
    ],
  },

  // ExceFort (removed from public portfolio but kept in registry)
  excefort: {
    cover: cloudinaryUrl("excefort/cover"),
    gallery: [
      cloudinaryUrl("excefort/gallery-1"),
      cloudinaryUrl("excefort/gallery-2"),
      cloudinaryUrl("excefort/gallery-3"),
    ],
  },

  // IBM Capstone (removed from public portfolio but kept in registry)
  ibm_capstone_original: {
    cover: cloudinaryUrl("ibm-capstone/cover"),
    gallery: [
      cloudinaryUrl("ibm-capstone/gallery-1"),
      cloudinaryUrl("ibm-capstone/gallery-2"),
      cloudinaryUrl("ibm-capstone/gallery-3"),
    ],
  },
};

// Type definitions for TypeScript support
export type RemoteAssetKeys = keyof typeof REMOTE_ASSETS;

// Project-specific type exports for easy importing
export type TradingBoltAssets = typeof REMOTE_ASSETS.trading_bolt;
export type EpiluxAssets = typeof REMOTE_ASSETS.epilux;
export type VastcarePharmacyAssets = typeof REMOTE_ASSETS.vastcare_pharmacy;
export type EpiluxWaterAssets = typeof REMOTE_ASSETS.epilux_water;
export type FutureHomesPropertiesAssets = typeof REMOTE_ASSETS.future_homes_properties;
export type GorroAssets = typeof REMOTE_ASSETS.gorro;
export type SaajPartnersAndConsultAssets = typeof REMOTE_ASSETS.saaj_partners_and_consult;

// Individual exports for easy importing
export const {
  trading_bolt,
  epilux,
  vastcare_pharmacy,
  healthcare_management_system,
  ibm_capstone,
  cardily,
  saaj_partners_and_consult,
  epilux_water,
  future_homes_properties,
  gorro,
} = REMOTE_ASSETS;

// Export the cloudinaryCloudName for use in components if needed
export { cloudinaryCloudName };

export default REMOTE_ASSETS;