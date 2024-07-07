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

export const emotionList = [
  {
    id: 1,
    name: "완전 좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgById(5),
  },
];

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date > 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
