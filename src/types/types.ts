export type OrderStatus = "Approve" | "Cancel" | "Delivery" | "Traveling";

export interface OrderItem {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  clientName: string;
  quantity: number;
  items: OrderItem[];
  shippingAddress: string;
  shippingPromise: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}
