import anime from 'animejs';
import { Line } from 'react-chartjs-2';
import data2 from '../data/json_award.json'
import { useEffect, useState } from 'react';
import { standardPriceAvarageData, adjustedPriceMoneyData } from '../data/dataExport';
import './PriceMoney.css';


//  Average prize money 

type animationType = { 
	animation: string
}

const PriceMoney = ({animation}: animationType) => {
	const [dataToShow, setDataToShow] = useState (standardPriceAvarageData)
	const [toggleInflation, setToggleInflation] = useState<boolean>(false)
	
	useEffect(() => {
		if(animation === 'slide-in') {
			anime({   
				targets: '.wrapper',
				duraction: 1500,
				translateX: ["100%",0],
				easing: "easeInOutQuad"
			})
		} else if (animation === 'fade-in') {
			anime({  
				targets: '.wrapper',
				duraction: 1500,
				opacity: [0,1],
				easing: "easeInOutQuad"
			})
		} else if(animation === 'rolldown') {
			anime({ 
				targets: '.wrapper',
				duration: 1500,
				translationY: ["100deg", 0],
				easing: "easeInOutQuad"
			})
		}
	}, [])


	function toggleMoneyInflation () {
		if(!toggleInflation) {
			setDataToShow(adjustedPriceMoneyData) 
			setToggleInflation(!toggleInflation)
		} else {
			setDataToShow(standardPriceAvarageData)
			setToggleInflation(!toggleInflation)
		}
	}

	return ( 
		<article className='wrapper'>
			<h1>Vinstpengar per år</h1>
			<section className='toggle'>
				<p>Växla mellan penningvärdet nu och då:</p>
				<input onClick={toggleMoneyInflation} type="checkbox" id="inflation" />
			</section>
			<section className="chart-wrapp">
				<Line data={dataToShow} />
			</section>
		</article>
	)
}



export default PriceMoney

