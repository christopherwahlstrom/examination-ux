import anime from 'animejs';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { topTenData } from '../data/dataExport';
import { useEffect } from 'react';



type animationType = {
  animation: string
}

const TopTen = ({animation}: animationType) => {

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
        if (animationProps !== undefined) {
          anime(animationProps);
        }
    }, [animation]);

  return (
    <article className='wrapper'>
      <h1>Tio i Top vinnare</h1>
      <div className='chart-wrapper top-ten'>
        <Bar data={topTenData} />
      </div>
    </article>
  )
}

export default TopTen