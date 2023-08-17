import HandlerJsonService from "services/handlerJsonService";
import { Order } from "types/types";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const formatCurrency = (value: number) => {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
};

export const dowloadOrdersReport = async (orderData: Order[]) => {
  const handlerJsonService = new HandlerJsonService();

  const parseJsonWithHeaders = orderData.map((order) => {
    return {
      "Order ID": order.id,
      Client: order.clientName,
      Status: order.status,
      "Shipping Address": order.shippingAddress,
      "Shipping Promise": order.shippingPromise,
      "Nro Items": order.quantity,
    };
  });

  const csv = await handlerJsonService.convertJsonToCsv({
    json: parseJsonWithHeaders,
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "report.csv");
  link.click();
};
