import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
    src : string,
    name : string,
    login : string
    created_at : string
}

const User = ({src ,name, login, created_at}: Props) => {
  return (
    <View className='flex flex-col justify-end items-end space-x-3 mt-8 '>
     <View className='flex flex-row items-center gap-2'>
      <Image source={{uri:src}} className='w-10 h-10 rounded-full' />
      <Text className='text-lg text-gray-200 font-semibold bg-slate-800 p-2 rounded-lg'>{name} ({login})</Text>
      </View>
      <Text className='text-sm text-gray-200 font-semibold  p-2 rounded-lg'>Joined on: {created_at}</Text>
    </View>
  )
}

export default User