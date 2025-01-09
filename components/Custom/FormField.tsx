import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import icons from '@/constants/icons'

type formFieldProps = {
    titleText?: string,
    value: string,
    handleChangeFunc: (newVal: string) => void,
    styles?: string,
    keyboardType?: string,
    isPassword?: boolean
}

const FormField = ({titleText, value, handleChangeFunc, styles, keyboardType, isPassword} : formFieldProps) => {
    const [showPassword, setShowPassword] = useState(false); 

    return (
    <View className={`w-full my-2 justify-center items-center ${styles}`}>
        <Text className='text-white my-2'>{titleText}</Text>
        <View className='
            border-2 
            border-red-300 
            bg-black-200 
            w-full 
            h-16 
            p-2
            rounded-3xl 
            focus:bg-black-100
            flex-row'>
            <TextInput 
                className='text-white flex-1 text-base'
                value={value}
                //placeholder={titleText}
                //placeholderTextColor='#7b7b8b'
                onChangeText={(e) => {handleChangeFunc(e)}}
                secureTextEntry = {isPassword && !showPassword}
            />
            {isPassword && 
                <TouchableOpacity
                    onPressIn={() => {setShowPassword(true)}}
                    onPressOut={() => {setShowPassword(false)}}
                    className='justify-center items-start'
                >
                    <Image
                        source={icons.eye}
                        className='w-8 h-8'
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            }
        </View>
    </View>
    )
}

export default FormField