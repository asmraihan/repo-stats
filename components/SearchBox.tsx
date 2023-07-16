import { View,Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

type Props = {

}

const SearchBox = (props: Props) => {
    const [userName , setUserName] = useState<string>('')
  return (
    <View className='flex flex-row items-center space-x-4 mx-auto mt-5'>
   <TextInput placeholder="Enter your username here... "
      onChangeText={(text: string) => setUserName(text)} 
      className="border p-2 w-2/3 border-gray-100 rounded text-gray-100 focus:border-2 focus:border-blue-500 "
      placeholderTextColor="#ffffff" />
       <Pressable className='bg-sky-600 px-4 py-2 rounded'>
        <Text>Search</Text>
       </Pressable>

    </View>
  )
}

export default SearchBox