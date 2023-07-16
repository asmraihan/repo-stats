// import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import SearchBox from './components/SearchBox';
import User from './components/User';
import { useState, useCallback } from 'react';
import Stats from './components/Stats';
import CardList from './components/CardList';


export type Data = {
  avatar_url: string,
  followers: string | number,
  following: string | number,
  login: string,
  created_at: string,
  name: string,
  public_repos: string | number,
}

export default function App() {
  const [data, setData] = useState<Data>()
  const [repos, setRepos] = useState<any>()
  // console.log(repos)
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
    fetch(`https://api.github.com/users/${searchTerm}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
      });
  }, [])
  return (
    <SafeAreaView className='bg-slate-900 flex-1'>
      <ScrollView keyboardShouldPersistTaps="handled" className='h-screen mx-auto'>
        <SearchBox onSearch={search}></SearchBox>
        {
          data &&
          (<>
            <User src={data.avatar_url} name={data.name} login={data.login} created_at={data.created_at} />
            <Stats data={data}/>
            <CardList repos={repos}/>
          </>
          )
        }
        {/* <StatusBar style="auto" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
