import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const placeHolderImage = require("@/assets/images/background-image.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    //return console log
    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={placeHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label={"Choose a photo"}
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label={"Use this photo"} />
      </View>
    </View>
  );
}
