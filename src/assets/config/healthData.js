import hand from "assets/img/washhand.png";
import elbow from "assets/img/elbow.png";
import face from "assets/img/face.png";
import foot from "assets/img/foot.png";
import sick from "assets/img/sick.png";
export const healthData = [
  {
    title: "手",
    intro: "勤洗手",
    detail: "没有什么比洗手能更有效地杀死病毒了，如果有，那就洗两遍。",
    img: hand,
    step: 1,
  },
  {
    title: "肘",
    intro: "咳嗽进肘",
    detail: "快要咳嗽的时候，切忌用手直接去捂口，避免接触交叉感染。",
    img: elbow,
    step: 2,
  },
  {
    title: "脸",
    intro: "忌摸脸",
    detail: "手经常携带病菌，摸脸容易造成病从口入，从眼角膜入...",
    img: face,
    step: 3,
  },
  {
    title: "脚",
    intro: "2米距离",
    detail: "与人保持距离，是种美德。",
    img: foot,
    step: 4,
  },
  {
    title: "病",
    intro: "待在家",
    detail: "不舒服通常意味着免疫力下降，待在家自我隔离是上上策。",
    img: sick,
    step: 5,
  },
];
