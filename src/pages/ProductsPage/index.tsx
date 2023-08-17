import { LocationStates } from "@routes/types";
import { formatCurrency } from "@utils/index";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { OrderService } from "services/orderServices";
import { OrderItem } from "types/types";

type QueryParamType = LocationStates["/order/:id"];

const ProductsPage = () => {
  const orderService = new OrderService();
  const [items, setItem] = useState<OrderItem[] | undefined>();
  const { id } = useParams<QueryParamType>();

  const totalPrice = useMemo(() => {
    if (!items) return 0;
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        if (!id) {
          throw new Error("No id provided");
        }
        const usersData = await orderService.getOrderById(id);
        setItem(usersData.items);
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
            Order Detail
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            All associated items from order #{id}
          </p>
        </div>
      </div>
      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Item
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Rate
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="mt-1 truncate text-gray-500">
                      {item.description}
                    </div>
                    <div className="mt-4">
                      <a className="text-gray-500" href={item.url}>
                        Go to product page
                      </a>
                    </div>
                  </td>
                  <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                    {item.quantity}
                  </td>
                  <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                    {formatCurrency(item.price)}
                  </td>
                  <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                    {formatCurrency(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
              >
                Total
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
              >
                Total
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                {formatCurrency(totalPrice)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
