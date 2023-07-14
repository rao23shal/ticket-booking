import {
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const OtpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#088F81", justifyContent: 'center',alignItems:'center'}}>
        <StatusBar backgroundColor={'#088F81'}/>
      <View style={styles.Container}>
        
        <Image
          source={require("../../Demon/src/Assets/Images/Gameone.png")}
          style={{ height: 70, width: 70, marginTop: 100 }}
        />
        <Text style={{ color:"#C2FFED", fontWeight:"400" }}>Gameon</Text>
      </View>
      <View
        style={{
          height: 571,
          padding: 16,
          backgroundColor: "white",
          width: '100%',
          borderRadius: 12,
          marginTop: 100,
        }}
      >
        <View style={{ height: 60, alignItems: "center",width:'100%' }}>
          <Text
            style={{
              // color:"#033934",
              fontWeight: "600",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Enter OTP
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 20,justifyContent:'space-between' }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 8,
              borderWidth: 1,
              backgroundColor: "rgba(8, 143, 129, 0.08)",
              justifyContent:'center',
              alignItems:'center'
        
            }}
          >
            <TextInput
              style={{
                height: 30,
                width:30,
                color: "#7FA89C",
              }}
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 8,
              borderWidth: 1,
              backgroundColor: "rgba(8, 143, 129, 0.08)",
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <TextInput
              style={{
                height: 30,
                width: 30,
                color:"#7FA89C",
              }}
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 8,
              borderWidth: 1,
              backgroundColor:"rgba(8, 143, 129, 0.08)",
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <TextInput
              style={{
                height: 30,
                width: 30,
                color:"#7FA89C",
              }}
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 8,
              borderWidth: 1,
              backgroundColor: "rgba(8, 143, 129, 0.08)",
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <TextInput
              style={{
                height: 30,
                width: 30,
                color: "#7FA89C",
              }}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={{ height: 30, alignItems:"center" }}>
          <Text
            style={{
              color: "#7FA89C",
              fontWeight: "400",
            }}
          >
            OTP Send to registered Mobile Number
          </Text>
        </View>
        <View
          style={{
            // backgroundColor:"#088F81",
           alignItems: "center",
            flexDirection: "row",
            justifyContent:'center',
            gap:10
            

          }}
        >
          <Image
            source={require('../src/Assets/Images/Vector.png')}
            style={{ height: 18,width:18,}}
          />
          <Text style={{color:'#088F81' ,fontWeight:'500'}}>
          00:59
          </Text>
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
            navigation.navigate('BookingScreen');
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    height: "20%",
    backgroundColor: "#088F81",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default OtpScreen;
