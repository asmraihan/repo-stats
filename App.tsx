// import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import SearchBox from './components/SearchBox';

export default function App() {

  const search = (searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter a username")
      return
    }
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
  }
  return (
    <SafeAreaView className='bg-slate-900 flex-1'>
      <ScrollView keyboardShouldPersistTaps="handled" className='h-screen'>
        <SearchBox onSearch={search}></SearchBox>
        {/* <StatusBar style="auto" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
