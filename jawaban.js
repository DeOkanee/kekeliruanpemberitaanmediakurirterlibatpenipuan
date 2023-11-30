function submitQuiz() {
    // Gather user answers
    const answers = {
        Q1: document.querySelector('input[name="q1"]:checked').value,
        Q2: document.querySelector('input[name="q2"]:checked').value,
        Q3: document.querySelector('input[name="q3"]:checked').value,
        Q4: document.querySelector('input[name="q4"]:checked').value,
        Q5: document.querySelector('input[name="q5"]:checked').value,
        Q6: document.querySelector('input[name="q6"]:checked').value,
        Q7: document.querySelector('input[name="q7"]:checked').value,
        Q8: document.querySelector('input[name="q8"]:checked').value,
        Q9: document.querySelector('input[name="q9"]:checked').value,
        Q10: document.querySelector('input[name="q10"]:checked').value,
    };

    // Check answers
    const correctAnswers = {
        Q1: 'C',
        Q2: 'B',
        Q3: 'C',
        Q4: 'D',
        Q5: 'C',
        Q6: 'C',
        Q7: 'B',
        Q8: 'C',
        Q9: 'C',
        Q10: 'D',
    };

    // Explanations
    const explanations = {
        Q1: 'Dalam berita tersebut, seorang kurir yang tidak bersalah dituduh terlibat dalam penipuan.',
        Q2: 'Kurir dalam berita ini hanya melakukan tugasnya mengantar paket, bukan terlibat dalam penipuan.',
        Q3: 'Kurir terkejut karena dia dituduh terlibat dalam penipuan meskipun hanya mengantar paket.',
        Q4: 'Pemberitaan yang keliru menciptakan dampak buruk pada reputasi kurir.',
        Q5: 'Media harus memastikan bahwa informasi yang disajikan benar sebelum menyebarkannya agar tidak menimbulkan kekeliruan.',
        Q6: 'Kurir tidak mengetahui isi paket karena itu adalah bagian dari tugasnya untuk menjaga privasi dan keamanan paket yang dikirim.',
        Q7: 'Kurir dituduh keterlibatan dalam penipuan dalam berita ini.',
        Q8: 'Pemberitaan yang terlalu cepat dengan judul dramatis dapat membuat orang bingung dan menciptakan stigmatisasi yang tidak adil terhadap individu.',
        Q9: 'Wawancara dengan pihak berwenang dan perusahaan pengiriman mengungkapkan bahwa kurir tidak mengetahui isi paket yang dia antar.',
        Q10: 'Media harus berhati-hati dan memastikan informasi yang disajikan akurat agar tidak merugikan individu dan industri terkait.',
    };

    // Calculate score and prepare result HTML
    let totalScore = 0;
    let resultHTML = '';

    for (const question in answers) {
        const isCorrect = answers[question] === correctAnswers[question];
        const score = isCorrect ? 10 : 0;
        totalScore += score;
        resultHTML += `<p>Soal ${question}: Jawaban Anda - ${answers[question]}, Jawaban Benar - ${correctAnswers[question]}</p>`;
        resultHTML += `<p>${isCorrect ? 'Benar ✅:' : 'Salah ❌, Penjelasan ➡'} ${explanations[question]}</p>`;
        resultHTML += `<p>Nilai Soal: ${score}</p>`;
        resultHTML += '<hr>';
    }

    // Display result
    document.getElementById('result').innerHTML = `<p>Total Nilai: ${totalScore} dari 100</p>` + resultHTML;
    document.getElementById('result-container').style.display = 'block';
}
