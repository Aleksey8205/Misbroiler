const animalImages = {
    'animal1': 'image/broiler-calculator.png', //broiler
    'animal2': 'image/rabbit-calculator.jpg', //rabbit  
    'animal3': 'image/pig.webp',  //pig
    'animal4': 'image/cow.webp', //cow
    'animal5': 'image/chicken.webp', //chicken
    'animal6': 'image/peperel.webp', //perepel
    'animal7': 'image/gobbler.webp', //gobbler
    'animal8': 'image/duck.jpg' //duck
};

const animalColors = {
    'animal1': 'rgb(153, 225, 239)',
    'animal2': 'rgb(230, 140, 120)',
    'animal3': 'rgb(244, 167, 89)',
    'animal4': 'rgb(101, 164, 126)',
    'animal5': 'rgb(106, 205, 228)',
    'animal6': 'rgb(255, 218, 90)',
    'animal7': 'rgb(249, 193, 198)',
    'animal8': 'rgb(240, 104, 141)'
};

const animalData = {
    'animal1': {
        A: { amount: 570 },
        B: { amount: 1700 },
        C: { amount: 2900 }
    },
    'animal2': {
        A: { amount: 0 },
        B: { amount: 0 },
        C: { amount: 0 },
        D: { amount: 0 }
    },
    'animal3': {
        A: { amount: 5500 },
        B: { amount: 16000 },
        C: { amount: 85000 },
        D: { amount: 170000 }
    },
    'animal4': {
        A: { amount: 12345 },
    },
    'animal5': {
        A: { amount: 800 },
        B: { amount: 8000 },
        C: { amount: 100 },
    },
    'animal6': {
        A: { amount: 480 },
        B: { amount: 1000 },
        C: { amount: 30 }
    },
    'animal7': {
        A: { amount: 2900 },
        B: { amount: 16800 },
        C: { amount: 22700 }
    },
    'animal8': {
        A: { amount: 3000 },
        B: { amount: 5900 },
    }
};



function selectAnimal(animalType) {
    const imgElement = document.querySelector('.image-calculator');
    imgElement.src = animalImages[animalType]; 
    updateResultBlocks(animalType); 
    calculateFeed(); 
}

document.getElementById('heads').addEventListener('input', function () {
    calculateFeed(); // При изменении количества голов пересчитываем кормы
});

// Добавляем обработчик для радио-кнопок выбора животного
document.querySelectorAll('input[name="animal"]').forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        selectAnimal(this.value); // При изменении животного вызываем смену изображения и расчеты
    });
});

// Функция для расчета количества кормов
function calculateFeed() {
    const headsInput = document.getElementById('heads');
    const animalType = document.querySelector('input[name="animal"]:checked').value;
    const data = animalData[animalType];

    let totalKilogramsA = 0, totalKilogramsB = 0, totalKilogramsC = 0, totalKilogramsD = 0;

    if ('A' in data) {
        totalKilogramsA = headsInput.value * data.A.amount / 1000;
    }
    if ('B' in data) {
        totalKilogramsB = headsInput.value * data.B.amount / 1000;
    }
    if ('C' in data) {
        totalKilogramsC = headsInput.value * data.C.amount / 1000;
    }
    if ('D' in data) {
        totalKilogramsD = headsInput.value * data.D.amount / 1000;
    }

    const totalKilogramsTotal = totalKilogramsA + totalKilogramsB + totalKilogramsC + totalKilogramsD;

    const bagsOfFeedA = Math.ceil(totalKilogramsA / 25);
    const bagsOfFeedB = Math.ceil(totalKilogramsB / 25);
    const bagsOfFeedC = Math.ceil(totalKilogramsC / 25);
    const bagsOfFeedD = Math.ceil(totalKilogramsD / 25);

    const bagsOfFeedTotal = Math.ceil(totalKilogramsTotal / 25);

    updateResults(
        bagsOfFeedA, totalKilogramsA,
        bagsOfFeedB, totalKilogramsB,
        bagsOfFeedC, totalKilogramsC,
        bagsOfFeedD, totalKilogramsD,
        bagsOfFeedTotal, totalKilogramsTotal,
        animalType
    );
}

//Функция вывода рассчетов в блоки slider-bubble
function updateResults(bagsOfFeedA, totalKilogramsA, bagsOfFeedB, totalKilogramsB, bagsOfFeedC, totalKilogramsC, bagsOfFeedD, totalKilogramsD, bagsOfFeedTotal, totalKilogramsTotal, animalType) {
    switch (animalType) {
        case 'animal1':
            document.getElementById('itog').innerHTML = `<div class="itog-all">Итого: ${totalKilogramsTotal.toFixed(1)} кг (количество мешков: ${bagsOfFeedTotal})</div>`;
            break;
        case 'animal2':
            document.getElementById('itog').innerHTML = `<div class="itog-all">От условий</div>`;
            break;
        case 'animal3':
            document.getElementById('itog').innerHTML = `<div class="itog-all">Итого: ${totalKilogramsTotal.toFixed(1)} кг (количество мешков: ${bagsOfFeedTotal})</div>`;
            break;
        case 'animal4':
            document.getElementById('itog').innerHTML = `<div class="itog-all">От условий</div>`;
            break;
        case 'animal5':
            document.getElementById('itog').innerHTML = `<div class="itog-all">Итого: ${totalKilogramsTotal.toFixed(1)} кг (количество мешков: ${bagsOfFeedTotal})</div>`;
            break;
        case 'animal6':
            document.getElementById('itog').innerHTML = `<div class="itog-all">Итого: ${totalKilogramsTotal.toFixed(1)} кг (количество мешков: ${bagsOfFeedTotal})</div>`;
            break;
        case 'animal7':
            document.getElementById('itog').innerHTML = `<div class="itog-all">Итого: ${totalKilogramsTotal.toFixed(1)} кг (количество мешков: ${bagsOfFeedTotal})</div>`;
            break;
        case 'animal8':
            document.getElementById('itog').innerHTML = `<div class="itog-all">Итого: ${totalKilogramsTotal.toFixed(1)} кг (количество мешков: ${bagsOfFeedTotal})</div>`;
            break;
    }

    switch (animalType) { 
        case 'animal1':
            document.querySelectorAll('.text-calc')[0].innerText = `Старт 0-14 дней \n${bagsOfFeedA} мешков ${totalKilogramsA.toFixed(1)}кг`;
            document.querySelectorAll('.text-calc')[1].innerText = `Рост 15-28 дней \n${bagsOfFeedB} мешков ${totalKilogramsB.toFixed(1)}кг`;
            document.querySelectorAll('.text-calc')[2].innerText = `Финиш  старше 29 дней \n${bagsOfFeedC} мешков ${totalKilogramsC.toFixed(1)}кг`;
            break;
        case 'animal2':
            document.querySelectorAll('.text-calc')[0].innerText = `На откроме вволю 63-77 дней`;
            document.querySelectorAll('.text-calc')[1].innerText = `После отъема 0.1 кг/сут \n 36-62 дней`;
            document.querySelectorAll('.text-calc')[2].innerText = `Матки 0.25 кг/сут окрол-отъем`;
            document.querySelectorAll('.text-calc')[3].innerText = `До отъема вволю \n 0 - 35 дней`;
            break;
        case 'animal3':
            document.querySelectorAll('.text-calc')[0].innerText = `Megapig  \n ${totalKilogramsA.toFixed(1)}  \n 5-42 дня`;
            document.querySelectorAll('.text-calc')[1].innerText = `${totalKilogramsB.toFixed(1)}кг\n Старт\n 43-60`;
            document.querySelectorAll('.text-calc')[2].innerText = `${totalKilogramsC.toFixed(1)}кг\n Рост \n 61- 104 дня`;
            document.querySelectorAll('.text-calc')[3].innerText = `${totalKilogramsD.toFixed(1)}кг\n Финиш \n105-170 дней`;

            break;
        case 'animal4':
            document.querySelectorAll('.text-calc')[0].innerText = `Данные в таблице\nна сайте мегакорм`;
            break;
        case 'animal5':
            document.querySelectorAll('.text-calc')[0].innerText = `${totalKilogramsA.toFixed(1)}кг \nСтарт\n 0-35 дней`;
            document.querySelectorAll('.text-calc')[1].innerText = `${totalKilogramsB.toFixed(1)}кг \nРост\n 42-133 дней`;
            document.querySelectorAll('.text-calc')[2].innerText = `${totalKilogramsC.toFixed(1)}кг \nПериод яйцекладки\n 29 дней`;
            break;
        case 'animal6':
            document.querySelectorAll('.text-calc')[0].innerText = `${totalKilogramsA.toFixed(1)}кг \nСтарт \n0-21 день`;
            document.querySelectorAll('.text-calc')[1].innerText = `${totalKilogramsB.toFixed(1)}кг \nРост \n21-42 день`;
            document.querySelectorAll('.text-calc')[2].innerText = `${totalKilogramsC.toFixed(1)}кг \nПериод Яйцекладки\n>42 дней`;
            break;
        case 'animal7':
            document.querySelectorAll('.text-calc')[0].innerText = `${totalKilogramsA.toFixed(1)}кг \nСтарт \n0-35 дней`;
            document.querySelectorAll('.text-calc')[1].innerText = `${totalKilogramsB.toFixed(1)}кг \nРост \n35-71 день`;
            document.querySelectorAll('.text-calc')[2].innerText = `${totalKilogramsC.toFixed(1)}кг \nФиниш\n>71 дней`;
            break;
        case 'animal8':
            document.querySelectorAll('.text-calc')[0].innerText = `${totalKilogramsA.toFixed(1)}кг \nСтарт \n0-28 дней`;
            document.querySelectorAll('.text-calc')[1].innerText = `${totalKilogramsB.toFixed(1)}кг \nРост \n29-56 дней`;
            break;
        default:
            console.log("Не найдено соответствующее животное");
    }
}

// Функция для создания  результатов
function updateResultBlocks(animalType) {
    const resultContainer = document.getElementById('result');
    const data = animalData[animalType];
    const stages = Object.keys(data);

    Array.from(resultContainer.querySelectorAll('.slider__plus__calculate')).forEach(el => el.remove());

    // Определяем классы для родительских div'ов
    let parentDivClasses = [];
    for (let i = 1; i <= stages.length; i++) {
        if (i === 1) {
            parentDivClasses.push('itog-first'); 
        } else if (i === 2) {
            parentDivClasses.push('itog-second'); 
        } else if (i === 3) {
            parentDivClasses.push('itog-third');
        } else {
            parentDivClasses.push(`itog-${i}`);
        }
    }

    // Создаем родительские div'ы
    parentDivClasses.forEach(className => {
        const parentDiv = document.createElement('div');
        parentDiv.className = className;
        resultContainer.appendChild(parentDiv);
    });

    // Создаем новые элементы для каждой стадии
    stages.forEach((stage, index) => {
        const stageDiv = document.createElement('div');
        stageDiv.classList.add('slider__plus__calculate');
        stageDiv.style.backgroundColor = animalColors[animalType];
        stageDiv.innerHTML = `<p class="text-calc"> 0 мешков 0 кг</p>`; // Изначально пустые значения
        resultContainer.querySelector(`.${parentDivClasses[index]}`).appendChild(stageDiv);
    });
}

// Выполняем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    const initialAnimal = document.querySelector('input[name="animal"]:checked').value;
    updateResultBlocks(initialAnimal); // Создаем блоки для начального животного
    calculateFeed(); 
});