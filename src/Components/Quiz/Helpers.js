export const shuffleAnswers = (question) => {
  const unshuffleAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswes,
  ];

  return unshuffleAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};
