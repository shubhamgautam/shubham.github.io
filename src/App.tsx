import * as React from "react";
import BottomBar from "./sections/infobar";
import Content from "./sections/content";
import TopBar from "./sections/topbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <Content />
      <BottomBar />
    </div>
  );
}
