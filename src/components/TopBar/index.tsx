import { Bars3Icon } from "@heroicons/react/24/outline";

interface Props {
  onCloseMenu: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const TopBar = ({ onCloseMenu, title }: Props) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => onCloseMenu(true)}
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
      <div className="flex justify-between items-center  w-full">
        <div className="w-full flex justify-center text-lg lg:text-3xl font-bold">
          {title}
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6 w-1/3 justify-end">
          <div className="-m-1.5 flex items-center p-1.5">
            <span
              className="hidden lg:flex text-sm font-semibold text-gray-900"
              aria-hidden="true"
            >
              Bienvenido, Admin
            </span>

            <img
              className="ml-4 h-10 w-10 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
