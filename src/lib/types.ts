export const categories = ["GPU", "CPU", "Motherboard", "RAM", "SSD", "Monitor", "Keyboard", "Mouse", "Development Board", "Cable", "Other"] as const;
export const statuses = ["Available", "Reserved", "Sold", "Withdrawn"] as const;
export const conditions = ["New", "Like New", "Good", "Fair", "For Parts"] as const;

export type Category = (typeof categories)[number];
export type ListingStatus = (typeof statuses)[number];
export type ItemCondition = (typeof conditions)[number];

export interface GearItem {
  id: string;
  title: string;
  category: Category;
  brand: string;
  model: string;
  price: number;
  condition: ItemCondition;
  status: ListingStatus;
  sellerName: string;
  contactMethod: string;
  description: string;
  knownIssues: string;
  pickupMethod: string;
  imageUrls: string[];
  createdAt: string;
}
