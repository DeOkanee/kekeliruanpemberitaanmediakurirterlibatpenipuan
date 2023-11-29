function submitQuiz() {
    // Gather user answers
    const answers = {
        Q1: document.querySelector('input[name="q1"]:checked').value,
        Q2: document.querySelector('input[name="q2"]:checked').value,
        Q3: document.querySelector('input[name="q3"]:checked').value,
        Q4: document.querySelector('input[name="q4"]:checked').value,
        Q5: document.querySelector('input[name="q5"]:checked').value,
        Q6: document.querySelector('input[name="q6"]:checked').value,
    };

    // Check answers
    const correctAnswers = {
        Q1: 'C',
        Q2: 'B',
        Q3: 'C',
        Q4: 'D',
        Q5: 'C',
        Q6: 'C',
    };

    // Explanations
    const explanations = {
        Q1: 'Dalam berita tersebut, seorang kurir yang tidak bersalah dituduh terlibat dalam penipuan.',
        Q2: 'Kurir dalam berita ini hanya melakukan tugasnya mengantar paket, bukan terlibat dalam penipuan.',
        Q3: 'Kurir terkejut karena dia dituduh terlibat dalam penipuan meskipun hanya mengantar paket.',
        Q4: 'Pemberitaan yang keliru menciptakan dampak buruk pada reputasi kurir.',
        Q5: 'Media harus memastikan bahwa informasi yang disajikan benar sebelum menyebarkannya agar tidak menimbulkan kekeliruan.',
        Q6: 'Kurir tidak mengetahui isi paket karena itu adalah bagian dari tugasnya untuk menjaga privasi dan keamanan paket yang dikirim.',
    };

    // Calculate score and prepare result HTML
    let score = 0;
    let resultHTML = '';

    for (const question in answers) {
        const isCorrect = answers[question] === correctAnswers[question];
        resultHTML += `<p>Soal ${question}: Jawaban Anda - ${answers[question]}, Jawaban Benar - ${correctAnswers[question]}</p>`;
        resultHTML += `<p>${isCorrect ? 'Benar ✅:' : 'Salah ❌, Penjelasan ➡'} ${explanations[question]}</p>`;
        resultHTML += '<hr>';
        if (isCorrect) {
            score++;
        }
    }

    // Display result
    document.getElementById('result').innerHTML = `<p>Skor Anda: ${score} / 6</p>` + resultHTML;
    document.getElementById('result-container').style.display = 'block';
}