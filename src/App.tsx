import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import WinnerByGender from './views/WinnerByGender';
import PriceMoney from './views/PriceMoney';
import TotalCategory from './views/TotalCategory';
import TopTen from './views/TopTen';
import LandingPage from './views/LandingPage';

function App() {
	const [animation, setNewAnimation] = useState('fade-in')

	return (
		<div className="App">
			<Header animation={animation} setNewAnimation={setNewAnimation}/>
			<div className="content-wrapper">
				<Routes>
					<Route path="/" element={<LandingPage animation={animation} />} />
					<Route path="/price" element={<PriceMoney animation={animation} />} />
					<Route path="/categoryTotal" element={<TotalCategory animation={animation} />} />
					<Route path="/menWomen" element={<WinnerByGender animation={animation} />} />
					<Route path="/topTen" element={<TopTen animation={animation} />} />
				</Routes>
      		</div>
		</div>
	)
}

export default App