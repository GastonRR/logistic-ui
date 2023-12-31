import { Input } from "@components/Input";
import { dowloadOrdersReport } from "@utils/index";
import useToast from "hooks/useToast";
import { useState } from "react";
import { ReportService } from "services/reportService";

export default function ReportsPage() {
  const reportsService = new ReportService();
  const { errorToast, successToast } = useToast();
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const reports = [
    {
      name: "Shipping Promise Ending Report",
      description:
        "Get all the orders that are about to arrive on the promised date",
      button: {
        disabled: false,
        onClick: async () => {
          try {
            const orderData = await reportsService.getOrderDueSoon();
            await dowloadOrdersReport(orderData);
            successToast("Report downloaded successfully");
          } catch {
            errorToast("Error getting the report, please try again later");
          }
        },
      },
    },
    {
      name: "Traveling Reporting Tool",
      description: "Get all orders with traveling status",
      inputs: [
        {
          name: "startDate",
          label: "Start Date",
          placeHolder: "mm/dd/yyyy",
          type: "date",
          value: value.startDate,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue({ ...value, startDate: e.target.value });
          },
        },
        {
          name: "endDate",
          label: "End Date",
          placeHolder: "mm/dd/yyyy",
          type: "date",
          value: value.endDate,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue({ ...value, endDate: e.target.value });
          },
        },
      ],
      button: {
        disabled: value.endDate === "" || value.startDate === "",
        onClick: async () => {
          try {
            const orderData = await reportsService.getTravelingOrdersOnARange({
              startDate: value.startDate,
              endDate: value.endDate,
            });

            await dowloadOrdersReport(orderData);
            successToast("Report downloaded successfully");
          } catch {
            errorToast("Error getting the report, please try again later");
          }
        },
      },
    },
  ];

  return (
    <ul role="list" className="divide-y divide-gray-100 lg:w-3/4">
      {reports.map((report) => (
        <li
          key={report.name}
          className="flex justify-between gap-x-6 py-2 flex-col md:flex-row md:items-center"
        >
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {report.name}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              {report.description}
            </div>
            <form className="mt-5">
              <div className="flex flex-col gap-5  mt-4 md:mt-0 md:flex-row md:items-center">
                {report.inputs &&
                  report.inputs.map((input, index) => (
                    <Input key={index} {...input} />
                  ))}
              </div>
            </form>
          </div>
          <div className="flex flex-none items-center gap-x-4 mt-4 md:mt-0">
            <button
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              onClick={report.button.onClick}
              disabled={report.button.disabled}
            >
              Download
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
