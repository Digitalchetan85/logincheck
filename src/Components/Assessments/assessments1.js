import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import * as Yup from "yup";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";
import ReactRadar from "./ReactRadar";

const Assessments1 = () => {
  const questions = [
    {
      id: 1,
      question:
        "Roles & responsibilities and their relevant boundaries of each of the team members is clearly defined and understood by the team",
      theme: "Roles",
      category: "Cross Functional Team",
    },

    {
      id: 2,
      question:
        "An Agile Master has been identified within the team and on-boarded for transformation",
      theme: "Roles",
      category: "Product Management",
    },

    {
      id: 3,
      question:
        "The leadership understands their style, strengths and areas of improvement",
      theme: "Leadership",
      category: "Leadership Development",
    },

    {
      id: 4,
      question:
        "The leadership understands their style, strengths and areas of improvement",
      theme: "Leadership",
      category: "Leadership Development",
    },

    {
      id: 5,
      question:
        "Team members are  open to criticism and accept negative feedback looking at it as a means to improve their skills & personality to be more effective",
      theme: "Team Culture",
      category: "Ownership",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, SetshowScore] = useState(false);
  const [Score, setScore] = useState(0);

  const [Roles, setRoles] = useState([]);
  const [RolesCFT, setRolesCFT] = useState([]);
  const [RolesPM, setRolesPM] = useState([]);
  const [RolesCol, setRolesCol] = useState([]);

  const [Leadership, setLeadership] = useState([]);
  const [LeadershipLD, setLeadershipLD] = useState([]);
  const [LeadershipT, setLeadershipT] = useState([]);
  const [LeadershipA, setLeadershipA] = useState([]);
  const [LeadershipO, setLeadershipO] = useState([]);

  const [Practices, setPractices] = useState([]);
  const [PracticesP, setPracticesP] = useState([]);
  const [PracticesA, setPracticesA] = useState([]);
  const [PracticesPM, setPracticesPM] = useState([]);
  const [PracticesG, setPracticesG] = useState([]);
  const [PracticesCol, setPracticesCol] = useState([]);
  const [PracticesT, setPracticesT] = useState([]);

  const [TeamCulture, setTeamculture] = useState([]);
  const [TeamCultureT, setTeamcultureT] = useState([]);
  const [TeamCultureO, setTeamcultureO] = useState([]);
  const [TeamCultureA, setTeamcultureA] = useState([]);
  const [TeamCultureCol, setTeamcultureCol] = useState([]);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(Score + 1);
    }
  };

  const initialValues = {
    applicable: "",
    applied: "",
    teamScore: "",
  };

  const onSubmit = (values, { resetForm }) => {
    const data = values;
    // console.log(data);
    // setformStatus// console.log(typeof(Number(data.teamScore)));
    resetForm({ values: "" });

    // // console.log(questions[currentQuestion].id);

    // const avgScore = "";
    for (var i = 0; i < questions.length; i++) {
      if (questions[currentQuestion].id === i) {
        if (questions[currentQuestion].theme === "Roles") {
          // setRoles((prevRoles) => prevRoles + Number(data.teamScore));
          setRoles([...Roles, Number(data.teamScore)]);
          if (questions[currentQuestion].category === "Cross Functional Team") {
            // setRolesCFT(
            // (prevRolesCFT) => prevRolesCFT + Number(data.teamScore)
            setRolesCFT([...RolesCFT, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].category === "Product Management"
          ) {
            // setRolesPM((prevRolesPM) => prevRolesPM + Number(data.teamScore));
            setRolesPM([...RolesPM, Number(data.teamScore)]);
          } else {
            // setRolesCol(
            // (prevRolesCol) => prevRolesCol + Number(data.teamScore)
            setRolesCol([...RolesCol, Number(data.teamScore)]);
            // );
          }
        } else if (questions[currentQuestion].theme === "Leadership") {
          // setLeadership(
          // (prevLeadership) => prevLeadership + Number(data.teamScore)
          setLeadership([...Leadership, Number(data.teamScore)]);
          // );
          if (
            questions[currentQuestion].category === "Leadership Development"
          ) {
            // setLeadershipLD(
            // (prevLeadershipLD) => prevLeadershipLD + Number(data.teamScore)
            setLeadershipLD([...LeadershipLD, Number(data.teamScore)]);
            // );
          } else if (questions[currentQuestion].category === "Transparency") {
            // setLeadershipT(
            // (prevLeadershipT) => prevLeadershipT + Number(data.teamScore)
            setLeadershipT([...LeadershipT, Number(data.teamScore)]);
            // );
          } else if (questions[currentQuestion].category === "Autonomy") {
            // setLeadershipA(
            // (prevLeadershipA) => prevLeadershipA + Number(data.teamScore)
            setLeadershipA([...LeadershipA, Number(data.teamScore)]);
            // );
          } else {
            // setLeadershipO(
            // (prevLeadershipO) => prevLeadershipO + Number(data.teamScore)
            setLeadershipO([...LeadershipO, Number(data.teamScore)]);
            // );
          }
        } else if (questions[currentQuestion].theme === "Practices") {
          // setPractices(
          // (prevPractices) => prevPractices + Number(data.teamScore)
          setPractices([...Practices, Number(data.teamScore)]);
          // );
          if (questions[currentQuestion].category === "Practices") {
            // setPracticesP(
            // (prevPracticesP) => prevPracticesP + Number(data.teamScore)
            setPracticesP([...PracticesP, Number(data.teamScore)]);
            // );
          } else if (questions[currentQuestion].category === "Transparency") {
            // setPracticesT(
            // (prevPracticesT) => prevPracticesT + Number(data.teamScore)
            setPracticesT([...PracticesT, Number(data.teamScore)]);
            // );
          } else if (questions[currentQuestion].category === "Autonomy") {
            // setPracticesA(
            // (prevPracticesA) => prevPracticesA + Number(data.teamScore)
            setPracticesA([...PracticesA, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].category === "Product Management"
          ) {
            // setPracticesPM(
            // (prevPracticesPM) => prevPracticesPM + Number(data.teamScore)
            setPracticesPM([...PracticesPM, Number(data.teamScore)]);
            // );
          } else if (questions[currentQuestion].category === "Governance") {
            // setPracticesG(
            // (prevPracticesG) => prevPracticesG + Number(data.teamScore)
            setPracticesG([...PracticesG, Number(data.teamScore)]);
            // );
          } else {
            // setPracticesCol(
            // (prevPracticesCol) => prevPracticesCol + Number(data.teamScore)
            setPracticesCol([...PracticesCol, Number(data.teamScore)]);
            // );
          }
        } else if (questions[currentQuestion].theme === "Team Culture") {
          // setTeamculture(
          // (prevTeamculture) => prevTeamculture + Number(data.teamScore)
          setTeamculture([...TeamCulture, Number(data.teamScore)]);
          // );
          if (questions[currentQuestion].category === "Transparency") {
            // setTeamcultureT(
            // (prevTeamcultureT) => prevTeamcultureT + Number(data.teamScore)
            setTeamcultureT([...TeamCultureT, Number(data.teamScore)]);
            // );
          } else if (questions[currentQuestion].category === "Ownership") {
            // setTeamcultureO(
            // (prevTeamcultureO) => prevTeamcultureO + Number(data.teamScore)
            setTeamcultureO([...TeamCultureO, Number(data.teamScore)]);
            // );
          } else if (questions[currentQuestion].category === "Collaboration") {
            // setTeamcultureCol(
            //   (prevTeamcultureCol) =>
            // prevTeamcultureCol + Number(data.teamScore)
            setTeamcultureCol([...TeamCultureCol, Number(data.teamScore)]);
            // );
          } else {
            // setTeamcultureA(
            // (prevTeamcultureA) => prevTeamcultureA + Number(data.teamScore)
            setTeamcultureA([...TeamCultureA, Number(data.teamScore)]);
            // );
          }
        }
        // // console.log("hello first");
      }
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      SetshowScore(true);
      setRoles(Roles.reduce((p, c) => p + c, 0) / Roles.length);
      setRolesCFT(RolesCFT.reduce((p, c) => p + c, 0) / RolesCFT.length);
      setRolesPM(RolesPM.reduce((p, c) => p + c, 0) / RolesPM.length);
      setRolesCol(RolesCol.reduce((p, c) => p + c, 0) / RolesCol.length);
      setLeadership(Leadership.reduce((p, c) => p + c, 0) / Leadership.length);
      setLeadershipLD(
        LeadershipLD.reduce((p, c) => p + c, 0) / LeadershipLD.length
      );
      setLeadershipT(
        LeadershipT.reduce((p, c) => p + c, 0) / LeadershipT.length
      );
      setLeadershipO(
        LeadershipO.reduce((p, c) => p + c, 0) / LeadershipO.length
      );
      setPractices(Practices.reduce((p, c) => p + c, 0) / Practices.length);
      setPracticesP(PracticesP.reduce((p, c) => p + c, 0) / PracticesP.length);
      setPracticesT(PracticesT.reduce((p, c) => p + c, 0) / PracticesT.length);
      setPracticesA(PracticesA.reduce((p, c) => p + c, 0) / PracticesA.length);
      setPracticesPM(
        PracticesPM.reduce((p, c) => p + c, 0) / PracticesPM.length
      );
      setPracticesG(PracticesG.reduce((p, c) => p + c, 0) / PracticesG.length);
      setPracticesCol(
        PracticesCol.reduce((p, c) => p + c, 0) / PracticesCol.length
      );
      setTeamculture(
        TeamCulture.reduce((p, c) => p + c, 0) / TeamCulture.length
      );
      setTeamcultureT(
        TeamCultureT.reduce((p, c) => p + c, 0) / TeamCultureT.length
      );
      setTeamcultureO(
        TeamCultureO.reduce((p, c) => p + c, 0) / TeamCultureO.length
      );
      setTeamcultureA(
        TeamCultureA.reduce((p, c) => p + c, 0) / TeamCultureA.length
      );
      setTeamcultureCol(
        TeamCultureCol.reduce((p, c) => p + c, 0) / TeamCultureCol.length
      );
    }
  };

  const validationSchema = Yup.object({
    applicable: Yup.string().required("Required"),
    applied: Yup.string().required("Required"),
    teamScore: Yup.string().required("Required"),
  });

  const graphData = [
    { name: "Cross Functional Team", x: RolesCFT },
    { name: "Product Management", x: RolesPM },
    { name: "Leadership Development", x: LeadershipLD },
    { name: "Ownership", x: TeamCultureO },
    { name: "Practices", x: PracticesP },
  ];

  const graphDataTheme = [
    { name: "Roles", x: Roles },
    { name: "Practices", x: Practices },
    { name: "Team Culture", x: TeamCulture },
    { name: "Leadership", x: Leadership },
  ];

  return (
    <div>
      <TopMenubar />
      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary">
        <h2 className="text-center text-white">Assessments</h2>
      </div>
      <div>
        {showScore ? (
          <Container>
            <Row className="justify-content-center mt-5 mb-5">
              <Col md={8}>
                <div className="score-section p-5 bg-light shadow text-center text-primary fw-bold">
                  {Roles} {RolesCFT}you scored {Score} out of {questions.length}{" "}
                  
                </div>

                {/* <RadarGraph /> */}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={4}>
                <ReactRadar data={graphDataTheme} />
              </Col>
              <Col md={4}>
                <ReactRadar data={graphData} />
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="question-section text-center bg-primary text-white p-5 m-5">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{" "}
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].question}
                  </div>
                  <div className="answer-section pt-3">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      //onSubmit={(values,{ resetForm}) => { // console.log(values); // console.log(resetForm); // console.log(questions[currentQuestion])}}
                      onSubmit={onSubmit}
                    >
                      <Form>
                        <Row className="mb-3">
                          <Col md={4}>
                            <Field
                              as="select"
                              className="form-control"
                              id="applicable"
                              name="applicable"
                            >
                              <option value="Applicable">Applicabale</option>
                              <option value="YES">YES</option>
                              <option value="NO">NO</option>
                            </Field>
                            <small className="text-danger">
                              <ErrorMessage name="applicable" />
                            </small>
                          </Col>
                          <Col md={4}>
                            <Field
                              as="select"
                              className="form-control"
                              id="applied"
                              name="applied"
                            >
                              <option value="Applied">Applied</option>
                              <option value="YES">YES</option>
                              <option value="NO">NO</option>
                            </Field>
                            <small className="text-danger">
                              <ErrorMessage name="applied" />
                            </small>
                          </Col>
                          <Col md={4}>
                            <Field
                              as="select"
                              className="form-control"
                              id="teamScore"
                              name="teamScore"
                            >
                              <option value="TeamScore">Team Score</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </Field>
                            <small className="text-danger">
                              <ErrorMessage name="teamScore" />
                            </small>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md={12}>
                            <div className="">
                              <Button
                                className="btn btn-secondary"
                                type="submit"
                              >
                                Next
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Assessments1;
