import { Image, ImageSource } from "expo-image";
import { View } from "react-native";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    //temporaily put the sticker image on -350px of the selected image
    <View style={{ top: -350, backgroundColor: "purple" }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
