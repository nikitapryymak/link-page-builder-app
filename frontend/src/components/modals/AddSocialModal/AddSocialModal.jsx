import { useRef, useState } from "react";
import { useSetAtom } from "jotai";
import SearchInput from "../../ui/input/SearchInput";
import uiAtom from "../../../atoms/uiAtom";
import { SocialIcons } from "../../../constants/socialLinks";
import RightArrowIcon from "../../../icons/RightArrowIcon";
import UrlView from "./UrlView";
import GoBackArrow from "../../../icons/GoBackArrow";
import CloseIcon from "../../../icons/CloseIcon";

export const MODAL_ADD_SOCIAL = "M_ADD_S";

const AddSocialModal = ({ meta }) => {
  const { designId } = meta;
  const setUi = useSetAtom(uiAtom);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const closeModal = useRef(() =>
    setUi((prev) => ({ ...prev, modal: null }))
  ).current;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-all backdrop-blur-sm"></div>
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto"
        onClick={closeModal}
      >
        <div className="flex z-20 min-h-full h-auto items-center justify-center p-4 sm:p-0">
          {/* CONTENT */}
          <div
            className="transform h-[36rem] p-6 overflow-y-auto rounded-3xl bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {selected && (
              <button
                className="absolute top-3 left-4 text-xl p-1 rounded-lg text-gray-500 hover:bg-gray-100"
                onClick={() => setSelected(null)}
              >
                <GoBackArrow />
              </button>
            )}
            <button
              className="absolute top-3 right-4 text-xl p-1 rounded-lg text-gray-500 hover:bg-gray-100"
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            <h3
              className="text-md mb-4 text-center font-semibold leading-6 text-gray-900"
              id="modal-title"
            >
              {selected ? "Enter URL" : "Add Social Link"}
            </h3>
            {selected && (
              <UrlView
                designId={designId}
                selected={selected}
                closeModal={closeModal}
              />
            )}
            {!selected && (
              <>
                <div className="mb-4">
                  <SearchInput
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value.trim().toLowerCase())
                    }
                    placeholder="Search"
                  />
                </div>
                <div>
                  {SocialIcons.map(([icon, { name, Comp }]) =>
                    name.trim().toLowerCase().includes(search) ? (
                      <div
                        className="p-3 flex items-center justify-between rounded-lg cursor-pointer hover:bg-gray-100"
                        onClick={() => setSelected(icon)}
                        key={icon}
                      >
                        <div className="center font-semibold">
                          <Comp className="w-6 h-6 mr-3" />
                          {name}
                        </div>
                        <RightArrowIcon />
                      </div>
                    ) : null
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddSocialModal;
