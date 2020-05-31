import Health from "../pages/Health";
import LifeProgress from "../pages/LifeProgress";
import MemoryCard from "../pages/MemoryCard";
import SweetWord from "../pages/SweetWord";
import BreatheRelaxer from "../pages/BreatheRelaxer";
import Bullet from "../pages/Bullet";
import CssArrow from "../pages/CssArrow";
import FitnessGoal from "../pages/FitnessGoal";
import HtmlSupportColor from "../pages/HtmlSupportColor";
import MiniTimer from "../pages/MiniTimer";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/health",
    component: Health,
    exact: true,
  },
  {
    path: "/life-progress",
    component: LifeProgress,
    exact: true,
  },
  {
    path: "/memory-card",
    component: MemoryCard,
    exact: true,
  },
  {
    path: "/sweet-word",
    component: SweetWord,
    exact: true,
  },
  {
    path: "/breathe-relaxer",
    component: BreatheRelaxer,
    exact: true,
  },
  {
    path: "/bullet",
    component: Bullet,
    exact: true,
  },
  {
    path: "/css-arrow",
    component: CssArrow,
    exact: true,
  },
  {
    path: "/fitness-goal",
    component: FitnessGoal,
    exact: true,
  },
  {
    path: "/html-color",
    component: HtmlSupportColor,
    exact: true,
  },
  {
    path: "/mini-timer",
    component: MiniTimer,
    exact: true,
  },
];
export default routes;
