let stekloPrice = [
    {
        name: "Триплекс 3.1.3",
        price: 3000,
        article: 1,
    },
    {
        name: "Триплекс 4.1.4",
        price: 1000,
        article: 2,
    },
    {
        name: "СПО 24 мм (4М1 / 16 / 4М1)",
        price: 1000,
        article: 3,
    },
    {
        name: "СПО 32 мм (3.1.3/20/6М1)",
        price: 1000,
        article: 4,
    },
    {
        name: "СПО 32 мм (3.1.3/20/3.1.3)",
        price: 1000,
        article: 5,
    },
    {
        name: "СПД 32 мм (4М1 / 10 / 4М1 / 10 / 4М1)",
        price: 1000,
        article: 6,
    },
    {
        name: "СПД 40 мм (6М1 зак / 12 / 4М1 / 12 / 3.1.3)",
        price: 1000,
        article: 7,
    },
    {
        name: "Другое",
        price: 3000,
        article: 1,
    },
]

let articles = [
    {
        article: "ALM150055",
        price: 6300,
        unitLenght: 6800,
        name: "55 mm",
    },
    {
        article: "ALM150075",
        price: 7100,
        unitLenght: 6800,
        name: "75 mm",
    },
    {
        article: "ALM150095",
        price: 6800,
        unitLenght: 6800,
        name: "95 mm",
    },
    {
        article: "ALM150115",
        price: 10300,
        unitLenght: 6800,
        name: "115 mm",
    },
    {
        article: "ALM150135",
        price: 9700,
        unitLenght: 6800,
        name: "135 mm",
    },
];

let dopAcces = [
    {
        article: "ALM159310",
        price: 1500,
        unitLenght: 6800,
        name: "55 mm",
    },
    {
        article: "ALM159012",
        price: 1000,
        unitLenght: 6800,
        name: "55 mm",
    },
    {
        article: "ALM159012",
        price: 1150,
        unitLenght: 6800,
        name: "55 mm",
    },
];

let accesuars = [
    {
        value: 1,
        price: 1000,
        name: "6 мм"
    },
    {
        value: 2,
        price: 1000,
        name: "8 мм"
    },
    {
        value: 3,
        price: 1000,
        name: "24 мм"
    },
    {
        value: 4,
        price: 1000, // Фин
        name: "32 мм"
    },
    {
        value: 5,
        price: 1000,
        name: "40 мм"
    },
]




// Select для стоек
const stoykaSelect = document.querySelector('#verticalSelect');
articles.forEach(prop => {
    const option = document.createElement("option");
    option.value = prop.article;
    option.text = prop.name;
    stoykaSelect.add(option);
})

// Select для ригелей
const rigelSelect = document.querySelector('#horizontSelect');
articles.forEach(prop => {
    const option = document.createElement("option");
    option.value = prop.article;
    option.text = prop.name;
    rigelSelect.add(option);
})

// Select для заполнения
const glassSelect = document.querySelector('#glassSelect');
stekloPrice.forEach(prop => {
    const option = document.createElement("option");
    option.value = prop.article;
    option.text = prop.name;
    glassSelect.add(option);
})



// const width = document.querySelector('#width').value;
// const height = document.querySelector('#height').value;
// const calculateButton = document.querySelector('#calculateButton');

// let glassSelectValue = document.querySelector('#glassSelect').value;

// let stoykaCount = document.querySelector('#stoykaCount').value;
// let rigelCount = document.querySelector('#rigelCount').value;

// let stoykaChoosen = document.querySelector('#verticalSelect').value;
// let rigelChoosen = document.querySelector('#horizontSelect').value;

// let optimizationRigelNumber = document.querySelector('#stoykaCount').value-1;



calculateButton.addEventListener('click', function (){
    let infoZone = document.querySelector('#information');

    infoZone.innerText = "";
    
    let square = (document.querySelector('#width').value/1000) * (document.querySelector('#height').value/1000);
    let glassCost = glassCalculated(document.querySelector('#glassSelect').value, square);

    let verticalCost = verticalCalculated(document.querySelector('#verticalSelect').value);
    let horizontalCost = horizontalCalculated(document.querySelector('#horizontSelect').value);
    let accesuarsCost = accesuarsCalculated(document.querySelector('#glassSelect').value);

    let priceValue = document.querySelector('#priceValue').value; // % наценки
    let deliveryValue = document.querySelector("#deliveryValue").value; // Стоимость доставки
    let montageValue = document.querySelector('#montageValue').value; // Стоимость монтажа

    let nameConstruction = document.getElementById('nameConstructionTD');
    let kpPrice = document.querySelector('#kpPrice');
    let allKpPrice = document.querySelector('#allKpPrice');


    let allSumm = (((glassCost + verticalCost + horizontalCost + accesuarsCost)*(priceValue/100+1))+Number(deliveryValue)+(Number(montageValue*square)));

    infoZone.innerText = `Стоимость заполнения ${glassCost} 
    Стоимость стоек ${verticalCost} 
    Стоимость ригелей ${horizontalCost} 
    Стоимость аксесуаров ${accesuarsCost} 
    
    Общая стоимость конструкции без наценки: ${glassCost + verticalCost + horizontalCost + accesuarsCost}
    Количество квадртаных метров: ${square}
    Стоимость доставки: ${deliveryValue} 
    Стоимость монтажа: ${montageValue*square}

    Стоимость с наценкой: ${allSumm}`;

    console.log (nameConstruction);

    nameConstruction.innerText = `Алюминиевая стоечно-ригельная конструкция Alumark F50. Архитектурные габариты изделия: ${document.querySelector('#width').value}x${document.querySelector('#height').value} (Н) мм.`;
    kpPrice.innerText = `${((glassCost + verticalCost + horizontalCost + accesuarsCost)*(priceValue/100+1))}.00`;
    allKpPrice.innerText = `${((glassCost + verticalCost + horizontalCost + accesuarsCost)*(priceValue/100+1))}.00`;

    let deliveryPrice = document.querySelector('.deliveryPrice');
    let deliveryPrice2 = document.querySelector('.deliveryPrice2');
    deliveryPrice.innerText = `${deliveryValue}.00`;
    deliveryPrice2.innerText = `${deliveryValue}.00`;

    let montagePrice = document.querySelector('.montagePrice');
    let montagePrice2 = document.querySelector('.montagePrice2');
    montagePrice.innerText = `${montageValue*square}.00`;
    montagePrice2.innerText = `${montageValue*square}.00`;


    let totalCost = document.querySelector('.total-cost');
    totalCost.innerText = `Стоимость проекта: ${allSumm}.00 в т.ч. НДС 20%`


    let stoykaProfil = document.querySelector('#stoykaProfil');
    stoykaProfil.innerText = `Стойка: ${document.querySelector('#verticalSelect').value}`;

    let rigelProfil = document.querySelector('#rigelProfil');
    rigelProfil.innerText = `Ригель: ${document.querySelector('#horizontSelect').value}`;

    let stekloProfil = document.querySelector('#stekloProfil');
    console.log (glassSelect);
    console.log (glassSelect.value);
    stekloProfil.innerText = `Заполнение: ${glassSelect.options[glassSelect.selectedIndex].text}`;
})

function verticalCalculated (value) {
    let stoykaById = articles.find(prop => prop.article == value);
    let stoykaQuantityOnLenght = Math.floor(stoykaById.unitLenght/document.querySelector('#height').value);
    console.log (stoykaQuantityOnLenght)
    if (stoykaById.unitLenght < document.querySelector('#height').value) {
        alert ("Dop Kronstein")
    } else {
        let stoykaPrice = Math.ceil((document.querySelector('#stoykaCount').value)/stoykaQuantityOnLenght) * stoykaById.price;
        return stoykaPrice;
    }   
}

function horizontalCalculated (value) {
    let rigelById = articles.find(prop => prop.article == value);
    let stoykaQuantityOnLenght = Math.ceil(rigelById.unitLenght/ (document.querySelector('#width').value / document.querySelector('#stoykaCount').value-1));
    
    let allRigels = document.querySelector('#rigelCount').value*((document.querySelector('#stoykaCount').value)-1);
    let rigelPrice = Math.ceil(allRigels/stoykaQuantityOnLenght) * rigelById.price;
    return rigelPrice;
}

function accesuarsCalculated (value) {
    let widthValue = Math.ceil((document.querySelector('#width').value * document.querySelector('#rigelCount').value) / 1000);
    let heightValue = Math.ceil((document.querySelector('#height').value * document.querySelector('#stoykaCount').value) / 1000);
    let kronshtein = 1200;

    return (accesuars[0].price * widthValue) + (accesuars[0].price * heightValue) + kronshtein*document.querySelector('#stoykaCount').value*2;
}



// function universalCostFunc (value) {
//     let stoykaById = articles.find(prop => prop.article == value);
//     let universalLength = stoykaById.unitLenght;
//     let rigelLength = Math.floor(width/optimizationRigelNumber);
//     console.log (rigelLength);
//     let stoykaLength = height;
//     console.log (stoykaLength);
//     let rigelCountUni = rigelCount*optimizationRigelNumber;
//     let stoykaCountUni = stoykaCount;

//     let totalSegments = 0;
//     let stoykaInHlyst = 0;
//     let rigelInHlyst = 0;
//     while (universalLength > 0) {
//         if (universalLength >= stoykaLength) {
//             if (stoykaInHlyst >= stoykaCountUni) {
//                 console.log ("word1");
//                 continue
//             };
//             universalLength -= stoykaLength;
//             totalSegments++;
//             stoykaInHlyst++;
//             console.log (totalSegments)
//         } else if (universalLength >= rigelLength) {
//             if (rigelInHlyst >= rigelCountUni) {
//                 console.log ("word2");
//                 continue;
//             }
//             universalLength -= rigelLength;
//             totalSegments++;
//             rigelInHlyst++;
//         } else {
//           break; // Если ни один из отрезков не помещается, завершаем цикл
//         }
//     }
//     console.log (totalSegments);
// }

function glassCalculated (value, square) {
    let glassById = stekloPrice.find(prop => prop.article == value);
    return square * glassById.price;
}


// POP UP REALISATION
const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');

menuButton.addEventListener('click', function() {
    popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
   
});

// let clickerPopUpContent = document.querySelector('.container');

// popupMenu.addEventListener("click", function (eve) {
//     // Проверка, где был сделал клик, внутри попАп контента или снаружи
//     const isClickOutside = !eve.composedPath().includes(clickerPopUpContent);

//     // Если снаружи, то тоглим класс на закрытие!
//     if (isClickOutside) {
//         popupMenu.style.display = 'none' ;
//     }
// })