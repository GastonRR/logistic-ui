import { classNames } from "@utils/index";

type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
  React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
  title?: string;
  titleId?: string;
};

type Icon = React.FC<IconProps>;

interface Props {
  name: string;
  href: string;
  active: boolean;
  Icon: Icon;
}

export type NavigationItemType = Omit<Props, "Icon"> & {
  icon: Icon;
};

const NavigationItem = ({ name, href, active, Icon }: Props) => {
  return (
    <li key={name}>
      <a
        href={href}
        className={classNames(
          active
            ? "bg-gray-50 text-indigo-600"
            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        <Icon
          className={classNames(
            active
              ? "text-indigo-600"
              : "text-gray-400 group-hover:text-indigo-600",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
        {name}
      </a>
    </li>
  );
};

export default NavigationItem;
