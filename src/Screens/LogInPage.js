import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";
import React from "react";
function LoginPage() {
  const navigation = useNavigation();

  return (
    <view>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.font}>
            Please Enter Your username and Passward
          </Text>
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
    </view>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "black"
  },
  box: {
    justifyContent: "space-evenly",
    shadowColor: "#000000",
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.89,
    shadowRadius: 9,
    flex: 1,
    backgroundColor: "#20b2aa",
    // justifyContent: "center",
    textAlign: "center",
    marginTop: "20%",
    marginBottom: "20%",
    height: "60%",
    width: "80%",
    marginLeft: "10%",
    borderRadius: 20
  },
  container: {
    backgroundColor: "#faf0e6",
    height: "100vh",
    width: "100%"
  },
  font: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 6,
    fontWeight: "bold",
    fontSize: 25,
    color: "#010014"
  },
  button: {
    shadowColor: "#000000",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.99,
    shadowRadius: 9,
    marginLeft: "7%",
    //marginBottom: "5%",
    height: 49,
    width: "86%",
    backgroundColor: "#000000",
    borderColor: "#7fffd4",
    padding: 13,
    borderRadius: 12
  },
  buttonText: {
    color: "#20b2aa",
    fontSize: 15,
    alignSelf: "center"
  }
});

export default LoginPage;
