import { View,Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

type Props = {
    onSearch: Function
}

const SearchBox = ({onSearch}: Props) => {
    const [userName , setUserName] = useState<string>('')
  return (
    <View className='flex flex-row items-center space-x-4 mx-auto mt-10'>
   <TextInput placeholder="Enter username ... "
      onChangeText={(text: string) => setUserName(text)} 
      className="border p-2 w-2/3 border-gray-100 rounded text-gray-100 focus:border-2 focus:border-blue-500 "
      placeholderTextColor="#ffffff" />
       <Pressable className='bg-sky-600 px-4 py-3 rounded' onPress={()=>onSearch(userName)}>
        <Text className='text-gray-100 font-semibold'>Search</Text>
       </Pressable>

    </View>
  )
}

export default SearchBox