import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>, any>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: { count: genres.length, results: genres },
    });

export default useGenres;
