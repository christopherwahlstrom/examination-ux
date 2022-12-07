import { useState } from 'react';
import './App.css';
// import Demo from './components/Demo';
import Header from './components/Headers';
import WinnersByGender from './components/WinnerByGender';
import PriceMoney from './components/PriceMoney';

function App() {
	const [animation, setAnimation] = useState('slide-in')

	return (
		<div className="App">
				<Header animation={animation} setAnimation={setAnimation}/>
				<div>
					<WinnersByGender />
					<PriceMoney animation={animation}/>
				</div>
				{/* <Demo /> */}
		</div>
	)
}

export default App