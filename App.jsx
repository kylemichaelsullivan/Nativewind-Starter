import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="font-bold text-white text-xl">
        Open up App.jsx to start working on your app
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
