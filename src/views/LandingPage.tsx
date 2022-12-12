import anime from 'animejs';
import { useEffect } from 'react';


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
        }
    
        if (animationProps !== undefined) {
          anime(animationProps);
        }
    }, [animation]);

    return (
      <article className='wrapper-info'>
        <h1>Nobelpriset</h1>
        <p> Nobelpriset är en prestigefull internationell utmärkelse som delas ut varje år till personer och organisationer som har gjort exceptionella insatser inom områdena litteratur, fysik, kemi, fysiologi eller medicin, fred och ekonomi. Nobelpriset instiftades genom testamente av den svenske uppfinnaren och industrimannen Alfred Nobel, och de första priserna delades ut 1901. Nobelpriset är ett av världens mest välkända och prestigefyllda utmärkelser, och många berömda personer har vunnit Nobelpriset genom åren, inklusive Albert Einstein, Marie Curie och Martin Luther King Jr.</p>
      </article>
    )
}

export default LandingPage

