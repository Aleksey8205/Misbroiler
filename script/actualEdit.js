document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newBlockDate = document.getElementById('newBlockDate').value;
    const newBlockText = document.getElementById('newBlockText').value;

    const newBlock = {
        date: newBlockDate,
        text: newBlockText
    };

    fetch('/update-actual-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newBlock })
    }).then(response => {
        if (response.ok) {
            location.reload(); // Перезагружаем страницу после успешного обновления
        } else {
            alert('Произошла ошибка при сохранении изменений.');
        }
    }).catch(error => {
        console.error('Ошибка при отправке данных:', error);
    });
});

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/get-actual-info');
        const data = await response.json();

        // Предполагаем, что текущий первый блок является тем, который мы хотим редактировать
        const currentFirstBlock = data[0]; // Первый блок

        document.getElementById('newBlockDate').value = currentFirstBlock.date;
        document.getElementById('newBlockText').value = currentFirstBlock.text;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
});