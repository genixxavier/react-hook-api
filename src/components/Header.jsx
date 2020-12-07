import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  //const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <div className="Header">
      <nav className="level container transparent is-mobile">
        <div className="level-left">
          <div className="level-item has-text-centered">
            <h2>React Hooks</h2>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item is-hidden-touch">
            <button
              className="py-2 px-4 font-semibold focus:outline-none"
              type="button"
              onClick={handleClick}
            >
              theme: {theme ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
