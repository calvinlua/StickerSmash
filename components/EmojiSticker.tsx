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
  const translateX = useSharedValue(0); // for pan gesture
  const translateY = useSharedValue(0); // for pan gesture
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
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  // useAnimatedStyle hook is based on Animated.xxx style
  const imageStyle = useAnimatedStyle(() => {
    return {
      // withSpring got spring-based animation transition
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <GestureDetector gesture={drag}>
      {/* temporaily put the sticker image on -350px of the selected image */}
      <Animated.View style={[{ top: -350 }, containerStyle]}>
        <GestureDetector gesture={doubleTap}>
          {/* Animated component loopks at style prop to apply updates for animation */}
          {/* [] allow overidding */}
          <Animated.Image
            source={stickerSource}
            resizeMode={"contain"}
            style={[{ width: imageSize, height: imageSize }, imageStyle]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
