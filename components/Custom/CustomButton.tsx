import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

type customButtonProps = {
    title?: string,
    handlePress?: () => void,
    containerStyles?: string,
    textStyles?: string,
    isLoading?: boolean
}

const CustomButton = ({title, handlePress, containerStyles, isLoading, textStyles}: customButtonProps) => {
  return (
    <TouchableOpacity 
        className={`
            bg-secondary 
            rounded-3xl 
            min-h-[30px] 
            min-w-[70px] 
            justify-center 
            items-center 
            ${containerStyles}
            ${isLoading && 'opacity-50'}`}
        onPress={handlePress}
        disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton