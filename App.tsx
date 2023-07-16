import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import SearchBox from './components/SearchBox';

export default function App() {
  return (
    <SafeAreaView className='bg-black flex-1'>
      <SearchBox></SearchBox>
     
    </SafeAreaView>
  );
}
