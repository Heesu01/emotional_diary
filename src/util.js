import emoiton1 from "./img/emotion1.png";
import emoiton2 from "./img/emotion2.png";
import emoiton3 from "./img/emotion3.png";
import emoiton4 from "./img/emotion4.png";
import emoiton5 from "./img/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emoiton1;
    case "2":
      return emoiton2;
    case "3":
      return emoiton3;
    case "4":
      return emoiton4;
    case "5":
      return emoiton5;
    default:
      return null;
  }
};
