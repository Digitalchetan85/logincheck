import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { QuizContext } from "../../Contexts/Context";
import Answer from "../Quiz/Answer";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div>
      <div className="alert alert-info text-center">
        {currentQuestion.question}
      </div>
      <div className="">
        <Container>
          <Row>
            {quizState.answers.map((answer, index) => (
              <Col md={6} key={index}>
                <div className="m-1 p-2">
                  <Answer
                    answerText={answer}
                    index={index}
                    key={index}
                    currentAnswer={quizState.correntAnswer}
                    correctAnswer={currentQuestion.correctAnswer}
                    onSelectAnswer={(answerText) =>
                      dispatch({ type: "SELECT_ANSWER", payload: answerText })
                    }
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Question;
