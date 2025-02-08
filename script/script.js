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

// Цвета для каждого животного
const animalColors = {
    'animal1': 'rgb(153, 225, 239)', 
    'animal2': 'rgb(127, 90, 154)', 
    'animal3': 'rgb(244, 167, 89)',
    'animal4': 'rgb(101, 164, 126)', 
    'animal5': 'rgb(106, 205, 228)', 
    'animal6': 'rgb(255, 218, 90)', 
    'animal7': 'rgb(249, 193, 198)', 
    'animal8': 'rgb(240, 104, 141)'  
};

// Данные о животных (в граммах)
const animalData = {
    'animal1': {
        A: { amount: 570,},
        B: { amount: 1700},
        C: { amount: 2900}
    },
    'animal2': {
        A: { amount: 6000},
        B: { amount: 1800}
    },
    'animal3': {
        A: { amount: 5700 }
    },
    'animal4': {
        A: { amount: 0},
    },
    'animal5': {
        A: { amount: 8200},
        B: { amount: 8000},
        C: { amount: 2900}
    },
    'animal6': {
        A: { amount: 6020},
        B: { amount: 1800},
        C: { amount: 3000}
    },
    'animal7': {
        A: { amount: 5700},
        B: { amount: 1700},
        C: { amount: 2900}
    },
    'animal8': {
        A: { amount: 6020},
        B: { amount: 1800},
        C: { amount: 3000},
    }
};


// Функция для смены изображения при выборе животного
function selectAnimal(animalType) {
    const imgElement = document.querySelector('.image-calculator');
    imgElement.src = animalImages[animalType];
    updateResultBlocks(animalType);
    calculateFeed(); // Вызываем расчет при смене животного
}

document.getElementById('heads').addEventListener('input', function () {
    calculateFeed();
});

// Добавляем обработчик для радио-кнопок
document.querySelectorAll('input[name="animal"]').forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        selectAnimal(this.value);
    });
});

// Функция для расчета количества кормов
function calculateFeed() {
    const headsInput = document.getElementById('heads');
    const animalType = document.querySelector('input[name="animal"]:checked').value;
    const data = animalData[animalType];

    let totalKilogramsA = 0, totalKilogramsB = 0, totalKilogramsC = 0;
    let feedNameA = '', feedNameB = '', feedNameC = '';

    if ('A' in data) {
        totalKilogramsA = headsInput.value * data.A.amount / 1000;
        feedNameA = data.A.feedName;
    }
    if ('B' in data) {
        totalKilogramsB = headsInput.value * data.B.amount / 1000;
        feedNameB = data.B.feedName;
    }
    if ('C' in data) {
        totalKilogramsC = headsInput.value * data.C.amount / 1000;
        feedNameC = data.C.feedName;
    }

    const totalKilogramsTotal = totalKilogramsA + totalKilogramsB + totalKilogramsC;

    const bagsOfFeedA = Math.ceil(totalKilogramsA / 25);
    const bagsOfFeedB = Math.ceil(totalKilogramsB / 25);
    const bagsOfFeedC = Math.ceil(totalKilogramsC / 25);

    const bagsOfFeedTotal = Math.ceil(totalKilogramsTotal / 25);

    updateResults(
        bagsOfFeedA, totalKilogramsA, feedNameA,
        bagsOfFeedB, totalKilogramsB, feedNameB,
        bagsOfFeedC, totalKilogramsC, feedNameC,
        bagsOfFeedTotal, totalKilogramsTotal
    );
}

// Функция для обновления результатов
function updateResults(bagsOfFeedA, totalKilogramsA, feedNameA, bagsOfFeedB, totalKilogramsB, feedNameB, bagsOfFeedC, totalKilogramsC, feedNameC, bagsOfFeedTotal, totalKilogramsTotal) {
    document.getElementById('itog').innerHTML = `
        <div class="itog-all">Итого: ${totalKilogramsTotal.toFixed(2)} кг (количество мешков: ${bagsOfFeedTotal})</div>
    `;

    document.querySelectorAll('.text-calc')[0].innerText = `Старт ${bagsOfFeedA} мешков ${totalKilogramsA.toFixed(2)}кг`;
    document.querySelectorAll('.text-calc')[1].innerText = `Рост ${bagsOfFeedB} мешков ${totalKilogramsB.toFixed(2)}кг`;
    document.querySelectorAll('.text-calc')[2].innerText = `Финиш ${bagsOfFeedC} мешков ${totalKilogramsC.toFixed(2)}кг`;
}

// Функция для создания блоков с результатами
function updateResultBlocks(animalType) {
    const resultContainer = document.getElementById('result');
    const data = animalData[animalType];
    const stages = Object.keys(data);

    // Удаляем все существующие элементы .slider__plus__calculate
    Array.from(resultContainer.querySelectorAll('.slider__plus__calculate')).forEach(el => el.remove());

    // Создаём новые элементы в зависимости от количества стадий
    stages.forEach((stage, index) => {
        const stageDiv = document.createElement('div');
        stageDiv.classList.add('slider__plus__calculate');
        stageDiv.style.backgroundColor = animalColors[animalType];
        stageDiv.innerHTML = `<p class="text-calc">${[animalType][index]}</p>`;
        resultContainer.appendChild(stageDiv);
    });
}
