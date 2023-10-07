import { SOCIAL_LINK_ICONS } from "../constants/socialLinks";

const SocialLinkIcon = ({ name, ...props }) => {
  const Comp = SOCIAL_LINK_ICONS[name] || null;
  return Comp ? (
    <Comp className="w-6 h-6 cursor-pointer hover:scale-110" {...props} />
  ) : null;
};
export default SocialLinkIcon;
