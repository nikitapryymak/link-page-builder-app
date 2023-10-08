import ChartIcon from "./ChartIcon";
import DollarIcon from "./DollarIcon";
import InfoIcon from "./InfoIcon";
import MailIcon from "./MailIcon";
import PaintbrushIcon from "./PaintbrushIcon";
import PhotoIcon from "./PhotoIcon";
import SearchIcon from "./SearchIcon";
import YoutubeIcon from "./YoutubeIcon";
import LinkIcon from "./LinkIcon";
import AcademicCapIcon from "./AcademicCapIcon";
import BeakerIcon from "./BeakerIcon";
import BellIcon from "./BellIcon.jsx";
import BoltIcon from "./BoltIcon";
import CalendarIcon from "./CalendarIcon";
import CameraIcon from "./CameraIcon";
import ChatBubbleIcon from "./ChatBubbleIcon";
import CodeBracketIcon from "./CodeBracketIcon";
import CommandLineIcon from "./CommandLineIcon";
import CreditCardIcon from "./CreditCardIcon";
import CubeIcon from "./CubeIcon";
import EuroIcon from "./EuroIcon";
import GiftIcon from "./GiftIcon";
import GlobeIcon from "./GlobeIcon";
import HeartIcon from "./HeartIcon";
import HouseIcon from "./HouseIcon";
import KeyIcon from "./KeyIcon";
import LockIcon from "./LockIcon";
import LocationIcon from "./LocationIcon";
import MusicIcon from "./MusicIcon";
import PhoneIcon from "./PhoneIcon";
import QrCodeIcon from "./QrCodeIcon";
import PuzzleIcon from "./AcademicCapIcon";
import RadioIcon from "./RadioIcon";
import RocketIcon from "./RocketIcon";
import CartIcon from "./CartIcon";
import ToolsIcon from "./ToolsIcon";

export const ICON_PHOTO = "I_PHOT";
export const ICON_DOLLAR = "I_DOL";
export const ICON_INFO = "I_INFO";
export const ICON_MAIL = "I_MAIL";
export const ICON_PAINTBRUSH = "I_PBR";
export const ICON_SEARCH = "I_SRCH";
export const ICON_TWITTER = "I_TWTR";
export const ICON_YT = "I_TY";
export const ICON_LINK = "I_LNK";
export const ICON_CHART = "I_CH";
export const ICON_EDU = "I_EDU";
export const ICON_BEAKER = "I_BKR";
export const ICON_BELL = "I_BEL";
export const ICON_BOLT = "I_BOLT";
export const ICON_CALENDAR = "I_CAL";
export const ICON_CAMERA = "I_CAM";
export const ICON_CHAT_BUBBLE = "I_CHAT";
export const ICON_CODE_BRACKET = "I_CODE";
export const ICON_CLI = "I_CLI";
export const ICON_CREDIT_CARD = "I_CC";
export const ICON_CUBE = "I_CUBE";
export const ICON_EURO = "I_EUR";
export const ICON_GIFT = "I_GIFT";
export const ICON_GLOBE = "I_GLO";
export const ICON_HEART = "I_HRT";
export const ICON_HOUSE = "I_HSE";
export const ICON_KEY = "I_KEY";
export const ICON_LOCK = "I_LOCK";
export const ICON_LOCATION = "I_LOC";
export const ICON_MUSIC = "I_MUS";
export const ICON_PHONE = "I_PHON";
export const ICON_QR_CODE = "I_QR";
export const ICON_PUZZLE = "I_PUZ";
export const ICON_RADIO = "I_RAD";
export const ICON_ROCKET = "I_RKT";
export const ICON_CART = "I_CART";
export const ICON_TOOLS = "I_TOOL";

const AppIconsMap = {
  [ICON_PHOTO]: { Comp: PhotoIcon, tags: "photo picture image" },
  [ICON_DOLLAR]: { Comp: DollarIcon, tags: "dollar money payment" },
  [ICON_EURO]: { Comp: EuroIcon, tags: "euro money payment" },
  [ICON_YT]: { Comp: YoutubeIcon, tags: "youtube video" },
  [ICON_MAIL]: { Comp: MailIcon, tags: "mail email" },
  [ICON_LINK]: { Comp: LinkIcon, tags: "link url" },
  [ICON_BELL]: { Comp: BellIcon, tags: "bell notification alert" },
  [ICON_BOLT]: { Comp: BoltIcon, tags: "bolt electric lightning thunder" },
  [ICON_CALENDAR]: { Comp: CalendarIcon, tags: "calendar schedule" },
  [ICON_CAMERA]: { Comp: CameraIcon, tags: "camera" },
  [ICON_CHAT_BUBBLE]: { Comp: ChatBubbleIcon, tags: "chat message" },
  [ICON_CODE_BRACKET]: { Comp: CodeBracketIcon, tags: "code" },
  [ICON_CLI]: { Comp: CommandLineIcon, tags: "code cli" },
  [ICON_CREDIT_CARD]: { Comp: CreditCardIcon, tags: "credit card" },
  [ICON_CUBE]: { Comp: CubeIcon, tags: "cube square" },
  [ICON_GIFT]: { Comp: GiftIcon, tags: "gift present" },
  [ICON_GLOBE]: { Comp: GlobeIcon, tags: "world globe country" },
  [ICON_HEART]: { Comp: HeartIcon, tags: "heart love" },
  [ICON_HOUSE]: { Comp: HouseIcon, tags: "house home" },
  [ICON_KEY]: { Comp: KeyIcon, tags: "key" },
  [ICON_LOCK]: { Comp: LockIcon, tags: "lock" },
  [ICON_LOCATION]: { Comp: LocationIcon, tags: "location area map" },
  [ICON_MUSIC]: { Comp: MusicIcon, tags: "music volume spotify" },
  [ICON_PHONE]: { Comp: PhoneIcon, tags: "phone cell call" },
  [ICON_QR_CODE]: { Comp: QrCodeIcon, tags: "qr" },
  [ICON_PUZZLE]: { Comp: PuzzleIcon, tags: "puzzle piece" },
  [ICON_RADIO]: { Comp: RadioIcon, tags: "radio" },
  [ICON_ROCKET]: { Comp: RocketIcon, tags: "rocket rocketship missile" },
  [ICON_CART]: { Comp: CartIcon, tags: "cart shopping" },
  [ICON_TOOLS]: { Comp: ToolsIcon, tags: "tools wrench" },
  [ICON_PAINTBRUSH]: { Comp: PaintbrushIcon, tags: "paintbrush art" },
  [ICON_SEARCH]: { Comp: SearchIcon, tags: "search magnify" },
  [ICON_CHART]: { Comp: ChartIcon, tags: "chart stats data" },
  [ICON_EDU]: { Comp: AcademicCapIcon, tags: "education school learn" },
  [ICON_BEAKER]: { Comp: BeakerIcon, tags: "beaker science" },
  [ICON_INFO]: { Comp: InfoIcon, tags: "info details" },
};

export const AppIcons = Object.entries(AppIconsMap);

export default AppIconsMap;
