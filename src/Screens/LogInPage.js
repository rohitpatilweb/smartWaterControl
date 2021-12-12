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
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
    width: "100%",
    height: 150,
    backgroundColor: "#1f7882",
    borderRadius: 11
  },
  backgrad: {
    position: "absolute",
    elevation: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
    width: "100%",
    height: 226,
    backgroundColor: "#1f7882"
  },
  input: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 9,
    height: 40,
    width: "90%",
    marginBottom: 15,
    marginLeft: "5%",
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    color: "black"
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
    elevation: 20,
    height: 480,
    textAlign: "center",
    marginTop: "20%",
    marginLeft: 30,
    marginRight: 30,
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
    marginBottom: 10,
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
    marginTop: 5,
    elevation: 25,
    height: 40,
    width: "50%",
    backgroundColor: "#1f7882",
    borderColor: "#7fffd4",
    padding: 8,
    borderRadius: 15
  },
  buttonText: {
    color: "#ffff",
    fontSize: 15,
    alignSelf: "center"
  }
});

export default LoginPage;
