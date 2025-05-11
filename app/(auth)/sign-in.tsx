import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="absolute text-2xl text-black font-JakartaSemiBold bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
            keyboardType="email-address"
          />
          <InputField
            label="Password"
            placeholder="Enter your name"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
            secureTextEntry={true}
          />
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          {/* oAuth */}

          <OAuth />

          <Link
            href={"/sign-up"}
            className="mt-10 text-lg text-center text-general-200"
          >
            <Text>Do not you have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>

        {/* Verification modal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
