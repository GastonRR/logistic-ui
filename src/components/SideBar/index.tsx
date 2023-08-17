import {
  ChartPieIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

import SideBarMobileView from "./MobileView";
import NavigationItem from "./NavigationItem";
import Logo from "assets/react.svg";

const navigation = [
  { name: "Ordenes", href: "/", icon: DocumentDuplicateIcon, active: true },
  { name: "Reports", href: "/reports", icon: ChartPieIcon, active: false },
];

interface Props {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  currentUrl: string;
}

const SideBar = ({ isOpen, onClose, currentUrl }: Props) => {
  return (
    <>
      <SideBarMobileView
        navigationItems={navigation}
        isOpen={isOpen}
        onClose={onClose}
      />
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-8 w-auto mr-3" src={Logo} alt="Your Company" />
            Logistic UI
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <NavigationItem
                      name={item.name}
                      href={item.href}
                      active={item.href === currentUrl}
                      Icon={item.icon}
                    />
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
