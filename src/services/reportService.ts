import axios from "axios";
import { Order } from "types/types";

const API_URL = "http://localhost:3000/reports";

export class ReportService {
  async getOrderDueSoon(): Promise<Order[]> {
    const response = await axios.get(`${API_URL}/promise-due-soon`);
    return response.data.data;
  }

  async getTravelingOrdersOnARange({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }): Promise<Order[]> {
    const response = await axios.get(
      `${API_URL}/order-traveling?startDate=${startDate}&endDate=${endDate}`
    );
    return response.data.data;
  }
}
