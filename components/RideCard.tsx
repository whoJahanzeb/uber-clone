import { View, Text, Image } from "react-native";
import React from "react";
import { Ride } from "@/types/types";
import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";

const RideCard = ({
  ride: {
    destination_longitude,
    destination_latitude,
    origin_address,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="flex-row items-center justify-center mb-3 bg-white rounded-lg shadow-sm shadow-neutral-300">
      <View className="items-center justify-center p-3">
        <View className="flex-row items-center justify-between">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />
          <View className="flex-1 mx-5 gap-y-5">
            <View className="flex-row items-center gap-x-2">
              <Image source={icons.to} className="w-5 h-5" />
              <Text className="font-JakartaMedium" numberOfLines={1}>
                {origin_address}
              </Text>
            </View>
            <View className="flex-row items-center gap-x-2">
              <Image source={icons.point} className="w-5 h-5" />
              <Text className="font-JakartaMedium" numberOfLines={1}>
                {destination_address}
              </Text>
            </View>
          </View>
        </View>
        <View className="items-start justify-center w-full p-3 mt-5 rounded-lg bg-general-500">
          <View className="flex-row items-center justify-between w-full mb-5">
            <Text className="text-gray-500 font-JakartaMedium">
              Date & Time
            </Text>
            <Text className="text-gray-500 font-JakartaMedium">
              {formatDate(created_at)} {formatTime(ride_time)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between w-full mb-5">
            <Text className="text-gray-500 font-JakartaMedium">Driver</Text>
            <Text className="text-gray-500 font-JakartaMedium">
              {driver.first_name} {driver.last_name}
            </Text>
          </View>
          <View className="flex-row items-center justify-between w-full mb-5">
            <Text className="text-gray-500 font-JakartaMedium">Car Seats</Text>
            <Text className="text-gray-500 font-JakartaMedium">
              {driver.car_seats}
            </Text>
          </View>
          <View className="flex-row items-center justify-between w-full mb-5">
            <Text className="text-gray-500 font-JakartaMedium">
              Payment Status
            </Text>
            <Text
              className={`${payment_status === "paid" ? "text-green-500" : "text-red-500"}  font-JakartaMedium capitalize`}
            >
              {payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
