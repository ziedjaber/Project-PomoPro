// timerManager.jsx

import React, { useState } from "react";
import './Timer.css';
import Timer from "./Timer";
import Settings from "./Settings"; // Import Settings component only once
import SettingsContext from "./SettingsContext";

const TimerManager = () => { // Change the component name here
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);
  
    return (
      <main>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    );
  }
  

export default TimerManager;
