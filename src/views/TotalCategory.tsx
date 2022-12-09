import anime from 'animejs';
import 'chart.js/auto';
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { categoryData } from '../data/dataExport';
import './TotalCategory.css';

type animationType = {
    animation: string
}


const TotalCategory = ({animation}: animationType) => {
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
		  if (animationProps !== undefined) {
			anime(animationProps);
		  }
	}, [animation]);

  return (
      <article className='wrapper'>
          <h1>Totala vinster fördelade över kategori</h1>
          <section className='chart-wrapper circle'> 
                <Pie data={categoryData} />   
          </section>
      </article>
    )
}
      
export default TotalCategory
      