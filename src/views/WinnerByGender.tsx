import anime from 'animejs';
import {useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import { winnersByGender } from '../data/dataExport'



type animationType = {
	animation: string
  }

const WinnerByGender = ({animation}: animationType) => {

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
        }
    
        // Kalla endast på anime() om animationProps inte är undefined
        if (animationProps !== undefined) {
          anime(animationProps);
        }
    }, [animation]);

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