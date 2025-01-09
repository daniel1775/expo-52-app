import { Link } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { Text, View } from 'react-native';

import { ButtonPrimary } from '@/UI/atoms/ButtonPrimary';
import { useGetSingleJoke } from '@/fetching/useQueryBasic';
import { useAppStore } from '@/lib/store/store';

export default function Index() {
	const { jokeData, refetch } = useGetSingleJoke();
	const { currentJokeData, setCurrentJokeData } = useAppStore();

	const renderJokeMessage = useMemo(() => {
		if (currentJokeData) {
			return `${currentJokeData.setup}\n\n${currentJokeData.delivery}`;
		}
		return 'Press the button to get a awesome joke';
	}, [jokeData]);

	useEffect(() => {
		if (jokeData) {
			setCurrentJokeData(jokeData);
		}
	}, [jokeData]);

	return (
		<View className='px-8 flex-1 justify-center'>
			<View className='border-neutral-gray border rounded-md p-4 mb-5'>
				<Text className='text-black text-center text-xl'>{renderJokeMessage}</Text>
			</View>
			<View className='flex justify-center items-center'>
				<ButtonPrimary text='Get Joke' onPress={() => refetch()} />
				<Link href='/jokeDetails' className='text-primary-green mt-6 underline font-bold'>
					Joke Details
				</Link>
			</View>
		</View>
	);
}
