import { useState } from "react";
import PlusIcon from "../../../icons/PlusIcon";
import AddLinkForm from "./AddLinkForm";

export const AddLink = ({ designId }) => {
  const [showForm, setShowForm] = useState(true);
  return (
    <div>
      <button
        className="center w-full p-3 font-semibold rounded-[4rem] mb-4 text-gray-50 bg-emerald-600 hover:bg-emerald-700"
        onClick={() => setShowForm(true)}
      >
        <PlusIcon />
        &nbsp; Add Link
      </button>
      <AddLinkForm
        showForm={showForm}
        closeForm={() => setShowForm(false)}
        designId={designId}
      />
    </div>
  );
};
