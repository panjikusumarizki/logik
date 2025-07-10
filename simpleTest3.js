// Data dari soal
const questionsData = [
  {
    "_id": {
      "$oid": "66f0dc7e054ce85f570ce82b"
    },
    "fase": {
      "faseId": 3149342545,
      "categoryId": [
        "c996e56c-bc17-4854-b703-91c1dd5620a9",
        "f205f0a2-2d81-46ca-921a-b875c8e0764e"
      ],
      "detail": "Fase A (Kelas 1-2)"
    },
    "number": 1,
    "subjectName": "Matematika",
    "questionDetail": "Apa hasil dari 2 + 2?",
    "explanation": "Hasil dari 2 + 2 adalah 4.",
    "answers": [
      {
        "answerDetail": "4",
        "benar": true,
        "answerId": 3358873575,
        "questionId": 864853831
      },
      {
        "answerDetail": "3",
        "benar": false,
        "answerId": 1821790285,
        "questionId": 864853831
      }
    ],
    "questionId": 864853831,
    "mapelId": [
      133,
      134
    ]
  },
  {
    "_id": {
      "$oid": "66f23d9272d30cf81767eecf"
    },
    "fase": {
      "faseId": 3149342545,
      "categoryId": [
        "c996e56c-bc17-4854-b703-91c1dd5620a9",
        "f205f0a2-2d81-46ca-921a-b875c8e0764e"
      ],
      "detail": "Fase A (Kelas 1-2)"
    },
    "number": 1,
    "subjectName": "Matematika",
    "questionDetail": "Apa hasil dari 5 + 2?",
    "explanation": "Hasil dari 5 + 2 adalah 7.",
    "answers": [
      {
        "answerDetail": "4",
        "benar": false,
        "answerId": 3358873545,
        "questionId": 864853832
      },
      {
        "answerDetail": "7",
        "benar": true,
        "answerId": 1821790235,
        "questionId": 864853832
      }
    ],
    "questionId": 864853832,
    "mapelId": [
      133,
      134
    ]
  },
  {
    "_id": {
      "$oid": "66f12c3834e3d3553685cca6"
    },
    "fase": {
      "faseId": 3149342545,
      "categoryId": [
        "c996e56c-bc17-4854-b703-91c1dd5620a9",
        "f205f0a2-2d81-46ca-921a-b875c8e0764e"
      ],
      "detail": "Fase A (Kelas 1-2)"
    },
    "number": 1,
    "subjectName": "Bahasa Indonesia",
    "questionDetail": "Huruf Vokal?",
    "explanation": "Huruf Vokal adalah A,I,U,E,O.",
    "answers": [
      {
        "answerDetail": "A,B,C,D,E",
        "benar": false,
        "answerId": 3358873547,
        "questionId": 864853833
      },
      {
        "answerDetail": "A,I,U,E,O",
        "benar": true,
        "answerId": 1821790232,
        "questionId": 864853833
      }
    ],
    "questionId": 864853833,
    "mapelId": [
      130,
      131
    ]
  },
];

// Data dari user
const userInput = {
  "faseId": 3149342545,
  "answer": [
      {"userId": "askfjniunr93ojnfl", "questionId": 864853831, "answerId": 1821790285},
      {"userId": "askfjniunr93ojnfl", "questionId": 864853832, "answerId": 1821790235},
      {"userId": "askfjniunr93ojnfl", "questionId": 864853833, "answerId": 1821790232}
  ],
  "userId": ""
};

// FaseId dari input user
const faseId = userInput.faseId;

// Menyimpan hasil skor dan pembahasan per soal, serta total skor per mapel
const scoresPerMapel = {};
const pembahasanPerSoal = {};
const skorPerSoal = {};

// Loop melalui jawaban user
userInput.answer.forEach(userAnswer => {
  const questionId = userAnswer.questionId;
  const answerId = userAnswer.answerId;

  // Cari soal yang sesuai
  questionsData.forEach(question => {
      if (question.questionId === questionId && question.fase.faseId === faseId) {
          // Ambil nama mapel
          const mapel = question.subjectName;
          
          // Inisialisasi skor dan total soal per mapel jika belum ada
          if (!scoresPerMapel[mapel]) {
              scoresPerMapel[mapel] = { correct: 0, total: 0 };
          }

          // Tambahkan ke total soal untuk mapel ini
          scoresPerMapel[mapel].total += 1;

          // Cek apakah jawaban user benar
          let isCorrect = false;
          question.answers.forEach(answer => {
              if (answer.answerId === answerId && answer.benar) {
                  isCorrect = true;
              }
          });

          // Tambahkan ke skor jika jawaban benar
          if (isCorrect) {
              scoresPerMapel[mapel].correct += 1;
          }

          // Simpan pembahasan per soal dan skor per soal
          pembahasanPerSoal[questionId] = {
              questionDetail: question.questionDetail,
              explanation: question.explanation,
              userAnswerCorrect: isCorrect,
              score: isCorrect ? 1 : 0
          };

          // Simpan skor per soal (1 jika benar, 0 jika salah)
          // skorPerSoal[questionId] = isCorrect ? 1 : 0;
      }
  });
});

const recommendations = {};

// Menghitung total skor per mapel (dalam persen)
Object.keys(scoresPerMapel).forEach(mapel => {
  const correct = scoresPerMapel[mapel].correct;
  const total = scoresPerMapel[mapel].total;
  const score = (correct / total) * 100;
  scoresPerMapel[mapel].score = score;

  // Menambahkan rekomendasi berdasarkan skor
  if (score === 100) {
    recommendations[mapel] = "Selamat! Skor Anda sempurna. Rekomendasi khusus: Lanjutkan ke tingkat berikutnya!";
  } else if (score > 50) {
    recommendations[mapel] = "Skor Anda sudah cukup baik, teruskan belajar!";
  } else {
    recommendations[mapel] = "Skor Anda masih di bawah 50%. Disarankan untuk mempelajari materi lebih lanjut.";
  }
});

// Tampilkan hasil skor per soal, pembahasan per soal, dan total skor per mapel
const result = {
  pembahasanPerSoal,
  scoresPerMapel,
  recommendations
};

console.log(result);
