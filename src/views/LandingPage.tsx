import anime from 'animejs';
import { useEffect } from 'react';
import './LandingPage.css';

type animationType = {
    animation: string
}



const LandingPage =({animation}: animationType) => {
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

    return (
      <article className='wrapper'>
        <>NOBEL INFOOOOOO</>
      
      </article>
    )
}

export default LandingPage

