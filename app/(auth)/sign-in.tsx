import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/Custom/FormField'
import CustomButton from '@/components/Custom/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    console.log('submit');
  }

  return (
    <SafeAreaView className='bg-primary h-full w-full'>
      <ScrollView>
        <View className='h-full w-full justify-center items-center p-4 my-4'>
          <Image className='w-40' resizeMode='contain' source={images.logo}/>
          <Text className='text-white font-semibold text-3xl'>Log in</Text>
          <FormField 
            titleText='Email'
            value={form.email}
            handleChangeFunc={(newVal: string) => {
              setForm({...form, email:newVal });
            }}
            keyboardType='email-adress'
          />
          <FormField 
            titleText='Password'
            value={form.password}
            handleChangeFunc={(newVal: string) => {
              setForm({...form, password:newVal });
            }}
            isPassword={true}
          />
          <CustomButton
            title='Submit'
            containerStyles='p-3 w-full mt-5'
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className='flex-row m-3 gap-2'>
            <Text className='text-yellow-50'>
              Don't have account?
            </Text>
            <Link href="/(auth)/sign-up" className='text-secondary-200 font-psemibold'>
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn