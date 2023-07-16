import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RepoCard from './RepoCard'

type Props = {
  repos: any[]
}


const CardList = ({repos}: Props) => {
  
  return (
    <View className='my-4'>
      <FlatList
   
        //create some data
        data={repos}
        renderItem={({ item }) => (
          <RepoCard
            repo={item}
          ></RepoCard>
        )}
        keyExtractor={(item) => item?.id} //FIXME: keyExtractor should be unique
      />
    </View>
  )
}

export default CardList