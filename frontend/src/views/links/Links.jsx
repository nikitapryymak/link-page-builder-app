import { useRef } from "react";
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
import SocialLink from "./social-link/SocialLink";
import PlusIcon from "../../icons/PlusIcon";
import { MODAL_ADD_SOCIAL } from "../../components/modals/AddSocialModal/AddSocialModal";

export const DELETE = "DELETE";

const Links = () => {
  const queryClient = useQueryClient();
  const setUi = useSetAtom(uiAtom);
  const { user } = useUser();
  const designId = user?.designId;
  const designQueryKey = [DESIGN, designId];
  const { design, isLoading, isError, isSuccess } = useDesign(designId);
  const { links = [], socials = [] } = design || {};

  const updateLink = useRef((id, prop, value, action) => {
    queryClient.setQueryData(designQueryKey, (cache) => ({
      ...cache,
      links:
        action === DELETE
          ? cache.links.filter((link) => link.id !== id)
          : cache.links.map((link) =>
              link.id === id ? { ...link, [prop]: value } : link
            ),
    }));
  }).current;

  const updateSocial = useRef((type, url, action) => {
    queryClient.setQueryData(designQueryKey, (cache) => ({
      ...cache,
      socials:
        action === DELETE
          ? cache.socials.filter((link) => link.type !== type)
          : cache.socials.map((link) =>
              link.type === type ? { ...link, url } : link
            ),
    }));
  }).current;

  const openSocialsModal = useRef(() =>
    setUi((prev) => ({
      ...prev,
      modal: {
        type: MODAL_ADD_SOCIAL,
        meta: {
          designId,
        },
      },
    }))
  ).current;

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
                  updateLink={updateLink}
                  key={link.id}
                />
              ))}

              <div className="flex items-center ml-2 mb-4 mt-10">
                <h3 className="text-lg mr-4 font-semibold text-gray-800">
                  Social Links
                </h3>
                <button
                  className="center px-4 py-2 font-semibold rounded-[4rem] text-gray-50 bg-emerald-600 hover:bg-emerald-700"
                  onClick={openSocialsModal}
                >
                  <PlusIcon />
                  &nbsp; Add Social
                </button>
              </div>
              {socials.map((link) => (
                <SocialLink
                  {...link}
                  setUi={setUi}
                  updateSocial={updateSocial}
                  key={link.type}
                />
              ))}
              <div className="h-screen"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Links;
