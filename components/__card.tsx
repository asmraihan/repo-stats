<View className="cursor-pointer group relative bg-gray-500/5 shadow-lg border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-4 transition-all duration-200 mx-4 lg:mx-0">
<View className="absolute w-full h-full top-0 right-0 transition-all duration-200">
  <Image
    source={{
      uri: `https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${repos.full_name}`,
    }}

    className="opacity-50 group-hover:opacity-100 transition-all duration-200 w-full h-full rounded-lg"
  />
  <View
    className= "absolute w-full h-full top-0 right-0 bg-gradient-to-t  text-white  hover:text-gray-200"
  />
</View>
<View className="relative">
  <Text
    className="font-display text-lg font-mediumtext-white  hover:text-gray-200"
  >
    {repos.name}
  </Text>
  <Text className="font-display h-10 text-sm text-gray-500 font-light mt-1">{repos.description}</Text>
  <View className="flex items-center justify-between gap-4 mt-10">
    <View className="flex items-center">
      <Text>{repos.language || 'Plain/Text'}</Text>
    </View>
    <View className="flex items-center gap-4">
      <View className="flex items-center">
        <Text>{repos.stargazers_count || 0}</Text>
      </View>
      <View className="flex items-center">
        <Text>{repos.forks_count || 0}</Text>
      </View>
    </View>
  </View>
</View>
</View>


=======================

<View className='flex flex-col items-center justify-center space-y-2 my-5' key={repo.id}>
<View className='flex flex-row items-center gap-2'>
  <Image source={{uri:repo.owner.avatar_url}} className='w-10 h-10 rounded-full' />
  <Text className='text-lg text-gray-200 font-semibold bg-slate-800 p-2 rounded-lg'>{repo.name} </Text>
</View>
<Text className='text-sm text-gray-200 font-semibold  p-2 rounded-lg'>Stars: {repo.stargazers_count}</Text>
<Text className='text-sm text-gray-200 font-semibold  p-2 rounded-lg'>Forks: {repo.forks}</Text>
<Text className='text-sm text-gray-200 font-semibold  p-2 rounded-lg'>Watchers: {repo.watchers}</Text>
</View>