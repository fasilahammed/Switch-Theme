import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const appStyle = {
    height: "100vh",
    width: "100vw", 
    backgroundColor: isDark ? "#111" : "#fff",
    color: isDark ? "#fff" : "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  
  };

  return (
    <div style={appStyle}>
      <h3>{isDark ? "Dark Theme" : "White Theme"}</h3>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default App;