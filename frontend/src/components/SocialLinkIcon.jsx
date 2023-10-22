import { SocialIconsMap } from "../constants/socialLinks";

const SocialLinkIcon = ({ type, url, ...props }) => {
  const Comp = SocialIconsMap[type]?.Comp || null;
  return Comp ? (
    <a href={url} target="_blank">
      <Comp className="w-6 h-6 cursor-pointer hover:scale-110" {...props} />
    </a>
  ) : null;
};
export default SocialLinkIcon;
