import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

type Props = {
  repo: any
}

const RepoCard = ({repo}: Props) => {
  // console.log(repo)
  return (
    <TouchableOpacity
    className='my-2'
    onPress={() => {}}
    >
<View className="cursor-pointer group relative bg-gray-500/5 shadow-lg border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-4 transition-all duration-200 mx-4 lg:mx-0">
<View className="absolute w-full h-full top-0 right-0 transition-all duration-200">
  {/* image */}
  <View
    className= "absolute w-full h-full top-0 right-0 bg-gradient-to-t  text-white  hover:text-gray-200"
  />
</View>
<View className="relative">
  <Text
    className="font-display text-lg font-mediumtext-white  hover:text-gray-200"
  >
    {repo.name}
  </Text>
  <Text className="font-display h-10 text-sm text-gray-500 font-light mt-1">{repo.description}</Text>
  <View className="flex items-center justify-between ">
    <View className="flex items-center">
      <Text>{repo.language || 'Plain/Text'}</Text>
    </View>
    <View className="flex items-center gap-4">
      <View className="flex items-center">
        <Text>{repo.stargazers_count || 0}</Text>
      </View>
      <View className="flex items-center">
        <Text>{repo.forks_count || 0}</Text>
      </View>
    </View>
  </View>
</View>
</View>
    </TouchableOpacity>
  )
}

export default RepoCard