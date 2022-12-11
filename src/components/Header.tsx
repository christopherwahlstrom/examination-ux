import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'

type animationType = {
  animation: string,
  setNewAnimation: any
}

const Header = ({ animation, setNewAnimation }: animationType) => {
  const [animationSelected, setAnimationSelected] = useState<string>("");
  const [chartSelection, setChartSelection] = useState<string>("");

  const selectAnimation = () => {
    setAnimationSelected("selected");
    setChartSelection("");
  }

  const selectCharts = () => {
    setAnimationSelected("");
    setChartSelection("selected");
  }

  return (
    <header className="header">
      <section className="header-title">
        <h1>Nobelpris statistik</h1>
      </section>
      <section className="menu-wrapper">
        <div className="menu-tab">
          <button onClick={selectAnimation} className={animationSelected}>Animeringar </button>
          <nav className={`menu ${animationSelected}`}>
            <button id="animation-btn" className={animation === "slide-in" ? "activated" : ""} onClick={() => setNewAnimation("slide-in")}>Slide-In</button>
            <button id="animation-btn" className={animation === "fade-in" ? "activated" : ""} onClick={() => setNewAnimation("fade-in")}>Fade-In</button>
          </nav>
        </div>
        <div className="menu-tab">
          <button onClick={selectCharts} className={chartSelection}>Diagram</button>
          <nav className={`menu ${chartSelection}`}>
            <button className="btn-link"><Link to="/">Nobel Info</Link></button>
            <button className="btn-link"><Link to="/price">Prispengar fördelat på år</Link></button>
            <button className="btn-link"><Link to="/categoryTotal" >Vinster fördelat över kategori</Link></button>
            <button className="btn-link"><Link to="/menWomen" >Vinnare enligt kön och organisation</Link></button>
            <button className="btn-link"><Link to="/topTen" >Top 10 vinnare</Link></button>
          </nav>
        </div>
      </section>
    </header>
  )
}

export default Header