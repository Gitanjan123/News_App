import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./component/News";
import "./App.css";

function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;
