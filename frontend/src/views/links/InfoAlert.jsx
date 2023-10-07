import { useState } from "react";
import InfoIcon from "../../icons/InfoIcon";
import { copy } from "../../utils/appUtils";

export const InfoAlert = ({ url }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = () =>
    copy(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });

  return (
    <div className="flex justify-between items-center m-4 mb-12 p-3 text-sm rounded-3xl bg-blue-100">
      <span className="font-semibold flex items-center">
        <InfoIcon />
        &nbsp;&nbsp;Your Linktree is live:&nbsp;
        <a
          className="underline font-normal"
          target="_blank"
          href="https://linktr.ee/nikita"
        >
          {url}
        </a>
      </span>
      <button
        className="bg-slate-50 hover:bg-gray-100 p-3 rounded-3xl font-semibold"
        onClick={onCopy}
      >
        {copied ? "Copied!" : "Copy URL"}
      </button>
    </div>
  );
};
