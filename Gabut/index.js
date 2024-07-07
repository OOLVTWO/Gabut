document.addEventListener("DOMContentLoaded", function() {
    const benarButton = document.getElementById('benar');
    const salahButton = document.getElementById('salah');

    benarButton.addEventListener('click', function() {
        alert('Selamat Anda Benar!');
    });

    salahButton.addEventListener('click', function() {
        alert('Seharusnya Anda Memilih Jawaban Benar!');
    });
});
