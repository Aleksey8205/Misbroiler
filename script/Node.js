const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const ACTUAL_INFO_FILE_PATH = path.join(__dirname, 'actual-info.json');

// Загрузка существующих данных из файла или создание пустого массива
let infoBlocks = [];
try {
    const fileData = await fs.readFile(ACTUAL_INFO_FILE_PATH, 'utf8');
    infoBlocks = JSON.parse(fileData);
} catch (error) {
    console.error(
        'Файл не существует или произошла ошибка чтения:',
        error
    );
}

// Маршрут для получения актуальных блоков информации
app.get('/get-actual-info', async (req, res) => {
    try {
        res.json(infoBlocks);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Маршрут для обновления блоков информации
app.post('/update-actual-info', async (req, res) => {
    try {
        const newBlock = req.body.newBlock;

        // Замещение блоков: новый блок становится первым, остальные сдвигаются вниз
        infoBlocks.unshift(newBlock);
        infoBlocks.pop(); // Удаляем последний блок

        // Сохраняем обновленный массив блоков в файл
        await fs.writeFile(ACTUAL_INFO_FILE_PATH, JSON.stringify(infoBlocks, null, 2));

        res.sendStatus(200); // Отправляем ответ об успехе
    } catch (error) {
        console.error('Ошибка при сохранении данных:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});