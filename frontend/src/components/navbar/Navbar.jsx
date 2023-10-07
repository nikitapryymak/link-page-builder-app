import { Link, useLocation } from "react-router-dom";
import ChartIcon from "../../icons/ChartIcon";
import LinkIcon from "../../icons/LinkIcon";
import PaintbrushIcon from "../../icons/PaintbrushIcon";
import SettingsIcon from "../../icons/SettingsIcon";

const LINKS = [
  {
    label: "Links",
    href: "/admin",
    regex: /^\/admin\/?$/,
    icon: <LinkIcon />,
  },
  {
    label: "Appearance",
    href: "/admin/appearance",
    regex: /^\/admin\/appearance/,
    icon: <PaintbrushIcon />,
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    regex: /^\/admin\/analytics/,
    icon: <ChartIcon />,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    regex: /^\/admin\/settings/,
    icon: <SettingsIcon />,
  },
];

const NavItem = ({ label, href, icon, isActive }) => (
  <Link
    to={href}
    className={`p-2 hover:bg-gray-100 flex items-center rounded-md ${
      isActive && "text-black"
    }`}
  >
    {icon}
    &nbsp;{label}
  </Link>
);

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="pt-3 px-2">
      <div className="w-full flex justify-between px-8 py-3 pr-4 bg-white rounded-full">
        <div className="flex gap-8 text-gray-500">
          {LINKS.map((link) => (
            <NavItem
              {...link}
              isActive={link.regex.test(pathname)}
              key={link.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
