const animalImages = {
    'animal1': 'image/broiler-calculator.png',
    'animal2': 'image/rabbit-calculator.jpg',
    'animal3': 'image/pig.webp',
    'animal4': 'image/cow.webp',
    'animal5': 'image/chicken.webp',
    'animal6': 'image/peperel.webp',
    'animal7': 'image/gobbler.webp',
    'animal8': 'image/duck.jpg'
};

// Цвета для каждого животного
const animalColors = {
    'animal1': 'rgb(153, 225, 239)', // Красный
    'animal2': '#00ff00', // Зеленый
    'animal3': '#0000ff', // Синий
    'animal4': '#ffff00', // Желтый
    'animal5': '#ffa500', // Оранжевый
    'animal6': '#800080', // Пурпурный
    'animal7': '#008080', // Бирюзовый
    'animal8': '#808080'  // Серый
};

// Данные о животных (в граммах)
const animalData = {
    'animal1': {
        A: { amount: 570 },
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
        A: { amount: 6200},
        B: { amount: 1800},
        C: { amount: 3000}
    },
    'animal5': {
        A: { amount: 8200, feedName: 'Корм А5' },
        B: { amount: 8000, feedName: 'Корм В5' },
        C: { amount: 2900, feedName: 'Корм С5' }
    },
    'animal6': {
        A: { amount: 6020, feedName: 'Корм А6' },
        B: { amount: 1800, feedName: 'Корм В6' },
        C: { amount: 3000, feedName: 'Корм С6' }
    },
    'animal7': {
        A: { amount: 5700, feedName: 'Корм А7' },
        B: { amount: 1700, feedName: 'Корм В7' },
        C: { amount: 2900, feedName: 'Корм С7' }
    },
    'animal8': {
        A: { amount: 6020, feedName: 'Корм А8' },
        B: { amount: 1800, feedName: 'Корм В8' },
        C: { amount: 3000, feedName: 'Корм С8' },
        C: { amount: 3000, feedName: 'Корм С9' }
    }
};

// Массив с текстовыми описаниями кормов для каждого животного
const feedDescriptions = {
    'animal1': ['Описание корма А1', 'Описание корма В1', 'Описание корма С1'],
    'animal2': ['Описание корма А2', 'Описание корма В2'],
    'animal3': ['Описание корма А3'],
    'animal4': ['Описание корма А4', 'Описание корма В4', 'Описание корма С4'],
    'animal5': ['Описание корма А5', 'Описание корма В5', 'Описание корма С5'],
    'animal6': ['Описание корма А6', 'Описание корма В6', 'Описание корма С6'],
    'animal7': ['Описание корма А7', 'Описание корма В7', 'Описание корма С7'],
    'animal8': ['Описание корма А8', 'Описание корма В8', 'Описание корма С8']
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