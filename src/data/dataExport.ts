import topWinnerData from './json_laureates.json'
import data2 from './json_award.json';
import { nobelCategoryType } from '../types/data';
import { topTenType } from '../types/data';
import data from './json_laureates.json'


// Vinnare enligt kön , organistaion

type countType = { [key: string]: number };
	const genderData: string[] = data.map(object => object.gender ? object.gender : "organisation")
	
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



// Top Tio vinnare

const topTenData = {
  labels: topTen().map(data => data.name),
  datasets: [{
    label: 'Antal Vinster',
    data: topTen().map(data => data.awards),
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth:  2
  }]
}
function topTen() {
  let topTen: topTenType[] = topWinnerData.map((data) => {
    return {
      name: data.id,
      awards: data.nobelPrizes.length
    }
  })
  let filteredArray: topTenType[] = topTen.sort((object1, object2) => {
    if (object1.awards > object2.awards) {
        return 1;
    }

    if (object1.awards < object2.awards) {
        return -1;
    }

    return 0;
  });
  filteredArray.reverse();
  let getTopTen = filteredArray.slice(0,9);
  let addNewName: topTenType[] = []
  getTopTen.map((data) => {
    topWinnerData.map((compare) => {
      if(compare.id === data.name){
        if(typeof compare.fullName === "undefined") {
          if(!compare.orgName)
            return
          addNewName.push({
            name: compare.orgName.en,
            awards: data.awards
          })
        } else {
          addNewName.push({
            name:compare.fullName.en,
            awards: data.awards
          })
        }
      }
    })
  })
  addNewName.reverse();
  return addNewName
}



// Totalt antal vinster fördelade på kategori


const categoryData = {
  labels: calcCategories().map(event => event.category),
  datasets: [{
    type: 'doughnut',
    label: 'Totala vinster i kategorin',
    data: calcCategories().map(event => event.times),
    hoverOffset: 15
  }]
}
function calcCategories(){
  let combindedPricesArray: nobelCategoryType[] = []
  data2.map((data)=> {
    let newData = JSON.stringify(data)
    let filteredData = JSON.parse(newData)
    if(!filteredData.category)
      return
    combindedPricesArray.push(countArrayCategory(data2, filteredData.category.se))
  })
  
  const uniqArray: nobelCategoryType[] = combindedPricesArray.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === combindedPricesArray.findIndex(object => {
      return JSON.stringify(object) === _value;
    });
  });
  return uniqArray
}
function countArrayCategory(array: any, category: string) {
  var count = 0;
  array.map((data: any)=> {
    if(data.category.se === category){
      count++
    }
  })
  return {times: count, category: category};
  }


  // Genomsnittlig prissumma med justering av penningvärdet
 

const standardPriceAvarageData = {
  labels: priceMoneyAvarage().map(event => event.year),
  datasets: [
    {
      label: 'Pengar med inflation(SEK)',
      data: priceMoneyAvarage().map(event => event.price),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5
    }
  ]
}

const adjustedPriceMoneyData = {
  labels: priceMoneyAvarage().map(event => event.year),
  datasets: [
    {
      label: 'Pengar med inflation (SEK)',
      data: priceMoneyAvarage().map(event => event.adjustedPrice),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5
    }
  ]
}


function priceMoneyAvarage() {
  const combindedPrices = data2.map(
    data => ({ year: data.awardYear, price: data.prizeAmount, adjustedPrice: data.prizeAmountAdjusted })
  )
  return combindedPrices.filter((value, index) => {
    const _value = JSON.stringify(value)
    return index === combindedPrices.findIndex(object => JSON.stringify(object) === _value)
  })
}




export { standardPriceAvarageData, adjustedPriceMoneyData, categoryData, topTenData, winnersByGender }



