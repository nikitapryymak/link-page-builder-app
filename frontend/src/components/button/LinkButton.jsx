import { Link } from "react-router-dom";
import TwitterIcon from "../../icons/TwitterIcon";

const LinkButton = ({ name, url, icon, active }) =>
  active ? (
    <Link to={url} target="_blank">
      <button className="relative flex items-center justify-center w-full h-12 mb-4 text-sm font-semibold text-white rounded-md bg-gray-700 hover:bg-slate-600">
        {icon && (
          <div className="absolute left-3">
            <TwitterIcon />
          </div>
        )}
        {name}
      </button>
    </Link>
  ) : null;

export default LinkButton;
