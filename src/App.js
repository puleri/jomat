import "@fontsource/cormorant-garamond"
import "@fontsource/cormorant-garamond/700.css"

import "@fontsource/raleway/600.css"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/200.css"



import firebase from 'firebase/app';
import 'firebase/firestore';



import './App.css';

import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import RSVP from "./components/RSVP/RSVP";
import Gallery from "./components/Gallery/Gallery";
import ThingsToDo from "./components/ThingsToDo/ThingsToDo";


function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<LandingPage/>} />
      <Route exact path='/rsvp' element={<RSVP />} />
      <Route exact path='/gallery' element={<Gallery />} />
      <Route exact path='/things-to-do' element={<ThingsToDo />} />
    </Routes>
    </>
  );
}

export default App;
