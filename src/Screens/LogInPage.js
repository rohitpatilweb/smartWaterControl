import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from "react-native";
import React from "react";
function LoginPage() {
  const navigation = useNavigation();

  return (
    <view>
      <View style={styles.container}>
        <View style={styles.backgrad}></View>
        <View style={styles.box}>
          <View style={styles.grad}>
            <View style={styles.imageBox}>
              <Image
                style={styles.images}
                source={require("../Assets/login.png")}
              />
            </View>
            <Text style={styles.Headerfont}>Welcome Back</Text>
          </View>
          <View style={styles.flexing}>
            <Text style={styles.font}>Please Enter Username and Passward</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="username"
                placeholderTextColor="black"
              />
              <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="black"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("LoginPage")}
              >
                <Text style={styles.buttonText}>L O G I N</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </view>
  );
}

const styles = StyleSheet.create({
  grad: {
    paddingTop: "4%",
    paddingBottom: "4%",
    justifyContent: "space-between",
    width: "100%",
    height: "31%",
    backgroundColor: "#1f7882",
    // zIndex:100,
    borderRadius: 11
  },
  backgrad: {
    //  zIndex:10,
    position: "absolute",
    elevation: 20,
    paddingTop: "4%",
    paddingBottom: "4%",
    justifyContent: "space-between",
    width: "100%",
    height: "35%",
    backgroundColor: "#1f7882"
    //  borderRadius:10
  },
  input: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 9,
    height: "27%",
    width: "90%",
    marginBottom: "7%",
    marginLeft: "5%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "black"
  },
  imageBox: {
    marginTop: "5%",
    marginLeft: "45%",
    height: "5%",
    width: "10%"
  },
  images: {
    height: 50,
    width: 50,
    alignSelf: "center"
  },
  box: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 90,
    // justifyContent: "space-evenly",
    flex: 1,
    textAlign: "center",
    marginTop: "30%",
    marginBottom: "30%",
    marginLeft: "10%",
    height: "auto",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#F9F7F7"
  },
  flexing: {
    height: "70%",
    justifyContent: "space-evenly"
  },
  container: {
    backgroundColor: "#F9F7F7",
    height: "100vh",
    width: "100%"
  },
  Headerfont: {
    marginBottom: "5%",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    elevation: 25,
    fontSize: 30,
    color: "#ffffff"
  },
  font: {
    marginLeft: "5%",
    marginRight: "5%",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.100000000)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
    fontSize: 20,
    color: "#1f7882",
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 9,
    marginLeft: "25%",
    marginTop: "2%",
    elevation: 25,
    height: "27%",
    width: "50%",
    backgroundColor: "#1f7882",
    borderColor: "#7fffd4",
    padding: 15,
    borderRadius: 15
  },
  buttonText: {
    color: "#ffff",
    fontSize: 15,
    alignSelf: "center"
  }
});

export default LoginPage;
