import { ImageSource } from "expo-image";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize); //  scaling on sticker
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      //double tap action initialize
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });
  const imageStyle = useAnimatedStyle(() => {
    return {
      // withSpring got spring-based animation transition
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });
  return (
    //temporaily put the sticker image on -350px of the selected image
    <View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTap}>
        {/* Animated component loopks at style prop to apply updates for animation */}
        {/* [] allow overidding */}
        <Animated.Image
          source={stickerSource}
          resizeMode={"contain"}
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </GestureDetector>
    </View>
  );
}
