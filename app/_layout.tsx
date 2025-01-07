import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Stack } from 'expo-router';

import '../global.css';

export default function RootLayout() {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<Stack />
		</QueryClientProvider>
	);
}
