import { SafeAreaView, View, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import './global.css';

function App() {
	return (
		<SafeAreaView className='App flex-1 items-center justify-center bg-black'>
			<View className='flex-1 items-center justify-center'>
				<Text className='text-xl font-bold text-white'>
					Open up App.jsx to start working on your app
				</Text>
			</View>
			<StatusBar style='light' />
		</SafeAreaView>
	);
}

export default App;
