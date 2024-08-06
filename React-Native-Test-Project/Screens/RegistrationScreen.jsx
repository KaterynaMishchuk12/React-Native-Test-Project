import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import AddIcon from "../assets/images/add.svg";

export function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const { width, height } = useWindowDimensions();

  const keyboardIsHidden = () => {
    Keyboard.dismiss(); //закриття клавітури
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardIsHidden}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/backgroundImg.png")}
          style={{
            resizeMode: "cover",
            width: width,
            height: height,
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <View style={styles.infoWrapper}>
            <View style={styles.avatarContainer}></View>
            <TouchableOpacity style={styles.addIcon}>
              {/* <AddIcon /> */}
            </TouchableOpacity>
            <View style={styles.infoBox}>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  value={login}
                  onChangeText={(login) => setLogin(login)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  textContentType="emailAddress"
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    textContentType="password"
                    secureTextEntry={passwordIsHidden}
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                  />
                  <TouchableOpacity
                    style={styles.passwordHideBtn}
                    onPress={() => setPasswordIsHidden(!passwordIsHidden)}
                  >
                    <Text style={styles.passwordHideText}>
                      {passwordIsHidden ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.registerText}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.toLogin}>
                <Text>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  infoWrapper: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    // height: 550,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  infoBox: { width: "100%" },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35,
    color: "black",
    textAlign: "center",
    marginTop: 92,
    marginBottom: 32,
  },
  button: {
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginBottom: 16,
    width: "100%",
  },
  registerText: {
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    gap: 16,
    marginBottom: 43,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    width: "100%",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordHideBtn: {
    position: "absolute",
    top: 10,
    right: 12,
  },
  passwordHideText: {
    fontSize: 16,
    color: "#1B4371",
  },
  toLogin: {
    textAlign: "center",
  },
});
