// import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import SearchBox from './components/SearchBox';
import User from './components/User';
import { useState, useCallback } from 'react';
import Stats from './components/Stats';


export type Data = {
  avatar_url: string,
  followers: string | number,
  following: string | number,
  login: string,
  public_repos: string | number,
}

export default function App() {
  const [data, setData] = useState<Data>()
  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("Please enter a username")
      return
    }
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
  }, [])
  return (
    <SafeAreaView className='bg-slate-900 flex-1'>
      <ScrollView keyboardShouldPersistTaps="handled" className='h-screen mx-auto'>
        <SearchBox onSearch={search}></SearchBox>
        {
          data &&
          (<>
            <User src={data.avatar_url} userName={data.login} />
            <Stats data={data}/>
          </>
          )
        }
        {/* <StatusBar style="auto" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
