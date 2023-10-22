import { MODAL_DELETE } from "../../../components/modals/DeleteModal";
import { MODAL_EDIT_SOCIAL } from "../../../components/modals/EditSocialModal";
import { SocialIconsMap } from "../../../constants/socialLinks";
import DragIcon from "../../../icons/DragIcon";
import PencilIcon from "../../../icons/PencilIcon";
import TrashIcon from "../../../icons/TrashIcon";
import { DELETE } from "../Links";

const SocialLink = ({ type, url, setUi, updateSocial }) => {
  const { Comp, name } = SocialIconsMap[type] || {};
  return (
    <div className="flex items-center mb-3 bg-white rounded-3xl shadow-md">
      <div className="flex flex-col justify-center cursor-grab py-4 pl-3 pr-2">
        <DragIcon />
      </div>
      <div
        className="flex items-center w-full pl-2 pr-4 py-3 cursor-pointer hover:bg-gray-200"
        onClick={() =>
          setUi((prev) => ({
            ...prev,
            modal: {
              type: MODAL_EDIT_SOCIAL,
              meta: {
                type,
                url,
                updateSocial,
              },
            },
          }))
        }
      >
        <div className="flex items-center flex-1">
          {Comp && <Comp className="w-6 h-6" />}
          <p className="font-semibold ml-3">{name || "Invalid Social Link"}</p>
        </div>
        <PencilIcon />
      </div>
      <button
        className="ml-3 mr-4 hover:text-red-700"
        onClick={() =>
          setUi((prev) => ({
            ...prev,
            modal: {
              type: MODAL_DELETE,
              meta: {
                title: "Delete Social Link",
                onConfirm: async () => updateSocial(type, null, DELETE),
              },
            },
          }))
        }
      >
        <TrashIcon />
      </button>
    </div>
  );
};
export default SocialLink;
