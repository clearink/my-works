import React from "react";
import { Switch, useLocation, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { animateNames, fade } from "../../utils/motion";
export default function TransitionSwitch(props) {
  const { routes } = props;
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        {...animateNames}
        variants={fade}
        key={location.pathname}
        className="route-wrap"
      >
        <Switch location={location} key={location.pathname}>
          {routes.map((item) => (
            <Route key={item.path} path={item.path} exact={item.exact}>
              <item.component routes={item.children} />
            </Route>
          ))}
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}
