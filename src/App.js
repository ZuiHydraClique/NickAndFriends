import './App.css';
import './Navbar/Navbar.js'
import Navbar from "./Navbar/Navbar";
import Bandmitglieder from "./Bandmitglieder/Bandmitglieder";
import Kontakt from "./Kontakt/Kontakt";
import Impressum from "./Impressum/Impressum";
import Weihnachtslieder from "./Weihnachtslieder/Weihnachtslieder";
import JazzPopLieder from "./Jazzpoplieder/JazzPopLieder";
import FAQ from "./FAQ/FAQ";


function App() {
  return (
      <div>
          <Navbar />

          <div id="bandmitglieder"><Bandmitglieder /></div>
          <div id="jazzpoplieder"><JazzPopLieder /></div>
          <div id="weihnachtslieder"><Weihnachtslieder /></div>
          <div id="kontakt"><Kontakt /></div>
          <div id="faqs"><FAQ /></div>
          <div id="impressum"><Impressum /></div>
      </div>
  );
}

export default App;
