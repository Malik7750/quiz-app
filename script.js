// Data Pertanyaan dan Skor
const questionsData = [
    { text: "A. Kesedihan", options: ["Saya sangat sedih/tidak bahagia dimana saya tak dapat menghadapinya", "Saya galau/sedih sepanjang waktu dan saya tidak dapat keluar darinya", "Saya merasa sedih atau galau", "Saya tidak merasa sedih"] },
    { text: "B. Pesimisme", options: ["Saya merasa bahwa masa depan adalah sia-sia dan sesuatu tidak dapat membaik", "Saya merasa tidak mempunyai apa-apa untuk memandang ke depan", "Saya merasa berkecil hati mengenai masa depan", "Saya tidak begitu pesimis atau kecil hati tentang masa depan"] },
    { text: "C. Rasa kegagalan", options: ["Saya benar-benar gagal sebagai orang tua (suami/istri)", "Bila melihat kehidupan ke belakang semua yang dapat saya lihat hanya kegagalan", "Saya merasa telah gagal melebihi orang pada umumnya", "Saya tidak merasa gagal"] },
    { text: "D. Ketidakpuasan", options: ["Saya tidak puas dengan segalanya", "Saya tidak lagi mendapatkan kepuasan dari apapun", "Saya tidak menyukai cara yang saya gunakan", "Saya tidak merasa tidak puas"] },
    { text: "E. Rasa bersalah", options: ["Saya merasa seolah-olah sangat buruk atau tidak berharga", "Saya merasa sangat bersalah", "Saya merasa buruk/tak berharga sebagai bagian dari waktu yang baik", "Saya tidak merasa benar-benar bersalah"] },
    { text: "F. Tidak menyukai diri sendiri", options: ["Saya benci diri saya sendiri", "Saya muak dengan diri saya sendiri", "Saya tidak suka dengan diri saya sendiri", "Saya tidak merasa kecewa dengan diri sendiri"] },
    { text: "G. Membahayakan diri sendiri", options: ["Saya akan membunuh diri saya sendiri jika saya mempunyai kesempatan", "Saya mempunyai rencana pasti tentang tujuan bunuh diri", "Saya merasa lebih baik mati", "Saya tidak mempunyai pikiran-pikiran mengenai membahayakan diri sendiri"] },
    { text: "H. Isolasi sosial", options: ["Saya telah kehilangan semua minat saya pada orang lain dan tidak perduli pada mereka", "Saya telah kehilangan semua minat saya pada orang lain dan mempunyai sedikit perasaan pada mereka", "Saya kurang berminat pada orang lain dari pada sebelumnya", "Saya tidak kehilangan minat pada orang lain"] },
    { text: "I. Keragu-raguan", options: ["Saya tidak dapat membuat keputusan sama sekali", "Saya mempunyai banyak kesulitan dalam membuat keputusan", "Saya berusaha mengambil keputusan", "Saya membuat keputusan yang baik"] },
    { text: "J. Perubahan gambaran diri", options: ["Saya merasa bahwa saya jelek atau tampak menjijikan", "Saya merasa bahwa ada perubahan permanent dalam penampilan saya dan ini membuat saya tidak tertarik", "Saya kuatir bahwa saya tampak tua atau tidak menarik", "Saya merasa bahwa saya tampak lebih buruk dari pada sebelumnya"] },
    { text: "K. Kesulitan kerja", options: ["Saya tidak melakukan pekerjaan sama sekali", "Saya telah mendorong diri saya sendiri dengan keras untuk melakukan sesuatu", "Saya memerlukan upaya tambahan untuk memulai melakukan sesuatu", "Saya dapat bekerja kira-kira sebaik sebelumnya"] },
    { text: "L. Keletihan", options: ["Saya sangat lelah untuk melakukan sesuatu", "Saya merasa lelah untuk melakukan sesuatu", "Saya merasa lelah dari yang biasanya", "Saya tidak merasa lebih lelah dari biasanya"] },
    { text: "M. Anoreksia", options: ["Saya tidak mempunyai napsu makan sama sekali", "Napsu makan saya sangat memburuk sekarang", "Napsu makan saya tidak sebaik sebelumnya", "Napsu makan saya tidak buruk dari yang biasanya"] },
    { text: "N. Berduka", options: ["Biasanya saya mampu menangis namun kini saya tidak lagi dapat menangis walaupun saya menginginkannya", "Sekarang saya menangis sepanjang waktu", "Sekarang saya lebih banyak menangis daripada sebelumnya", "Saya tidak lebih banyak menangis dibandingkan biasanya"] },
    { text: "O. Harga Diri Rendah Situasional", options: ["Saya sama sekali tidak dapat mengambil keputusan", "Saya mengalami kesulitan lebih besar dalam mengambil keputusan", "Saya menunda mengambil keputusan", "Saya dapat mengambil keputusan"] },
];

// Fungsi untuk mengisi pertanyaan ke formulir
function fillQuestions() {
    const questionsContainer = document.getElementById("questionsContainer");

    questionsData.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        questionDiv.innerHTML = `
            <p>${question.text}</p>
            <label>
                <input type="radio" name="question${index}" value="3"> ${question.options[3]}
            </label>
            <label>
                <input type="radio" name="question${index}" value="2"> ${question.options[2]}
            </label>
            <label>
                <input type="radio" name="question${index}" value="1"> ${question.options[1]}
            </label>
            <label>
                <input type="radio" name="question${index}" value="0"> ${question.options[0]}
            </label>
        `;

        questionsContainer.appendChild(questionDiv);
    });
}

// Fungsi untuk menghitung tingkat depresi
function calculateDepression() {
    let totalScore = 0;

    questionsData.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            totalScore += parseInt(selectedOption.value);
        }
    });

    let interpretation = "";

    if (totalScore >= 0 && totalScore <= 4) {
        interpretation = "Depresi tidak ada atau minimal.";
    } else if (totalScore >= 5 && totalScore <= 7) {
        interpretation = "Depresi ringan.";
    } else if (totalScore >= 8 && totalScore <= 15) {
        interpretation = "Depresi sedang.";
    } else if (totalScore >= 16) {
        interpretation = "Depresi berat.";
    }

    document.getElementById("interpretation").textContent = interpretation;
    document.getElementById("resultContainer").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
    // Panggil fungsi untuk mengisi pertanyaan saat halaman dimuat
    fillQuestions();
});

