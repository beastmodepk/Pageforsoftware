import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AvatarSelect from "./pages/AvatarSelect";
import LessonSelect from "./pages/LessonSelect";
import Security1 from "./pages/Security1";
import Security2 from "./pages/Security2";
import Security3 from "./pages/Security3";
import Security4 from "./pages/Security4";
import Security5 from "./pages/Security5";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={AvatarSelect} />
      <Route path="/select-lesson" component={LessonSelect} />
      <Route path="/Security1" component={Security1} />
      <Route path="/Security2" component={Security2} />
      <Route path="/Security3" component={Security3} />
      <Route path="/Security4" component={Security4} />
      <Route path="/Security5" component={Security5} />
    </Switch>
  );
}
