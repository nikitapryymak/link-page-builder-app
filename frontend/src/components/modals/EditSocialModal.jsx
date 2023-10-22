import { useState } from "react";
import { useSetAtom } from "jotai";
import uiAtom from "../../atoms/uiAtom";
import Input from "../ui/input/Input";

export const MODAL_EDIT_SOCIAL = "M_ED_SOC";

const EditSocialModal = ({ meta }) => {
  const { type, url: initUrl, updateSocial } = meta;
  const setUi = useSetAtom(uiAtom);
  const [url, setUrl] = useState(initUrl || "");
  const [error, setError] = useState("");

  const submit = (val) => {
    if (!val) return setError("URL cannot be empty");
    if (val !== initUrl) updateSocial(type, val);
    setUi((prev) => ({ ...prev, modal: null }));
  };

  const validate = (val) => !val && setError("URL cannot be empty");

  return (
    <div
      className="relative z-10"
      aria-labelledby="delete-link-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-all backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  className="text-center font-semibold mb-4 leading-6 text-gray-900"
                  id="delete-link-title"
                >
                  Edit Social Link
                </h3>
                <Input
                  autoFocus
                  placeholder="URL"
                  value={url}
                  onChange={(e) => {
                    if (error) setError("");
                    setUrl(e.target.value);
                  }}
                  onBlur={(e) => validate(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && submit(url)}
                  isError={!!error}
                  errorMessage={error}
                />
              </div>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                disabled={!url}
                className={`inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 sm:ml-3 sm:w-auto ${
                  !url && "opacity-60 cursor-not-allowed"
                }`}
                onClick={() => submit(url)}
              >
                Update
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setUi((prev) => ({ ...prev, modal: null }))}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditSocialModal;
