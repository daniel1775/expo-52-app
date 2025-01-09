import { Text, View } from 'react-native';

import { useAppStore } from '@/src/lib/store/store';

const JokeDetails = () => {
	const { currentJokeData } = useAppStore();

	return (
		<View>
			<Text>{`Lang: ${currentJokeData?.lang}`}</Text>
			<Text>{`Type: ${currentJokeData?.type}`}</Text>
		</View>
	);
};

export default JokeDetails;
