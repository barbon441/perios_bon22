import React, { useState } from 'react';
import Header from './components/Header';
import PeriodTracker from './components/PeriodTracker';
import HomePage from './components/HomePage';
import CalendarHeader from './components/CalendarHeader';
import Login from './components/Login';
import './App.css';

function App() {
  const [showPeriodTracker, setShowPeriodTracker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleLogPeriod = () => {
    setShowPeriodTracker(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container mx-auto">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Header />
          <CalendarHeader selectedDate={selectedDate} handleDateChange={handleDateChange} />

          {!showPeriodTracker && (
            <HomePage selectedDate={selectedDate} handleDateChange={handleDateChange} />
          )}

          {showPeriodTracker && <PeriodTracker />}
        </>
      )}
    </div>
  );
}

export default App;