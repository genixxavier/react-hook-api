import React, { useContext } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "bg-black theme-dark" : "theme-white"}>
      <div className="container mx-auto">
        <Header />
        <Characters />
      </div>
    </div>
  );
}

export default App;
