import React from "react";
import './App.css';
import './Navbar/Navbar.js'
import Navbar from "./Navbar/Navbar";
import Bandmitglieder from "./Bandmitglieder/Bandmitglieder";
import Kontakt from "./Kontakt/Kontakt";
import Impressum from "./Impressum/Impressum";
import PopRockClassic from "./Genres/PopRockClassic/PopRockClassic";
import Seventees from "./Genres/Seventees/Seventees";
import Beispielsong from "./Beispielsong/Beispielsong.js"
import FAQ from "./FAQ/FAQ";
import Logo from './pictures/Mitglieder/LOGO_N&F.png'
import JazzStandards from "./Genres/JazzStandards/JazzStandards";
import LatinJazz from "./Genres/LatinJazz/LatinJazz";
import { SongProvider  } from './SongContext.js';

function App() {
  return (
    <SongProvider>
      <div id="main-container">
          <div id="logo-container">
              <img src={Logo} id="logo" alt="NickAndFriends"/>
          </div>

          <Navbar />

          <div id="bandmitglieder"><Bandmitglieder /></div>

          <div id="seventees"><Seventees /></div>
          <div id="jazzstandard"><JazzStandards /></div>
          <div id="latinjazz"><LatinJazz /></div>
          <div id="poprockclassic"><PopRockClassic /></div>

          <div id="beispielsong"><Beispielsong /></div>

          <div id="kontakt"><Kontakt /></div>

          <div id="faqs"><FAQ /></div>
          <div><Impressum /></div>
      </div>
    </SongProvider>
  );
}

export default App;
