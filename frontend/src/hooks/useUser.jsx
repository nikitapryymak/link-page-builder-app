import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/user";
import { USER } from "../constants/queryKeys";

/**
 * Fetches the current user
 */
const useUser = (config = {}) => {
  const { data, ...rest } = useQuery([USER], getUser, {
    staleTime: Infinity,
    ...config,
  });

  return {
    user: data,
    ...rest,
  };
};

export default useUser;
