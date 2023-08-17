import axios from "axios";
import { Order } from "types/types";

const API_URL = "http://localhost:3000/orders";

export class OrderService {
  async getAllOrders(): Promise<Order[]> {
    const response = await axios.get(API_URL);
    return response.data.data;
  }

  async getOrderById(id: string): Promise<Order> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  }
}
