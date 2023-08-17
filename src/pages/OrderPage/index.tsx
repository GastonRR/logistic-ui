import { classNames } from "@utils/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderService } from "services/orderServices";
import { Order, OrderStatus } from "types/types";

type status = {
  [key in OrderStatus]: {
    dot: string;
    background: string;
  };
};

const statusStyle: status = {
  Approve: {
    dot: "text-blue-400 bg-blue-400/10",
    background: "bg-blue-50 text-blue-700 ring-blue-600/20",
  },
  Cancel: {
    dot: "text-rose-400 bg-rose-400/10",
    background: "bg-rose-50 text-rose-700 ring-rose-600/20",
  },
  Delivery: {
    dot: "text-green-400 bg-green-400/10",
    background: "bg-green-50 text-green-700 ring-green-600/20",
  },
  Traveling: {
    dot: "text-yellow-400 bg-yellow-400/10",
    background: "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
  },
};

export default function OrderPage() {
  const orderService = new OrderService();
  const [orders, setOrders] = useState<Order[] | undefined>();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const usersData = await orderService.getAllOrders();
        setOrders(usersData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Orders
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A table with the last incoming orders.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Client
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Shipping Address
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Shipping Promise
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Quantity Items
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {orders &&
                  orders.map((order) => {
                    const status = statusStyle[order.status];
                    return (
                      <tr key={order.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                          Nro. {order.id}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {order.clientName}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                          <div
                            className={classNames(
                              status.background,
                              "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                            )}
                          >
                            <div
                              className={classNames(
                                status.dot,
                                "flex-none rounded-full p-1"
                              )}
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-current" />
                            </div>
                            <div className="hidden sm:block">
                              {order.status}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {order.shippingAddress}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {order.shippingPromise}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {order.quantity}
                        </td>
                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-sm font-medium sm:pr-0">
                          <Link
                            to={`/order/${order.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            See
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
