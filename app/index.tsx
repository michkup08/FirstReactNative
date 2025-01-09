import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import '@/global.css'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images'
import CustomButton from '@/components/Custom/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView 
        contentContainerStyle={{ height:'100%' }}
      >
        <View className='w-full min-h-[95vh] justify-center items-center'>
          <Image 
            source={images.logo}
            className='w-60 m-10'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[400px] w-full h-[200px]'
            resizeMode='contain'/>
          <View className='realtive'>
            <Text className='text-3xl text-white font-bold text-center w-80 m-5'>Discover new possibilities with{' '}
              <Text className='text-secondary-100'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[60px] h-[15px] absolute right-8 bottom-2'
              resizeMode='contain'
            />
          </View>
          <CustomButton
            title='Start'
            handlePress={() => {
              router.push('/(auth)/sign-in')
            }}
            containerStyles='m-10 w-60 h-14'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}