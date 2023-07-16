import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RepoCard from './RepoCard'

// type Props = {
//   repos: any[]
// }


const CardList = ({repos}: Props) => {
  
  return (
    <View className='my-4'>
      <FlatList
   
        //create some data
        data={repos}
        renderItem={({ item }) => (
          <RepoCard
          src={{uri: `https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${item.name}`}} name={item.name} description={item.description} language={item.language} stars={item.stargazers_count} forks={item.forks}
          ></RepoCard>
        )}
        keyExtractor={(item) => item?.id} //FIXME: keyExtractor should be unique
      />
    </View>
  )
}

export default CardList