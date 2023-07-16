import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';


type Props = {
  name : string,
  description : string,
  language : string,
  stars : number,
  forks : number
  src : string
}

const RepoCard = ({ src,name,description,language,forks,stars  }: Props) => {
  // console.log(repo)
  return (
    <TouchableOpacity
      className='my-2'
      onPress={() => { }}
    >
      <View className="cursor-pointer group relative bg-gray-500/5 shadow-lg border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-4 transition-all duration-200 mx-4 lg:mx-0">
        <View className="absolute w-full h-full top-0 right-0 transition-all duration-200">
          {/* image */}
          {/* <Image source={{uri:src}} className='w-10 h-10 rounded-full' /> */}
          {/* <Image source={{uri: `https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${name}`}}className="opacity-50 group-hover:opacity-100 transition-all duration-200 w-full h-full rounded-lg" /> */}
          <View
            className="absolute w-full h-full top-0 right-0 bg-gradient-to-t  text-white  hover:text-gray-200"
          />
        </View>
        <View className="relative">
          <Text
            className=" text-lg text-white font-semibold hover:text-gray-200"
          >
            {name}
          </Text>
          <Text className="h-10 text-sm text-gray-500 font-light mt-1">{description}</Text>
          <View className="flex flex-row items-center justify-between ">
            <View className="flex items-center">
              <Text className='text-white '>{language || 'Plain/Text'}</Text>
            </View>
            <View className="flex flex-row items-center gap-4">
              <View className="flex flex-row gap-1 items-center">
                <Icon name="repo-forked" size={20} color="#FFFFFF" />
                <Text className='text-white font-semibold'>{forks || 0}</Text>
              </View>

              <View className="flex flex-row gap-1 items-center">
                <Icon name="star-fill" size={20} color="#FFFFFF" />
                <Text className='text-white font-semibold'>{stars || 0}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RepoCard