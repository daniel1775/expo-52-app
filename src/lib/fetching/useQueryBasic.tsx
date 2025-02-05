import { useQuery } from '@tanstack/react-query';

import { singleJokeSchema } from '@/schemas/jokes';

const fetchGetSingleJoke = async () => {
	const endpoint = 'https://v2.jokeapi.dev/joke/any';
	const response = await fetch(endpoint);
	const result = await response.json();

	return singleJokeSchema.parse(result);
};

export const useGetSingleJoke = () => {
	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['joke'],
		queryFn: fetchGetSingleJoke,
		enabled: false,
	});

	return {
		jokeData: data,
		isLoading,
		isError,
		refetch,
	};
};
