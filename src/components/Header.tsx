import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';


type animationType = {
	animation: string,
   setNewAnimation: any
}


 const Header = ({animation, setNewAnimation}: animationType) => {
   const [animationSelected, setAnimationSelected] = useState<string>("")
   const [chartSelection, setChartSelection] = useState<string>("")

   const selectAnimation = () => {
      setAnimationSelected("selected");
      setChartSelection("");
    }
    
   const selectCharts = () => {
      setAnimationSelected("")
      setChartSelection("selected")
    }

    return (
    <header className="header">
      <section className="header-title">
         <h1>Nobelpris statistik</h1>
      </section>
      <section className="menu-wrapper">
        <div className="menu-category">
          <div onClick={selectAnimation} className={animationSelected}>Animeringar</div>
          <nav className={animationSelected + "menu"}>
            <li className={animation === "slide-in" ? "activated": ""} onClick={()=> setNewAnimation("slide-in")}>Slide-In</li>
            <li className={animation === "fade-in" ? "activated": ""} onClick={()=> setNewAnimation("fade-in")}>Fade-In</li>
          </nav>
          <div onClick={selectCharts} className={chartSelection}>Diagram</div>
          <nav className={chartSelection + " menu"}>
            <Link to="/">LANDING PAGE</Link>
            <Link to="/price">Prispengar fördelat på år</Link>
            <Link to="/categoryTotal" >Vinster fördelat över kategori</Link>
            <Link to="/menWomen" >Vinnare enligt kön och organisation</Link>
            <Link to="/topTen" >Top 10 vinnare</Link>
          </nav>
        </div>
      </section>
    </header>
  )
}


  export default Header