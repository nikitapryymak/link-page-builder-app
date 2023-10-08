import { useCallback, useState } from "react";
import { useSetAtom } from "jotai";
import CloseIcon from "../../icons/CloseIcon";
import SearchInput from "../ui/input/SearchInput";
import uiAtom from "../../atoms/uiAtom";
import AppIconsMap, { AppIcons } from "../../icons/AppIcons";

export const MODAL_SELECT_ICON = "M_SI";

const SelectIconModal = ({ meta }) => {
  const { linkId, icon = "", updateDesign } = meta;
  const setUi = useSetAtom(uiAtom);
  const [search, setSearch] = useState("");

  const close = useCallback((selectedIcon) => {
    if (selectedIcon !== icon) {
      updateDesign(linkId, "icon", selectedIcon);
    }
    setUi((prev) => ({ ...prev, modal: null }));
  }, []);

  const SelectedIcon = AppIconsMap[icon]?.Comp || null;
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
        onClick={() => close(icon)}
      >
        <div className="flex z-20 min-h-full h-auto items-center justify-center p-4 sm:p-0">
          {/* CONTENT */}
          <div
            className="transform h-[36rem] p-6 overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-xl p-1 rounded-lg text-gray-500 hover:bg-gray-100"
              onClick={() => close(icon)}
            >
              <CloseIcon />
            </button>
            <h3
              className="text-md mb-4 text-center font-semibold leading-6 text-gray-900"
              id="modal-title"
            >
              Select Icon
            </h3>
            {SelectedIcon && (
              <div className="flex items-center ml-2 mb-4">
                <>
                  Selected:&nbsp;&nbsp;
                  <SelectedIcon className="w-5 h-5" />
                  <button
                    className="ml-4 p-1 text-xs rounded-md text-red-500 bg-red-100 hover:bg-red-200"
                    onClick={() => close("")}
                  >
                    remove
                  </button>
                </>
              </div>
            )}
            <div className="mb-3">
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div
              className="grid relative gap-2 p-2 overflow-y-auto"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
              }}
            >
              {AppIcons.map(([icon, { tags, Comp }]) =>
                !tags.includes(search.trim().toLocaleLowerCase()) ? null : (
                  <button
                    className="center p-4 rounded-md border border-chalk hover:border-slate hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      close(icon);
                    }}
                    key={icon}
                  >
                    <Comp className="w-6 h-6" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectIconModal;
