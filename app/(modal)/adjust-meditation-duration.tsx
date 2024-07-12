import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'
import { useTimer } from '@/context/TimerContext'

const AdjustMeditationDuration = () => {
  const { setDuration } = useTimer()

  const handlePress = (duration: number) => {
    setDuration(duration)
    router.back()
  }

  return (
    <View className="flex-1 relative">
      <AppGradient colors={['#161B2E', '#0A4D4A', '#766E67']}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>

        <View className="justify-center h-4/5">
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Adjust your meditation duration
          </Text>

          <View>
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyle="mb-5"
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyle="mb-5"
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyle="mb-5"
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyle="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  )
}

export default AdjustMeditationDuration
