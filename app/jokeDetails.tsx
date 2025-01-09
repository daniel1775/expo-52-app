import { Text, View } from 'react-native';

import { useAppStore } from '@/src/lib/store/store';

const JokeDetails = () => {
	const { currentJokeData } = useAppStore();

	return (
		<View className='px-8 flex-1 justify-center'>
			<View className='border-neutral-gray border rounded-md p-4 mb-5'>
				{currentJokeData ? (
					<View>
						<Text>{`Lang: ${currentJokeData?.lang}`}</Text>
						<Text>{`Type: ${currentJokeData?.type}`}</Text>
					</View>
				) : (
					<Text>There is no data to show</Text>
				)}
			</View>
		</View>
	);
};

export default JokeDetails;
