export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  VENDOR = 'VENDOR',
  DRIVER = 'DRIVER',
  ADMIN = 'ADMIN',
}

export enum VendorTier {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  PICKED_UP = 'PICKED_UP',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum DeliveryStatus {
  AVAILABLE = 'AVAILABLE',
  ACCEPTED = 'ACCEPTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export enum PaymentMethod {
  CASH = 'CASH',
  MOBILE_MONEY = 'MOBILE_MONEY',
  CARD = 'CARD',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export enum Category {
  RICE = 'RICE',
  ROMAZAVA = 'ROMAZAVA',
  RAVITOTO = 'RAVITOTO',
  ACHARD = 'ACHARD',
  MOFO = 'MOFO',
  SAKAY = 'SAKAY',
  LASARY = 'LASARY',
  OTHER = 'OTHER',
}

export interface Address {
  street: string;
  city: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
