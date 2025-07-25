export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  pricing: PricingTier[];
  moq: number;
  orderIncrement?: number;
  material: string;
  customizable: boolean;
  specifications: Record<string, string>;
}

export interface PricingTier {
  minQuantity: number;
  maxQuantity?: number;
  price: number;
  currency: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: Record<string, any>;
}

export interface ShippingInfo {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  taxId?: string;
  vatId?: string;
}

export interface OrderInfo {
  items: CartItem[];
  shipping: ShippingInfo;
  subtotal: number;
  shipping: number;
  total: number;
  orderNumber: string;
  createdAt: Date;
}