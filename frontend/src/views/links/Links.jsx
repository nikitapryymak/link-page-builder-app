import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "../../components/loading/Spinner";
import useDesign from "../../hooks/useDesign";
import useUser from "../../hooks/useUser";
import { AddLink } from "./add-link/AddLink";
import { InfoAlert } from "./InfoAlert";
import LinkItem from "./link-item/LinkItem";
import { DESIGN } from "../../constants/queryKeys";

const Links = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const designId = user?.designId;
  const { design, isLoading, isError, isSuccess } = useDesign(designId);
  const { name, title, desc, imgUrl, links = [], socials = [] } = design || {};

  const updateDesign = useCallback((id, prop, value) => {
    queryClient.setQueryData([DESIGN, designId], (cache) => ({
      ...cache,
      links: cache.links.map((link) =>
        link.id === id ? { ...link, [prop]: value } : link
      ),
    }));
  }, []);

  return (
    <>
      {isLoading && (
        <div className="center h-full">
          <Spinner />
        </div>
      )}
      {isError && (
        <div className="center h-full">
          <p className="text-red-500">An error occurred</p>
        </div>
      )}
      {isSuccess && (
        <>
          <InfoAlert url="linktr.ee/nikita" />
          <div className="flex justify-center">
            <div className="w-full max-w-[640px]">
              <AddLink designId={designId} />
              {links.map((link) => (
                <LinkItem updateDesign={updateDesign} {...link} key={link.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Links;
