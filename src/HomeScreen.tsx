import { Text, View, TextInput,Image, TouchableOpacity,StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#088F81',justifyContent:'center'}}>
      <View style={styles.container}>
      <StatusBar/>
      <Image
        source={require("../../Demon/src/Assets/Images/Gameone.png")}
        style={{ height: 70, width: 70, marginTop: 100 }}
      />
      <Text style={{ color:'#C2FFED',fontWeight:'400'}}>Gameon</Text>
      
    
      </View>
    <View
      style={{
        height: 571,
        padding: 16,
        backgroundColor: "white",
        borderRadius: 12,
        marginTop: 100,
      }}
    >
      <View style={{ height: 60, alignItems: "center" }}>
        <Text
          style={{
            color: "#033934",
            fontWeight: "600",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Hi!
        </Text>
      </View>
      <View style={{ height: 60, alignItems: "center" }}>
        <Text style={{ color: "#7FA89C", fontSize: 14 }}>
          Let's Get Started.
        </Text>
      </View>
      <View style={{ height: 30 }}>
        <Text
          style={{
            color: "#033934",
            fontWeight: "500",
          }}
        >
          Enter Phone Number
        </Text>
      </View>
      <View
        style={{
          height: 50,
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: "rgba(8, 143, 129, 0.08)",
          justifyContent: "space-between",
          padding: 10,
          paddingRight: 0,
          paddingLeft: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#2C3C53", fontSize: 16, fontWeight: "500" }}>
          +91
        </Text>
        <TextInput
          style={{
            height: 50,
            width:'90%',
            color:'#7FA89C'
          }}
          keyboardType="numeric"
          // color={"#7FA89C"}
        />
      </View>
      <View style={{ height: 60, alignItems: "center", gap: 10 }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 140,
            backgroundColor: "#088F81",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
            padding: 10,
          }}
          onPress={()=>{
            navigation.navigate('OtpScreen');
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Get OTP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#7FA89C" }}>Have a Pin?</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height:'20%',
    backgroundColor: "#088F81",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
