import React, { useEffect, useState } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";

function App() {
  const [mode, setMode] = useState<"dark" | "light">(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", mode);
    document.documentElement.style.colorScheme = mode;
    document.body.style.backgroundColor =
      mode === "dark" ? "#0b0f17" : "#f6f7fb";
  }, [mode]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode}-mode`}>
      <Navigation
        mode={mode}
        modeChange={() =>
          setMode((current) => (current === "dark" ? "light" : "dark"))
        }
      />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
