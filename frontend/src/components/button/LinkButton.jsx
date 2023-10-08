import { Link } from "react-router-dom";
import AppIconsMap from "../../icons/AppIcons";

const LinkButton = ({ name, url, icon = "", active }) => {
  const Icon = AppIconsMap[icon]?.Comp;
  return active ? (
    <Link to={url} target="_blank">
      <button className="relative flex items-center justify-center w-full h-12 mb-4 text-sm font-semibold text-white rounded-md bg-gray-700 hover:bg-slate-600">
        {Icon && (
          <div className="absolute left-3">
            <Icon className="w-5 h-5" />
          </div>
        )}
        {name}
      </button>
    </Link>
  ) : null;
};

export default LinkButton;
