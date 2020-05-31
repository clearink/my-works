import typeScript from "../img/card/typeScript.png";
import git from "../img/card/git.png";
import reactRouter from "../img/card/reactRouter.png";
import babel from "../img/card/babel.png";
import chrome from "../img/card/chrome.png";
import fireFox from "../img/card/fireFox.png";
import npm from "../img/card/npm.png";
import yarn from "../img/card/yarn.png";
import vue from "../img/card/vue.png";
import { shuffle } from "../../utils/shuffle";
const imgs = [typeScript, git, reactRouter, babel, chrome, fireFox, npm, yarn];
export const CardData = (function () {
  return shuffle(imgs.concat(imgs)).map((img, i) => ({
    id: i,
    img,
    visible: false,
    find: false,
  }));
  // return imgs.concat(imgs).map((img, i) => ({
  //   id: i,
  //   img,
  //   visible: false,
  //   find: false,
  // }));
})();
