import { useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { SocialIconsMap } from "../../../constants/socialLinks";
import Input from "../../ui/input/Input";
import PrimaryBtn from "../../button/PrimaryBtn";
import { DESIGN } from "../../../constants/queryKeys";

const UrlView = ({ designId, selected, closeModal }) => {
  const queryClient = useQueryClient();
  const [url, setUrl] = useState("");
  const { name, Comp } = SocialIconsMap[selected];
  const designQueryKey = [DESIGN, designId];

  const onSave = useRef((url) => {
    if (url.length < 3) return;
    queryClient.setQueryData(designQueryKey, (cache) => ({
      ...cache,
      socials: [...cache.socials, { type: selected, url }],
    }));
    closeModal();
  }).current;

  return (
    <div>
      <div className="flex items-center mb-8">
        <Comp className="w-7 h-7 mr-2" />
        <p className="font-semibold">{name}</p>
      </div>
      <Input
        autoFocus
        labelColor="green"
        placeholder="URL"
        classes="mb-4"
        value={url}
        onChange={(e) => setUrl(e.target.value.trim().toLowerCase())}
        onKeyUp={(e) => e.key === "Enter" && onSave(url)}
      />
      <PrimaryBtn
        size="sm"
        isDisabled={url.length < 3}
        onClick={() => onSave(url)}
      >
        Save
      </PrimaryBtn>
    </div>
  );
};
export default UrlView;
