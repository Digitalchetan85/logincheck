import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import Helmet from "react-helmet";
import * as Yup from "yup";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";
import ReactRadar from "./ReactRadar";

const AgileTeamAssessment = () => {
  const questions11 = [
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

  const questions1 = [
    {
      id: 1,
      question:
        "Roles & responsibilities and their relevant boundaries of each of the team members is clearly defined and understood by the team",
      Themes: "Roles",
      Category: "Cross Functional Team",
    },
    {
      id: 2,
      question:
        "A business sponsor has been identified & engaged for the transformation",
      Themes: "Roles",
      Category: "Product Management",
    },
    {
      id: 3,
      question:
        "A Product Manager is identified and engaged for the transformation",
      Themes: "Roles",
      Category: "Product Management",
    },
    {
      id: 4,
      question:
        "A Product Owner is identified and engaged for the transformation",
      Themes: "Roles",
      Category: "Product Management",
    },
    {
      id: 5,
      question:
        "Operations team responsible has been identified and engaged in the transformation",
      Themes: "Roles",
      Category: "Collaboration",
    },
    {
      id: 6,
      question:
        "An Agile Master has been identified within the team and on-boarded for transformation",
      Themes: "Roles",
      Category: "Cross Functional Team",
    },
    {
      id: 7,
      question:
        "Testers along with Dev and BA, are now part of the Team, and testing is no longer a separate phase. ",
      Themes: "Roles",
      Category: "Cross Functional Team",
    },
    {
      id: 8,
      question:
        "Team understands why the chosen framework is best for the team",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 9,
      question:
        "Team understands importance & value of all the ceremonies that are part of the framework where they need to participate",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 10,
      question:
        "Team uses visual boards to track the progress of their activities",
      Themes: "Practices",
      Category: "Transparency",
    },
    {
      id: 11,
      question:
        "Team sets clear objectives and constantly reflects to understand where they are and what they need to improve",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 12,
      question:
        "Team has the knowledge of all environments and deployments are fully automated & actionable by any member of the team",
      Themes: "Practices",
      Category: "Autonomy",
    },
    {
      id: 13,
      question:
        "The team has Version control process defined and implemented through a CI/CD tool",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 14,
      question:
        "Team has a knowledge management repository that is shared and maintained by all",
      Themes: "Practices",
      Category: "Transparency",
    },
    {
      id: 15,
      question:
        "Product Owner has good understanding of Backlog Management, User Story writing etc",
      Themes: "Practices",
      Category: "Product Management",
    },
    {
      id: 16,
      question:
        "Product Owner is able to allocate enough time for the team for interaction & showcase",
      Themes: "Practices",
      Category: "Product Management",
    },
    {
      id: 17,
      question:
        "Product Management team is able to clearly articulate the value stream and how the team deliverables contribute to it",
      Themes: "Practices",
      Category: "Product Management",
    },
    {
      id: 18,
      question:
        "Product Management Team is able to provide clear vision and product roadmap for the team to understand and also how it aligns with overall organizational vision /objectives",
      Themes: "Practices",
      Category: "Product Management",
    },
    {
      id: 19,
      question:
        "Product Management team is funding value streams and are able to dynamically manage the budget realignment based on Organizational / Product priorities",
      Themes: "Practices",
      Category: "Governance",
    },
    {
      id: 20,
      question:
        "Team is empowered to realign / restructure based on the Organizational / Product priorities",
      Themes: "Practices",
      Category: "Autonomy",
    },
    {
      id: 21,
      question:
        "Team uses TDD / BDD practices as part of their development cycle",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 22,
      question:
        "There is a backlog of work defined & prioritized by Product Owner",
      Themes: "Practices",
      Category: "Product Management",
    },
    {
      id: 23,
      question:
        "There is shared Product vision, and Business or its representatives (MOS/ISP)  and IT talk about product outcomes rather than project.  ",
      Themes: "Practices",
      Category: "Collaboration",
    },
    {
      id: 24,
      question:
        "Business value is defined, tracked and displayed, commonly between IT and Business. ",
      Themes: "Practices",
      Category: "Collaboration",
    },
    {
      id: 25,
      question:
        "Backlog is prioritized based on business value derived to maximize the business outcome",
      Themes: "Practices",
      Category: "Product Management",
    },
    {
      id: 26,
      question:
        "Technical debt is reviewed regularly (at least every month) with an action plan (refactoring).",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 27,
      question:
        "An explicit Testing strategy is described, written, adapted and implemented by the team. ",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 28,
      question:
        "Functional tests that have been automated are run continuously as part of CI/CD pipelined. ",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 29,
      question:
        "Application deployment and its system configuration are scripted and versioned and irrespective of the environment. ",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 30,
      question:
        "Team has dashboards to monitor release level indicators. These dashboards are displayed, available and understandable by the stakeholders. ",
      Themes: "Practices",
      Category: "Transparency",
    },
    {
      id: 31,
      question:
        "Team is able to analyse root cause incidents and is able to implement appropriate remedial actions to avoid recurrence.",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 32,
      question:
        "Team is able to measure business feature utilization in production environment and are collecting consistent feedback from end users.",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 33,
      question:
        "Product Management is being undertaken through a digital tool accessible & visible to everyone in the team",
      Themes: "Practices",
      Category: "Transparency",
    },
    {
      id: 34,
      question:
        "CI /CD pipeline is fully automated independent of environments",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 35,
      question:
        "Application is fully Cloud Native, uses Service Oriented Architecture and is built with APIs ",
      Themes: "Practices",
      Category: "Practices",
    },
    {
      id: 36,
      question:
        "Business process / value stream optimization to achieve maximum efficiency is core focus area",
      Themes: "Practices",
      Category: "Product Management",
    },
    {
      id: 37,
      question:
        "The leadership understands their style, strengths and areas of improvement",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 38,
      question:
        "The leadership is able to provide a clear vision to the team and articulate how their work contributes to organizational vision and objectives",
      Themes: "Leadership",
      Category: "Transparency",
    },
    {
      id: 39,
      question:
        "The leadership is able to understand the strengths, aspirations, style of functioning and areas of improvement of each of the team members",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 40,
      question:
        "Leadership is able to define the boundaries, delegate authority for the team to make decisions within the boundaries to be autonomous",
      Themes: "Leadership",
      Category: "Autonomy",
    },
    {
      id: 41,
      question:
        "Leadership is able to create an environment of openness and transparency within the team that promotes collaboration",
      Themes: "Leadership",
      Category: "Transparency",
    },
    {
      id: 42,
      question:
        "Leadership is able to exhibit empathy towards the team members and understand their emotional state in different situations",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 43,
      question:
        "Leadership is able to exhibit vulnerability, seek help from team members where needed to increase levels of trust and organizational orientation  ",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 44,
      question:
        "Leadership is able reward and recognize people working towards team / organizational outcomes than personal outcomes to enhance culture of collaboration than competition",
      Themes: "Leadership",
      Category: "Ownership",
    },
    {
      id: 45,
      question:
        "Leadership is able to cocreate the team objectives & key results that would validate the accomplishment of those objectives to promote shared ownership",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 46,
      question:
        "Leadership is able to showcase high levels of self-awareness, seek consistent feedback from team on areas of improvement, set realistic goals to improve upon and validate from the team if they are able to ",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 47,
      question:
        "Leadership is able to create a psychologically safe environment where failure is seen as learning to promote sense of ownership without fear of retribution",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 48,
      question:
        "The leadership exhibits ability to forecast, identify and seize opportunities in a consistently changing environment and enabling teams to contribute to change.",
      Themes: "Leadership",
      Category: "Leadership Development",
    },
    {
      id: 49,
      question:
        "The Team members are able to understand the  vision and how their work contributes to organizational vision and objectives",
      Themes: "Team Culture",
      Category: "Transparency",
    },
    {
      id: 50,
      question:
        "The team members are able to understand the strengths, aspirations, style of functioning and areas of improvement of each of the team members",
      Themes: "Team Culture",
      Category: "Ownership",
    },
    {
      id: 51,
      question:
        "Team members are  open to criticism and accept negative feedback looking at it as a means to improve their skills & personality to be more effective",
      Themes: "Team Culture",
      Category: "Ownership",
    },
    {
      id: 52,
      question:
        "Team members are able to foster & build an environment of openness and transparency within the team that promotes collaboration",
      Themes: "Team Culture",
      Category: "Ownership",
    },
    {
      id: 53,
      question:
        "Team members are able to exhibit empathy towards the team members and understand & their emotional state and support  them in different situations",
      Themes: "Team Culture",
      Category: "Ownership",
    },
    {
      id: 54,
      question:
        "Team members are able to exhibit vulnerability, seek help from team members where needed to increase levels of trust and improve the delivery outcomes",
      Themes: "Team Culture",
      Category: "Ownership",
    },
    {
      id: 55,
      question:
        "Team members exhibit one team one goad spirit to enhance culture of collaboration & team / organizational orientation than personal orientation /competition",
      Themes: "Team Culture",
      Category: "Collaboration",
    },
    {
      id: 56,
      question:
        "Team members are able to challenge the leadership constructively providing their inputs on both strategical and tactical aspects",
      Themes: "Team Culture",
      Category: "Autonomy",
    },
    {
      id: 57,
      question:
        "Team members are able to showcase high levels of courage to provide feedback to others in the team as well as leadership on areas of improvement, and focus on continuously improving themselves as well.",
      Themes: "Team Culture",
      Category: "Collaboration",
    },
    {
      id: 58,
      question:
        "Team is able to foster and support a psychologically safe environment where failure is seen as learning to promote sense of ownership without fear of retribution",
      Themes: "Team Culture",
      Category: "Collaboration",
    },
    {
      id: 59,
      question:
        "The team does all in their control to fulfil their commitments even in difficult circumstance rather than looking for excuses to bank on.",
      Themes: "Team Culture",
      Category: "Ownership",
    },
    {
      id: 60,
      question:
        "The team encourages and support innovative ideas from all the members to build continuous innovation culture",
      Themes: "Team Culture",
      Category: "Collaboration",
    },
  ];
  const [questions, SetQuestions] = useState(questions11);

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      SetQuestions(questions1);
    }
  }, []);

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

  const OverallAssessment = [
    { name: "Roles", x: Roles },
    { name: "Practices", x: Practices },
    { name: "Team Culture", x: TeamCulture },
    { name: "Leadership", x: Leadership },
  ];

  const RolesAssessment = [
    { name: "Cross Functional Team", x: RolesCFT },
    { name: "Product Management", x: RolesPM },
    { name: "Collaboration", x: RolesCol },
  ];

  const PracticeAssessment = [
    { name: "Practices", x: PracticesP },
    { name: "Autonomy", x: PracticesA },
    { name: "Product Management", x: PracticesPM },
    { name: "Governance", x: PracticesG },
    { name: "Collaboration", x: PracticesCol },
    { name: "Transparancy", x: PracticesT },
  ];

  const LeadershipAssessment = [
    { name: "Leadership Development", x: LeadershipLD },
    { name: "Transparency", x: LeadershipT },
    { name: "Autonomy", x: LeadershipA },
    { name: "Ownership", x: LeadershipO },
  ];

  const TeamCultureAssessment = [
    { name: "Transpanrency", x: TeamCultureT },
    { name: "Ownership", x: TeamCultureO },
    { name: "Autom-nomy", x: TeamCultureA },
    { name: "Collaboration", x: TeamCultureCol },
  ];

  return (
    <div>
      <Helmet>
        <title> Agile Team Assessment | DAI</title>
        {/* <meta
          name="description"
          content="Get stats about every music from every movie"
        /> */}
      </Helmet>
      <TopMenubar />
      <div className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary">
        <h2 className="text-center text-white">Assessments</h2>
      </div>
      <div>
        {showScore ? (
          <Container>
            <Row className="justify-content-center mt-5 mb-5">
              <Col md={12}>
                <div className="score-section p-5 bg-light shadow text-center text-primary fw-bold">
                  {Roles} {RolesCFT}you scored {Score} out of {questions.length}{" "}
                </div>

                {/* <RadarGraph /> */}
              </Col>
            </Row>
            <Row className="justify-content-center g-3">
              <Col md={6}>
                <Card>
                  <ReactRadar data={OverallAssessment} />
                </Card>
              </Col>
              <Col md={6}>
                <Card><ReactRadar data={RolesAssessment} /></Card>
              </Col>
              <Col md={6}>
                <Card><ReactRadar data={PracticeAssessment} /></Card>
              </Col>
              <Col md={6}>
                <Card><ReactRadar data={LeadershipAssessment} /></Card>
              </Col>
              <Col md={6}>
                <Card><ReactRadar data={TeamCultureAssessment} /></Card>
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

export default AgileTeamAssessment;
