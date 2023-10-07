import { useQuery } from "@tanstack/react-query";
import { getDesign } from "../lib/design";
import { DESIGN } from "../constants/queryKeys";

/**
 * Fetches the a design
 */
const useDesign = (designId, config = {}) => {
  const { data, ...rest } = useQuery(
    [DESIGN, designId],
    () => getDesign(designId),
    {
      staleTime: Infinity,
      ...config,
    }
  );

  return {
    design: data,
    ...rest,
  };
};

export default useDesign;
