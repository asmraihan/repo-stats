import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
    src : string,
    userName : string,
}

const User = ({src ,userName}: Props) => {
  return (
    <View className='flex flex-row items-center space-x-3 mt-8 mx-auto'>
        <Image source={{uri:src}} className='w-10 h-10 rounded-full' />
      <Text className='text-lg text-gray-200 font-semibold bg-slate-800 p-2 rounded-lg'>{userName}</Text>
    </View>
  )
}

export default User