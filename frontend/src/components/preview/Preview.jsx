import { Outlet } from "react-router-dom";
import SocialLinkIcon from "../SocialLinkIcon";
import LinkButton from "../button/LinkButton";
import useDesign from "../../hooks/useDesign";
import Spinner from "../loading/Spinner";

const bg = "bg-gray-800";

const Preview = () => {
  const { design, isLoading, isError, isSuccess } = useDesign(1);
  const { title, desc, imgUrl, links = [], socials = [] } = design || {};
  return (
    <div className="flex-1 flex w-full">
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Preview Container */}
      <div
        className={`flex-1 flex flex-col justify-start items-center text-white pt-14 max-w-[570px] border-l border-gray-300 ${
          isSuccess ? bg : ""
        }`}
      >
        {isLoading && (
          <div className="center h-full">
            <Spinner />
          </div>
        )}
        {isError && (
          <div className="center h-full">
            <p className="text-red-500">Failed to load design</p>
          </div>
        )}
        {isSuccess && (
          <>
            <img
              className="rounded-full mb-4"
              width={96}
              height={96}
              src={imgUrl}
              alt="Profile"
            />
            <h1 className="text-xl font-semibold mb-1">{title}</h1>
            <p className="text-sm mb-8">{desc}</p>
            <div className="w-[96%] max-w-[675px] mb-6">
              {links.map((link) => (
                <LinkButton {...link} key={link.id} />
              ))}
            </div>
            <div className="center gap-6">
              {socials.map(({ name, url }, i) => (
                <SocialLinkIcon name={name} url={url} key={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Preview;
