import './App.css';
import React, { useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import BookingPage from './Components/BookingPage';
import InProgress from './Components/InProgress';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        selectedDate: action.date,
        selectedTime: "Choose Time"
      };
    case 'SET_TIME':
      return {
        ...state,
        selectedTime: action.time
      };
    case 'RESERVE_TIME': {
      const updatedTimes = state.availableTimes.map(timeSlot => {
        if (timeSlot.date.toDateString() === state.selectedDate.toDateString()) {
          return {
            ...timeSlot,
            times: timeSlot.times.map(time => ({
              value: time.value,
              disabled: time.disabled || time.value === state.selectedTime,
            })),
          };
        }
        return timeSlot;
      });
      return {
        ...state,
        availableTimes: updatedTimes,
      };
    }
    case 'CLEAR':
      return {
        ...state,
        selectedDate: new Date(),
        selectedTime: "",
      };
    default:
      throw Error('Unknown action: ' + action.type);
  }
};

const times = () => { return Array.from({length: 6}, (_, i) => ({value: String(i+17)+":00" , disabled: Math.random() < 0.5}))}
var day_generator = Array.from({length: 31}, (_, i) => ({date:new Date().addDays(i), times: times()}))

const initialState = {
  selectedDate: new Date(),
  selectedTime: "",
  availableTimes: day_generator
};


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentPage, setCurrentPage] = useState("home");
  console.log('Initial State in App:', initialState);
  return (
    <>
      <Navbar currentPage={currentPage}/>
      <Routes>
        <Route path="/" exact element={<MainPage setCurrentPage={setCurrentPage} />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              state={state}
              dispatch={dispatch}
              initialState={initialState}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/menu" exact element={<InProgress setCurrentPage={setCurrentPage} />} />
        <Route path="/order" exact element={<InProgress setCurrentPage={setCurrentPage} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
