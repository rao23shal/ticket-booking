import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, FlatList } from "react-native";
const Data = ["10:00 am", "1:00 pm", "4:00 pm"];
const ImageData = {
  stadium: require("../Assets/Images/Stadium.png"),
  stadium1: require("../Assets/Images/Stadium1.png"),
  stadium2: require("../Assets/Images/Stadium2.png"),
};

interface props {
  Image?: string;
  stadiumName?: string;
  Navigation?: string;
  location?: string;
  onPress?:any;
}

const Card = (auto: props, ) => {
  const [Active, setActive] = useState(0);
  return (
    <TouchableOpacity
      style={{
        shadowColor: "#088F81",
        elevation: 5,
        backgroundColor: "#FFF",
        padding: 7,
        gap: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}
      onPress={()=>{
        auto.onPress();
      }}
    >
      <View style={{ height: 90, flexDirection: "row", gap: 10 }}>
        <Image
          source={ImageData[auto.Image]}
          style={{ height: 90, width: 90, borderRadius: 5 }}
        />
        <View style={{ justifyContent: "space-between" }}>
          <View>
            <Text>20 Overs</Text>
            <View style={{ gap: 10 }}>
              <FlatList
                data={Data}
                horizontal
                renderItem={(item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setActive(item.index);
                      }}
                      style={{
                        backgroundColor:
                          Active !== item.index ? "#088F81" : "#FFFFFF",
                        borderRadius: 5,
                        marginRight: 5,
                        paddingHorizontal: 4,
                      }}
                    >
                      <Text>{item.item}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "500" }}>30 Overs</Text>
            <View style={{}}>
              <FlatList
                data={Data}
                horizontal
                renderItem={(item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setActive(item.index);
                      }}
                      style={{
                        backgroundColor:
                          Active !== item.index ? "#088F81" : "white",
                        borderRadius: 5,
                        marginRight: 5,
                        paddingHorizontal: 4,
                      }}
                    >
                      <Text>{item.item}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={{ fontWeight: "600", color: "#033934" }}>
        {auto.stadiumName}
      </Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Image
          source={require("../Assets/Images/Location.png")}
          style={{ height: 13, width: 11 }}
        />
        <Text style={{ fontWeight: "400", color: "#868686" }}>
          {auto.location}
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#E7E7E7" }}></View>
      <View style={{ justifyContent: "space-between" }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ color: "#033934", fontSize: 11 }}>
            Pitch type : Mat
          </Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              source={require("../Assets/Images/Navigate.png")}
              style={{}}
            />
            <Text style={{ color: "#088F81", fontSize: 12, fontWeight: "400" }}>
              {auto.Navigation}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
