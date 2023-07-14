import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CheckBox from "react-native-check-box";

const GroundDetailCard = () => {
  const [chacked, setChecked] = useState(false);
  const [chacked1, setChecked1] = useState(false);
  return (
    <View
      style={{
        marginHorizontal: 16,
        shadowColor: "#000000",
        elevation: 5,
        backgroundColor: "#ffffff",
        gap: 10,
        padding: 5,
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 10,
        marginVertical: 8,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "500", color: "#033934" }}>
          For 20 overs
        </Text>
        <View
          style={{
            height: 21,
            borderWidth: 1,
            borderColor: "#088F81",
            paddingHorizontal: 10,
            borderRadius: 4,
          }}
        >
          <Text style={{ color: "#088F81" }}>10:00 am</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontSize: 11, color: "#7FA89C" }}>Team 1 : </Text>
          <Text style={{ fontWeight: "500" }}>Mumbai Indians</Text>
          <View
            style={{
              backgroundColor: "#E7E7E7",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: 24,
            }}
          >
            <Text>Booked</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 11, color: "#7FA89C" }}>Team 2 : </Text>
          <Text style={{ fontWeight: "500" }}>Available</Text>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
              height: 24,
              paddingHorizontal: 10,
              shadowColor: "#000000",
              elevation: 5,
            }}
          >
            <Text style={{ color: "#088F81" }}>Available</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 0.5, backgroundColor: "#E7E7E7" }}></View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "#088F81", fontSize: 10 }}>Ball provided</Text>
          <CheckBox
            onClick={() => {
              setChecked(!chacked);
            }}
            isChecked={chacked}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "#088F81", fontSize: 10 }}>
            Umpire provided
          </Text>
          <CheckBox
            onClick={() => {
              setChecked1(!chacked1);
            }}
            isChecked={chacked1}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 12 }}>
            Ball Detail :{" "}
            <Text style={{ color: "#088F81", fontSize: 10 }}>Tennis</Text>
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#088F81" }}>₹ 3000</Text>
        <TouchableOpacity
          style={{
            height: 34,
            backgroundColor: "#088F81",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroundDetailCard;
