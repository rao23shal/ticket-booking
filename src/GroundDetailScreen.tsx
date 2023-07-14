import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import GroundDetailCard from "./Components/GroundDetailCard";
const data = [1, 2, 3, 4, 5, 6];
const GroundDetailScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
        <StatusBar backgroundColor="#088F81" />
        <View
          style={{
            height: 100,
            backgroundColor: "#088F81",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image
              source={require("../src/Assets/Images/Sidebar.png")}
              style={{ height: 15, width: 15 }}
            />
            <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
              Ground Details
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image
              source={require("../src/Assets/Images/SearchBar.png")}
              style={{ height: 15, width: 15 }}
            />
            <Image
              source={require("../src/Assets/Images/Setting.png")}
              style={{ height: 15, width: 17 }}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            ListHeaderComponent={
              <View style={{ gap: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <EvilIcons name="calendar" size={22} color="#088F81" />
                  <Text style={{ fontWeight: "500", fontSize: 16 }}>
                    Sunday, 21 June 2021
                  </Text>
                </View>
                <Image
                  source={require("./Assets/Images/Stadiumd.png")}
                  style={{
                    width: window.innerWidth,
                    height: 200,
                    marginHorizontal: 40,
                    borderRadius: 12,
                  }}
                />
                <View style={{ marginHorizontal: 16 }}>
                  <Text
                    style={{
                      color: "#033934",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    Wankhede International cricket Stadium
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 20,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <EvilIcons name="location" size={12} color={"#088F81"} />
                    <Text
                      style={{
                        color: "#088F81",
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      Navigate
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#088F81",
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    Pitch Type: Mat
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 20,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <MaterialIcons
                      name="restaurant"
                      size={12}
                      color={"#088F81"}
                    />
                    <FontAwesome5 name="trophy" size={12} color={"#088F81"} />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <FontAwesome5 name="compass" size={12} color={"#088F81"} />
                    <Text
                      style={{
                        color: "#088F81",
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      2 Km far.
                    </Text>
                  </View>
                </View>
              </View>
            }
            ListFooterComponent={<View style={{ height: 250 }}></View>}
            renderItem={(item) => {
              return <GroundDetailCard />;
            }}
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 20,
  },
});
export default GroundDetailScreen;
