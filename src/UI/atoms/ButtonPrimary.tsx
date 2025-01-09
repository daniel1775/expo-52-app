import { Pressable, PressableProps, Text } from 'react-native';

type TypeButtonPrimary = {
	text: string;
	onPress: PressableProps['onPress'];
	buttonStyles?: string;
};

export const ButtonPrimary = ({ text, onPress, buttonStyles }: TypeButtonPrimary) => {
	return (
		<Pressable
			className={`rounded-md px-4 py-2 bg-primary-green ${buttonStyles}`}
			onPress={onPress}>
			<Text className='text-white text-bold text-xl'>{text}</Text>
		</Pressable>
	);
};
