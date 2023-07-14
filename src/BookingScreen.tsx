import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Components/Card";
import StripCalendar from "./StripCalendar";
const Data = [
  {
    Image: "stadium",
    stadiumName: "Wankhede International cricket Stadium",
    Navigation: "Navigate",
    location: "Mumbai, Maharastra",
  },

  {
    Image: "stadium1",
    stadiumName: "Narendra Modi Stadium",
    Navigation: "Only 4 Km far.",
    location: "Gujarat, Ahmedabad",
  },

  {
    Image: "stadium2",
    stadiumName: "Jawaharlal Nehru Stadium",
    Navigation: "Only 2 Km far.",
    location: "Delhi NCR, Delhi",
  },
];
// import Calendar from 'react-native-calendar-strip';

const BookingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="#088F81" />
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#088F81",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 16,
          paddingRight: 16,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Image
            source={require("../src/Assets/Images/Sidebar.png")}
            style={{ height: 15, width: 15 }}
          />
          <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
            Grounds
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Image
            source={require("../src/Assets/Images/SearchBar.png")}
            style={{ height: 15, width: 15 }}
          />
          <Image
            source={require("../src/Assets/Images/Setting.png")}
            style={{ height: 15, width: 15 }}
          />
        </View>
      </View>
      <View style={{ flex:1 ,margin: 16 }}>
        <View style={{ height: 130 }}>
          <StripCalendar />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={require("../src/Assets/Images/Location.png")} />
          </View>
        </View>
        <FlatList
          data={Data}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={<View style={{ height: 500 }}></View>}
          renderItem={(item) => {
            return (
              <Card
                Image={item.item.Image}
                Navigation={item.item.Navigation}
                stadiumName={item.item.stadiumName}
                location={item.item.location}
                onPress={()=>{navigation.navigate('GroundDetailScreen')}}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
