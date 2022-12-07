import './WinnerByGender.css';
import anime from 'animejs';
import {useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import { countType } from '../models/data';
import data from '../data/json_laureates.json'


type animationType = {
	animation: string
  }

const WinnerByGender = ({animation}: animationType) => {

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

	
	const genderData: string[] = data.map(object => object.gender ? object.gender : "organisation")
	 // male, female, org 
	let genderLabels: string [] | undefined =  [], genderCount: countType = {}
	
	for( let i: number = 0; i < genderData.length; i++ ) {
	
		if (!genderLabels.includes(genderData[i])) {
			genderLabels.push(genderData[i])
		}
		if (genderCount[genderData[i]] === undefined ) {
			genderCount[genderData[i]] = 1
		} else {
			genderCount[genderData[i]]++   
		}
	}
	
	
	let genderDataset: number[] = []
	
	genderLabels.forEach(label => {
		genderDataset.push(genderCount[label])
	})
	
	
	const winnersByGender = {
		labels: genderLabels,
		datasets: [{
				label: 'Winners',
				data: genderDataset,
				backgroundColor: ['#344D67', '#6ECCAF', '#ADE792'], hoverOffset: 15
			}]
	}


    return (
        <article className="wrapper">
				<h1> Fördelning män, kvinnor, organistation pristagare </h1>
            <section className='chart-wrapper pie'>
                <Pie data={winnersByGender}/>
            </section>
        </article>
    )

}

export default WinnerByGender