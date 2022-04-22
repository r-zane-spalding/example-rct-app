import React from "react";
import { render } from "react-dom";
import CustomTimeline from "./CustomTimeline.tsx";
import "@babylimon/react-calendar-timeline/lib/Timeline.css";
import "./style.css";
const App = () => (
  <div>
    <CustomTimeline />
  </div>
);

render(<App />, document.getElementById("root"));
