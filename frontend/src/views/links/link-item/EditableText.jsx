import { useRef, useState } from "react";
import PencilIcon from "../../../icons/PencilIcon";

const EditableText = ({ linkId, prop, value, classes = "", updateDesign }) => {
  const ref = useRef(value);
  const [editing, setEditing] = useState(false);

  const onBlur = (e) => {
    const newVal = e.target.value.trim();
    ref.current = newVal ? newVal : ref.current;
    setEditing(false);
    updateDesign(linkId, prop, ref.current);
  };

  return (
    <div
      className={`flex items-center cursor-pointer mb-2 ${classes}`}
      onClick={() => setEditing(true)}
    >
      {editing ? (
        <input
          autoFocus
          type="text"
          className="w-[16rem] border-b border-gray-300 focus:outline-none"
          defaultValue={ref.current}
          onBlur={onBlur}
        />
      ) : (
        <p className="flex items-center border-b border-transparent">
          {ref.current}
        </p>
      )}
      <PencilIcon
        className={`w-3 h-3 ml-2 ${editing ? "invisible" : "visible"}`}
      />
    </div>
  );
};
export default EditableText;
