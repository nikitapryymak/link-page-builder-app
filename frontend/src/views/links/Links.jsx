import { useCallback } from "react";
import { useSetAtom } from "jotai";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "../../components/loading/Spinner";
import useDesign from "../../hooks/useDesign";
import useUser from "../../hooks/useUser";
import { AddLink } from "./add-link/AddLink";
import { InfoAlert } from "./InfoAlert";
import LinkItem from "./link-item/LinkItem";
import { DESIGN } from "../../constants/queryKeys";
import uiAtom from "../../atoms/uiAtom";

export const DELETE = "DELETE";

const Links = () => {
  const queryClient = useQueryClient();
  const setUi = useSetAtom(uiAtom);
  const { user } = useUser();
  const designId = user?.designId;
  const { design, isLoading, isError, isSuccess } = useDesign(designId);
  const { name, title, desc, imgUrl, links = [], socials = [] } = design || {};

  const updateDesign = useCallback((id, prop, value, action) => {
    queryClient.setQueryData([DESIGN, designId], (cache) => ({
      ...cache,
      links:
        action === DELETE
          ? cache.links.filter((link) => link.id !== id)
          : cache.links.map((link) =>
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
                <LinkItem
                  {...link}
                  setUi={setUi}
                  updateDesign={updateDesign}
                  key={link.id}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Links;
