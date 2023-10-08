import CopyIcon from "../../../icons/CopyIcon";
import DragIcon from "../../../icons/DragIcon";
import TrashIcon from "../../../icons/TrashIcon";
import EditableText from "./EditableText";
import { copy } from "../../../utils/appUtils";
import { MODAL_DELETE_LINK } from "../../../components/modals/DeleteModal";
import { DELETE } from "../Links";
import PhotoIcon from "../../../icons/PhotoIcon";
import { MODAL_SELECT_ICON } from "../../../components/modals/SelectIconModal";

const LinkItem = ({ id, name, url, icon, active, setUi, updateDesign }) => {
  return (
    <div className="flex items-center justify-between p-3 pl-0 mb-3 bg-white rounded-3xl shadow-md">
      <div className="flex">
        <div className="flex flex-col justify-center cursor-grab pl-2 pr-4 mr-2">
          <DragIcon />
        </div>
        <div>
          <EditableText
            prop="name"
            linkId={id}
            value={name}
            updateDesign={updateDesign}
            classes="font-semibold"
          />
          <EditableText
            prop="url"
            linkId={id}
            value={url}
            updateDesign={updateDesign}
          />
          <button
            title="Add Icon"
            className="text-gray-700 hover:text-black"
            onClick={() =>
              setUi((prev) => ({
                ...prev,
                modal: {
                  type: MODAL_SELECT_ICON,
                  meta: { linkId: id, icon, updateDesign },
                },
              }))
            }
          >
            <PhotoIcon />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="center mb-5">
          <button
            title="Copy Link"
            className="text-gray-700 hover:text-black"
            onClick={() => copy(url)}
          >
            <CopyIcon />
          </button>
          <label className="relative ml-3 inline-flex cursor-pointer items-center">
            <input
              id="switch"
              type="checkbox"
              className="peer sr-only"
              checked={active}
              onChange={() => updateDesign(id, "active", !active)}
            />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-600 peer-checked:after:translate-x-full"></div>
          </label>
        </div>
        <button
          title="Delete Link"
          className="mr-1 hover:text-red-600"
          onClick={() =>
            setUi((prev) => ({
              ...prev,
              modal: {
                type: MODAL_DELETE_LINK,
                meta: {
                  onConfirm: async () => updateDesign(id, null, null, DELETE),
                },
              },
            }))
          }
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
export default LinkItem;
