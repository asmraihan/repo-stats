import { View, Text } from 'react-native'
import React from 'react'
import { Data } from '../App'

type Props = {
    data: Data
}

const Stat = ({number, text, ...other} : {number: string | number, text:string, [other:string]:any}) => {
    return (
        <View className='flex justify-center items-center rounded-md w-28 h-16'{...other}>
                <View>
                <Text className='text-gray-50 font-extrabold text-lg text-center' >{number}</Text>
                <Text className='text-gray-50 font-semibold'>{text}</Text>
                </View>
        </View>
    )
}

const Stats = ({data}: Props) => {
  return (
    <View className='flex flex-row gap-5 my-5 justify-center'>
      <Stat text='Public Repos' number={data.public_repos} className="bg-blue-500"/>
      <Stat text='Followers' number={data.followers} className="bg-emerald-500"/>
      <Stat text='Following' number={data.following} className="bg-orange-500"/>
    </View>
  )
}

export default Stats