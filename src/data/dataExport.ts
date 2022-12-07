import data from './json_laureates.json'
import data2 from './json_award.json'


/* Price Money Data */


const adjustedPriceMoneyData = {
    labels: priceMoneyAvarage().map(event => event.year),
    datasets: [{
        label: 'Pengar med inflation (SEK)',
        data: priceMoneyAvarage().map(event => event.adjustedPrice),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.5
    }]
    }
    const standardPriceAvarageData = {
    labels: priceMoneyAvarage().map(event => event.year),
    datasets: [{
        label: 'Pengar med inflation(SEK)',
        data: priceMoneyAvarage().map(event => event.price),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.5
    }]
    }

    type extractedPriceType = {
        year: string,
        price: number,
        adjustedPrice: number,
      }
    
    function priceMoneyAvarage() {
    let combindedPrices: extractedPriceType[] = data2.map((data) => {return {year: data.awardYear, price:data.prizeAmount, adjustedPrice: data.prizeAmountAdjusted}})
    const newArray = combindedPrices.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === combindedPrices.findIndex(object => {
        return JSON.stringify(object) === _value;
        });
    });
    return newArray
    }
      

export { standardPriceAvarageData, adjustedPriceMoneyData }




// //  Average prize money 
// let prizeMoney: any = {}
// data2.map(object => {
	
// 	let money: number = object['prizeAmountAdjusted']
// 	let year = object.awardYear
// 	if( prizeMoney[year] === undefined ) {
// 		prizeMoney[year] = money
// 	} else {
// 		prizeMoney[year] += money
// 	}
// })
// genderLabels.forEach(label => {
// 	let count = prizeMoney[label]
// 	prizeMoney[label] = prizeMoney[label] / count
// })

// const mathDiagramData = {
// 	labels: genderLabels,
// 	datasets: [
// 		{
// 			data: prizeMoney,
// 			label: 'Average prize money',
// 			backgroundColor: ['#344D67', '#6ECCAF']
// 		}
// 	]
// }

// // ************* Scatter plot, math scores *************
// let scatterSeries: any = {}
// data.forEach(object => {
// 	let gender: string = object.gender
// 	let score: number = object['math score']

// 	if( scatterSeries[gender] === undefined ) {
// 		scatterSeries[gender] = [
// 			{ x: 0, y: score }
// 		]
// 	} else {
// 		scatterSeries[gender].push({
// 			// x kommer vara 0, 1, 2, 3 osv.
// 			x: scatterSeries[gender].length, y: score
// 		})
// 	}
// })



//  const palette: string[] = ['#DC3535', '#F49D1A']  // ha med så många färger som det finns olika värden på "gender"
//  type Point = {
//  	x: number;
//  	y: number;
//  }
//  type Dataset = {
//  	label: string;
//  	data: Point[];
//  	backgroundColor: string;
//  }
//  type DiagramData = {
//  	datasets: Dataset[];
//  }


// const scatterDiagramData: DiagramData = {
//  	//[ { label, data, backgroundColor }, ... ]
//  	datasets: []
// }
// genderLabels.forEach((label, index) => {
// 	let dataset: Dataset = {
// 		label: label,
// 		data: scatterSeries[label],
// 		backgroundColor: palette[index]
// 	}
// 	scatterDiagramData.datasets.push(dataset)
// })
// console.log('Student data scatter:', scatterDiagramData)

// export { mathDiagramData, winnersByGenderData }

// categoryDiagramData, genderDiagramData, mathDiagramData, scatterDiagramData