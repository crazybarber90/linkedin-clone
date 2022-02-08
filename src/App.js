// import { Feed } from "@mui/icons-material";
import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      {/* Sidebar */}

      {/* Feed */}

      {/* Widgets */}

      {/* STAO SAM NA 50:56   https://www.youtube.com/watch?v=QaYts9sPmcY
      https://icons8.com/icons/ IKONICE
      */}
    </div>
  );
}
export default App;
