import { Text, View, StyleSheet, ImageComponent } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

const placeHolderImage = require("@/assets/images/background-image.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  // text: {
  //   color: "#fff",
  // },
  // button: {
  //   fontSize: 20,
  //   textDecorationLine: "underline",
  //   color: "#fff",
  // },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={placeHolderImage} style={styles.image}></Image>
      </View>
    </View>
  );
}
