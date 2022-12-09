import anime from 'animejs';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { standardPriceAvarageData, adjustedPriceMoneyData } from '../data/dataExport';
import './PriceMoney.css';


//  Average prize money 

type animationType = { 
	animation: string
  }
  
  const PriceMoney = ({animation}: animationType) => {
	const [dataToShow, setDataToShow] = useState(standardPriceAvarageData);
	const [toggleInflation, setToggleInflation] = useState<boolean>(false);
  
	useEffect(() => {
	  let animationProps;
	  if (animation === 'slide-in') {
		animationProps = {
		  targets: '.wrapper',
		  duraction: 1500,
		  translateX: ["50%",0],
		  easing: "easeInOutQuad"
		};
	  } else if (animation === 'fade-in') {
		animationProps = {
		  targets: '.wrapper',
		  duraction: 1500,
		  opacity: [0,1],
		  easing: "easeInOutQuad"
		};
	  } else if(animation === 'rolldown') {
		animationProps = {
		  targets: '.wrapper',
		  duration: 1500,
		  translationY: ["100deg", 0],
		  easing: "easeInOutQuad"
		};
	  }
  
	  // Kalla endast på anime() om animationProps inte är undefined
	  if (animationProps !== undefined) {
		anime(animationProps);
	  }
	}, [animation]);
  
	function toggleMoneyInflation() {
	  setDataToShow(toggleInflation ? standardPriceAvarageData : adjustedPriceMoneyData);
	  setToggleInflation(!toggleInflation);
	}
  
	return ( 
	  <article className='wrapper'>
		<h1>Genomsnittliga prissumman per år</h1>
		<section className='toggle'>
		  <p>Växla mellan penningvärdet nu och då:</p>
		  <input onClick={toggleMoneyInflation} type="checkbox" id="inflation" />
		</section>
		<section className="chart-wrapp">
		  <Line data={dataToShow} />
		</section>
	  </article>
	);
  }
  export default PriceMoney
  





