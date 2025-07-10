const questions = [
  {
    "_id": {
      "$oid": "66f0dc7e054ce85f570ce82b"
    },
    "faseId": {
      "$numberLong": "3149342545"
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
    "questionId": 864853831
  },
  {
    "_id": {
      "$oid": "66f10bac34e3d3553685cca5"
    },
    "faseId": {
      "$numberLong": "3149342545"
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
    "questionId": 864853832
  },
  {
    "_id": {
      "$oid": "66f10bac34e3d3553685cca5"
    },
    "faseId": {
      "$numberLong": "3149342545"
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
    "questionId": 864853833
  }
];
const userAnswers = {
  answer: [
    {
      userId: 'askfjniunr93ojnfl',
      questionId: 864853831,
      answerId: 1821790285
    },
    {
      userId: 'askfjniunr93ojnfl',
      questionId: 864853832,
      answerId: 1821790235
    },
    {
      userId: 'askfjniunr93ojnfl',
      questionId: 864853833,
      answerId: 1821790232
    }
  ]
};

// Fungsi untuk menghitung persentase jawaban benar per mata pelajaran
const calculateScoreBySubject = (questions, userAnswers) => {
  const results = {};

  userAnswers.answer.forEach(userAnswer => {
    // Cari soal berdasarkan questionId
    const question = questions.find(q => q.questionId === userAnswer.questionId);

    if (question) {
      // Inisialisasi mata pelajaran jika belum ada
      if (!results[question.subjectName]) {
        results[question.subjectName] = {
          correct: 0,
          total: 0
        };
      }

      // Cari jawaban yang sesuai dengan answerId user
      const answer = question.answers.find(a => a.answerId === userAnswer.answerId);

      if (answer) {
        // Hitung total soal per mata pelajaran
        results[question.subjectName].total++;

        // Hitung jawaban benar
        if (answer.benar) {
          results[question.subjectName].correct++;
        }
      }
    }
  });

  // Hitung persentase
  for (const subject in results) {
    const { correct, total } = results[subject];
    const percentage = (correct / total) * 100;
    results[subject].percentage = percentage; // Format dengan dua desimal

    // Berikan rekomendasi berdasarkan persentase
    if (percentage === 100) {
      results[subject].recommendation = "Rekomendasi khusus: Kamu sudah benar semua!";
    } else if (percentage > 50) {
      results[subject].recommendation = "Tidak ada rekomendasi.";
    } else {
      results[subject].recommendation = "Rekomendasi: Pelajari lagi materi ini.";
    }
  }

  return results;
};

// Memanggil fungsi dan cetak hasil
const scoreBySubject = calculateScoreBySubject(questions, userAnswers);
console.log(scoreBySubject);

// payload.forEach(answers => {
    //   const findQuestion = question.data.find(q => q.questionId === answers.questionId);
    //   if (findQuestion) {
    //     if (!result[findQuestion.subjectName]) {
    //       result[findQuestion.subjectName] = {
    //         correct: 0,
    //         questionTotal: 0
    //       };
    //     }

    //     result[findQuestion.subjectName].mapel = findQuestion.subjectName
    //     result[findQuestion.subjectName].mapelId = findQuestion.mapelId
    //     result[findQuestion.subjectName].faseId = findQuestion.fase.faseId

    //     const resultAnswer = findQuestion.answers.find(a => a.answerId === answers.answerId);
    //     if (resultAnswer) {
    //       result[findQuestion.subjectName].questionTotal++;

    //       if (resultAnswer.benar) {
    //         result[findQuestion.subjectName].correct++;
    //       }
    //     }
    //   }
    // });