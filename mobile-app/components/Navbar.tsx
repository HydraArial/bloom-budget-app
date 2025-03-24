import { View, Text, TouchableOpacity } from 'react-native';
export const Navbar = () => {
  return (
    <View className="flex-row items-center justify-around border-t border-gray-200 bg-white py-3">
      <TouchableOpacity className="items-center">
        <Text className="text-lg text-gray-700">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Text className="text-lg text-gray-700">Search</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <Text className="text-lg text-gray-700">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
