import AmazonIcon from "../icons/AmazonIcon";
import DollarIcon from "../icons/DollarIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import MailIcon from "../icons/MailIcon";
import PatreonIcon from "../icons/PatreonIcon";
import PinterestIcon from "../icons/PinterestIcon";
import SnapchatIcon from "../icons/SnapchatIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import TikTokIcon from "../icons/TikTokIcon";
import TwitchIcon from "../icons/TwitchIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

export const SOCIAL_LINK_INSTAGRAM = "IG";
export const SOCIAL_LINK_TWITTER = "TWTR";
export const SOCIAL_LINK_EMAIL = "EMAIL";
export const SOCIAL_LINK_YT = "YT";
export const SOCIAL_LINK_PAYMENT = "PAY";
export const SOCIAL_LINK_SNAPCHAT = "SC";
export const SOCIAL_LINK_FACEBOOK = "FB";
export const SOCIAL_LINK_TIKTOK = "TIK";
export const SOCIAL_LINK_AMAZON = "AMZ";
export const SOCIAL_LINK_LINKEDIN = "LIN";
export const SOCIAL_LINK_PATREON = "PTR";
export const SOCIAL_LINK_PINTEREST = "PIN";
export const SOCIAL_LINK_SPOTIFY = "SPO";
export const SOCIAL_LINK_TWITCH = "TWCH";

export const SocialIconsMap = {
  [SOCIAL_LINK_INSTAGRAM]: { Comp: InstagramIcon, name: "Instagram" },
  [SOCIAL_LINK_TWITTER]: { Comp: TwitterIcon, name: "X (Twitter)" },
  [SOCIAL_LINK_EMAIL]: { Comp: MailIcon, name: "Email" },
  [SOCIAL_LINK_YT]: { Comp: YoutubeIcon, name: "Youtube" },
  [SOCIAL_LINK_LINKEDIN]: { Comp: LinkedInIcon, name: "LinkedIn" },
  [SOCIAL_LINK_PAYMENT]: { Comp: DollarIcon, name: "Payment" },
  [SOCIAL_LINK_SNAPCHAT]: { Comp: SnapchatIcon, name: "Snapchat" },
  [SOCIAL_LINK_FACEBOOK]: { Comp: FacebookIcon, name: "Facebook" },
  [SOCIAL_LINK_TIKTOK]: { Comp: TikTokIcon, name: "TikTok" },
  [SOCIAL_LINK_SPOTIFY]: { Comp: SpotifyIcon, name: "Spotify" },
  [SOCIAL_LINK_AMAZON]: { Comp: AmazonIcon, name: "Amazon" },
  [SOCIAL_LINK_PATREON]: { Comp: PatreonIcon, name: "Patreon" },
  [SOCIAL_LINK_PINTEREST]: { Comp: PinterestIcon, name: "Pinterest" },
  [SOCIAL_LINK_TWITCH]: { Comp: TwitchIcon, name: "Twitch" },
};

export const SocialIcons = Object.entries(SocialIconsMap);
