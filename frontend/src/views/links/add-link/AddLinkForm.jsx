import { useCallback, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Input from "../../../components/ui/input/Input";
import CloseIcon from "../../../icons/CloseIcon";
import { DESIGN } from "../../../constants/queryKeys";
import { id } from "../../../utils/appUtils";

const initState = {
  name: "",
  url: "",
};

const AddLinkForm = ({ designId, showForm, closeForm }) => {
  const queryClient = useQueryClient();
  const [link, setLink] = useState(initState);

  const disabled = !link.name.trim() || !link.url.trim();
  const update = useCallback(
    (prop, val) => setLink((prev) => ({ ...prev, [prop]: val })),
    []
  );

  const addLink = (link) => {
    queryClient.setQueryData([DESIGN, designId], (cache) => ({
      ...cache,
      links: [{ ...link, active: true, id: id() }, ...cache.links],
    }));
    // call mutation()
    closeForm();
    setLink(initState);
  };

  return (
    <div
      className={`relative p-5 pt-7 mb-6 bg-white rounded-3xl transition-all duration-300 shadow-md ${
        showForm
          ? "scale-1 translate-y-0 max-h-96"
          : "scale-0 -translate-y-2/4 max-h-0"
      }`}
    >
      <div
        role="button"
        title="Close"
        className="absolute right-3 top-2 p-1 rounded-full text-xl cursor-pointer text-red-600 hover:bg-gray-100"
        onClick={closeForm}
      >
        <CloseIcon />
      </div>

      <Input
        id="linkName"
        labelColor="green"
        placeholder="Link Name"
        classes="mt-2 mb-6"
        value={link.name}
        onChange={(e) => update("name", e.target.value)}
        // isError
      />
      <Input
        id="linkUrl"
        labelColor="green"
        placeholder="URL"
        classes="mb-4"
        value={link.url}
        onChange={(e) => update("url", e.target.value)}
        // isError
      />
      <button
        className={`rounded-3xl py-1 px-4 border-2 text-emerald-600 border-emerald-600 transition duration-500 ${
          disabled ? "opacity-50" : "hover:bg-emerald-600 hover:text-white"
        }`}
        disabled={disabled}
        onClick={() => addLink(link)}
      >
        Add
      </button>
    </div>
  );
};
export default AddLinkForm;
