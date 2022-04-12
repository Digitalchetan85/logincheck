import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import * as Yup from "yup";
import Footer from "../Includes/Footer";
import TopMenubar from "../Includes/TopMenubar";
import ReactRadar from "./ReactRadar";

const AgileCoachingAssessment = () => {
  const coachingAssessment = [
    {
      id: 1,
      question:
        "Establish a warm, safe and supportive connection between coach and client",
      coachingProcess: "Initiate the session",
      coachingCompetency: "Establish Rapport",
    },

    {
      id: 2,
      question:
        "Coach demonstrates curiosity to learn more about the client, inquires about or explores the words the client uses, the client’s emotions.the client’s energy shifts, nonverbal cues or other behaviors.",
      coachingProcess: "Explore the client situation",
      coachingCompetency: "Listens Actively",
    },

    {
      id: 3,
      question:
        "Coach invites or allows the client to explore progress made towards what the client wanted to accomplish in the session, relevance of the outcome from the session and inquires if anything needs to change ",
      coachingProcess: "Check In",
      coachingCompetency: "Evokes Awareness",
    },

    {
      id: 4,
      question:
        "The leadership understands their style, strengths and areas of improvement",
      coachingProcess: "Explore possibilities & wishful thinking",
      coachingCompetency: "Maintains Presence",
    },

    {
      id: 5,
      question:
        "Coach invites client to state or explore the client's learning in this session about themself (the who) and invites the client to state or explore the client's learning in this session about their situation (the what).",
      coachingProcess: "Establish Actions",
      coachingCompetency: "Facilitates Client Growth",
    }
  ];

  const coachingAssessment1 = [
    {
      id: 1,
      question:
        "Establish a warm, safe and supportive connection between coach and client",
      coachingProcess: "Initiate the session",
      coachingCompetency: "Establish Rapport",
    },
    {
      id: 2,
      question:
        "Coach partners with the client to identify or reconfirm what the client wants to",
      coachingProcess: "Initiate the session",
      coachingCompetency: "Establishes Coaching Agreement",
    },
    {
      id: 3,
      question:
        "Coach partners with the client to define or reconfirm measure(s) of success for what",
      coachingProcess: "Initiate the session",
      coachingCompetency: "Establishes Coaching Agreement",
    },
    {
      id: 4,
      question:
        "Coach inquires about or explores what is important or meaningful to the client about what they want to accomplish in this session",
      coachingProcess: "Initiate the session",
      coachingCompetency: "Establishes Coaching Agreement",
    },
    {
      id: 5,
      question:
        "Coach partners with the client to define what the client believes they need to address to achieve what they want to accomplish in this session.",
      coachingProcess: "Initiate the session",
      coachingCompetency: "Establishes Coaching Agreement",
    },
    {
      id: 6,
      question:"Coach acts in response to what the client wants to accomplish throughout this session (the what) and partners with the client by supporting the client to choose what happens in this session.",
      coachingProcess: "Explore the client situation",
      coachingCompetency: "Maintains Presence",
    },
    {
      id: 7,
      question:"Coach’s questions and observations are customized by using what the coach has learned about who the client is or the client’s situation. ",
      coachingProcess: "Explore the client situation",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 8,
      question:"Coach explores the impact to the client in response to the whole person of the client (the who). ",
      coachingProcess: "Explore the client situation",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 9,
      question:"Coach demonstrates curiosity to learn more about the client, inquires about or explores the words the client uses, the client’s emotions.the client’s energy shifts, nonverbal cues or other behaviors.",
      coachingProcess: "Explore the client situation",
      coachingCompetency: "Listens Actively",
    },
    {
      id: 10,
      question:"Coach allows for silence, pause or reflection and allows the client to complete speaking without interrupting unless there is a stated coaching purpose to do so.",
      coachingProcess: "Explore the client situation",
      coachingCompetency: "Maintains Presence",
    },
    {
      id: 11,
      question:"Coach succinctly reflects or summarizes what the client communicated to ensure the client's clarity and understanding about the situation evolves beyond curren thinking and  inquires about or explores how the client currently perceives themself or their world. ",
      coachingProcess: "Explore the client situation",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 12,
      question:
        "Coach invites or allows the client to explore progress made towards what the client wanted to accomplish in the session, relevance of the outcome from the session and inquires if anything needs to change ",
      coachingProcess: "Check In",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 13,
      question:
        "The leadership understands their style, strengths and areas of improvementCoach  uses language that is generally clear and concise, asks questions about what the client would have ideally liked to have happened in the current situation (the what) and how that could have positively impacted them (the who)",
      coachingProcess: "Explore possibilities & wishful thinking",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 14,
      question:
        "Coach asks questions about the client, such as their current way of thinking, feeling, values, needs, wants, beliefs or behavior and help the client explore beyond the client’s current thinking or feeling to new or expanded ways of thinking or feeling about themself (the who).",
      coachingProcess: "Explore possibilities & wishful thinking",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 15,
      question:
        "Coach asks questions to help the client explore beyond the client’s current thinking or feeling to new or expanded ways of thinking or feeling about their situation (the what).",
        coachingProcess: "Explore possibilities & wishful thinking",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 16,
      question:
        "Coach asks clear, direct, primarily open-ended questions, one at a time, at a pace that allows for thinking, feeling or reflection by the client.",
      coachingProcess: "Explore possibilities & wishful thinking",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 17,
      question:
        "Coach shares—with no attachment—observations, intuitions, comments, thoughts or feelings, and invites the client’s exploration through verbal or tonal invitation and allows the client to do most of the talking.",
      coachingProcess: "Explore possibilities & wishful thinking",
      coachingCompetency: "Maintains Presence",
    },
    {
      id: 18,
      question:
        "Coach asks questions to help the client explore beyond current thinking, feeling or behaving toward the outcome the client desires.",
             coachingProcess: "Establish Actions",
      coachingCompetency: "Evokes Awareness",
    },
    {
      id: 19,
      question:
        "Coach invites client to state or explore the client's learning in this session about themself (the who) and invites the client to state or explore the client's learning in this session about their situation (the what).",
      coachingProcess: "Establish Actions",
      coachingCompetency: "Facilitates Client Growth",
    },
    {
      id: 20,
      question:"Coach invites the client to consider how they will use new learning from this coaching session, partners with the client to design post-session thinking, reflection or action.",
      coachingProcess: "Establish Actions",
      coachingCompetency: "Facilitates Client Growth",
    },
    {
      id: 21,
      question:"Coach partners with the client to consider how to move forward, including resources, support or potential barriers and partners with the client to design the best methods of accountability for themselves.",
      coachingProcess: "Establish Actions",
      coachingCompetency: "Facilitates Client Growth",
    },
    {
      id: 22,
      question: "Coach celebrates the client’s progress and learning.",
      coachingProcess: "Closing the Session",
      coachingCompetency: "Facilitates Client Growth",
    },
    {
      id: 23,
      question: "Coach partners with the client on how they want to complete this session.",
      coachingProcess: "Closing the Session", 
      coachingCompetency: "Facilitates Client Growth",
    },
    {
      id: 24,
      question:"Follows ethical guidelines and emphasises on maintaining confidentiality of the client's situation between the coach and the client",
      coachingProcess: "Establish Trust", 
      coachingCompetency: "Meeting Ethical Guidelines & Professional Standards",
    },
    {
      id: 25,
      question:"Coach acknowledges and respects the client’s unique talents, insights and work in the  coaching process.",
      coachingProcess: "Establish Trust", 
      coachingCompetency: "Cultivates Trust & Safety",
    },
    {
      id: 26,
      question:"Creates a safe environment for the client to bring his / her true authentic self to the session without fear of any judgement.",
      coachingProcess: "Establish Trust", 
      coachingCompetency: "Cultivates Trust & Safety",
    },
    {
      id: 27,
      question:"Coach shows support, empathy or concern for the client.",
      coachingProcess: "Establish Trust", 
      coachingCompetency: "Cultivates Trust & Safety",
    },
    {
      id: 28,
      question:"Coach acknowledges and supports the client’s expression of feelings, perceptions, concerns, beliefs or suggestions.",
      coachingProcess: "Establish Trust", 
      coachingCompetency: "Cultivates Trust & Safety",
    },
    {
      id: 29,
      question:"Coach partners with the client by inviting the client to respond in any way to the coach’s contributions and accepts the client’s response.",
      coachingProcess: "Establish Trust", 
      coachingCompetency: "Cultivates Trust & Safety",
    }
  ];
  
  const [questions, SetQuestions] = useState(coachingAssessment);

  useEffect(() => {
    if(localStorage.getItem("auth_token"))
    {
      SetQuestions(coachingAssessment1);
    }
  }, [])


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, SetshowScore] = useState(false);
  const [Score, setScore] = useState(0);

  const [Session, setSession] = useState([]);
  const [SessionER, setSessionER] = useState([]);
  const [SessionCA, setSessionCA] = useState([]);

  const [Client, setClient] = useState([]);
  const [ClientPres, setClientPres] = useState([]);
  const [ClientEvokes, setClientEvokes] = useState([]);
  const [ClientLA, setClientLA] = useState([]);

  const [CheckIn, setCheckIn] = useState([]);
  const [CheckEvoke, setCheckEvoke] = useState([]);

  const [Wishful, setWishful] = useState([]);
  const [WishfulEvoke, setWishfulEvoke] = useState([]);
  const [WishfulMP, setWishfulMP] = useState([]);

  const [Actions, setActions] = useState([]);
  const [ActionsEvoke, setActionsEvoke] = useState([]);
  const [ActionFCG, setActionFCG] = useState([]);

  const [Closing, setClosing] = useState([]);
  const [ClosingFCG, setClosingFCG] = useState([]);

  const [Trust, setTrust] = useState([]);
  const [TrustMegps, setTrustMegps] = useState([]);
  const [TrustCts, setTrustCts] = useState([]);

  const initialValues = {
    applicable: "",
    applied: "",
    teamScore: "",
  };

  const onSubmit = (values, { resetForm }) => {
    const data = values;
    resetForm({ values: "" });

    for (var i = 0; i < questions.length; i++) {
      if (questions[currentQuestion].id === i) {
        if (
          questions[currentQuestion].coachingProcess === "Initiate the session"
        ) {
          // setRoles((prevRoles) => prevRoles + Number(data.teamScore));
          setSession([...Session, Number(data.teamScore)]);
          if (
            questions[currentQuestion].coachingCompetency ===
            "Establish Rapport"
          ) {
            // setSessionER(
            // (prevSessionER) => prevSessionER + Number(data.teamScore)
            setSessionER([...SessionER, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].coachingCompetency ===
            "Establishes Coaching Agreement"
          ) {
            // setSessionCA((prevSessionCA) => prevSessionCA + Number(data.teamScore));
            setSessionCA([...SessionCA, Number(data.teamScore)]);
          } else {
            // setRolesCol(
            // (prevRolesCol) => prevRolesCol + Number(data.teamScore)
            // setRolesCol([...RolesCol, Number(data.teamScore)]);
            // );
          }
        } else if (
          questions[currentQuestion].coachingProcess ===
          "Explore the client situation"
        ) {
          // setLeadership(
          // (prevLeadership) => prevLeadership + Number(data.teamScore)
          setClient([...Client, Number(data.teamScore)]);
          // );
          if (
            questions[currentQuestion].coachingCompetency ===
            "Maintains Presence"
          ) {
            // setClientPres(
            // (prevClientPres) => prevClientPres + Number(data.teamScore)
            setClientPres([...ClientPres, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].coachingCompetency === "Evokes Awareness"
          ) {
            // setClientEvokes(
            // (prevClientEvokes) => prevClientEvokes + Number(data.teamScore)
            setClientEvokes([...ClientEvokes, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].coachingCompetency === "Listens Actively"
          ) {
            // setClientLA(
            // (prevClientLA) => prevClientLA + Number(data.teamScore)
            setClientLA([...ClientLA, Number(data.teamScore)]);
            // );
          } else {
            // setLeadershipO(
            // (prevLeadershipO) => prevLeadershipO + Number(data.teamScore)
            // setLeadershipO([...LeadershipO, Number(data.teamScore)]);
            // );
          }
        } else if (questions[currentQuestion].coachingProcess === "Check In") {
          // setPractices(
          // (prevPractices) => prevPractices + Number(data.teamScore)
          setCheckIn([...CheckIn, Number(data.teamScore)]);
          // );
          if (
            questions[currentQuestion].coachingCompetency === "Evoke AwareNess"
          ) {
            // setPracticesP(
            // (prevPracticesP) => prevPracticesP + Number(data.teamScore)
            setCheckEvoke([...CheckEvoke, Number(data.teamScore)]);
            // );
          }
          // else if (questions[currentQuestion].coachingCompetency === "Transparency") {
          //   // setPracticesT(
          //   // (prevPracticesT) => prevPracticesT + Number(data.teamScore)
          //   // setPracticesT([...PracticesT, Number(data.teamScore)]);
          //   // );
          // }
          // else if (questions[currentQuestion].coachingCompetency === "Autonomy") {
          //   // setPracticesA(
          //   // (prevPracticesA) => prevPracticesA + Number(data.teamScore)
          //   // setPracticesA([...PracticesA, Number(data.teamScore)]);
          //   // );
          // }
          // else if (
          //   questions[currentQuestion].coachingCompetency === "Product Management"
          // )
          //  {
          //   // setPracticesPM(
          //   // (prevPracticesPM) => prevPracticesPM + Number(data.teamScore)
          //   // setPracticesPM([...PracticesPM, Number(data.teamScore)]);
          //   // );
          // }
          // else if (questions[currentQuestion].coachingCompetency === "Governance") {
          //   // setPracticesG(
          //   // (prevPracticesG) => prevPracticesG + Number(data.teamScore)
          //   // setPracticesG([...PracticesG, Number(data.teamScore)]);
          //   // );
          // }
          // else {
          //   // setPracticesCol(
          //   // (prevPracticesCol) => prevPracticesCol + Number(data.teamScore)
          //   // setPracticesCol([...PracticesCol, Number(data.teamScore)]);
          //   // );
          // }
        } else if (
          questions[currentQuestion].coachingProcess ===
          "Explore possibilities & wishful thinking"
        ) {
          // setTeamculture(
          // (prevTeamculture) => prevTeamculture + Number(data.teamScore)
          setWishful([...Wishful, Number(data.teamScore)]);
          // );
          if (
            questions[currentQuestion].coachingCompetency === "Evokes Awareness"
          ) {
            // setWishfulEvoke(
            // (prevWishfulEvoke) => prevWishfulEvoke + Number(data.teamScore)
            setWishfulEvoke([...WishfulEvoke, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].coachingCompetency ===
            "Maintains Presence"
          ) {
            // setWishfulMP(
            // (prevWishfulMP) => prevWishfulMP + Number(data.teamScore)
            setWishfulMP([...WishfulMP, Number(data.teamScore)]);
            // );
          }
          // else if (questions[currentQuestion].coachingCompetency === "Collaboration") {
          //   // setTeamcultureCol(
          //   //   (prevTeamcultureCol) =>
          //   // prevTeamcultureCol + Number(data.teamScore)
          //   // setTeamcultureCol([...TeamCultureCol, Number(data.teamScore)]);
          //   // );
          // }
          // else {
          //   // setTeamcultureA(
          //   // (prevTeamcultureA) => prevTeamcultureA + Number(data.teamScore)
          //   // setTeamcultureA([...TeamCultureA, Number(data.teamScore)]);
          //   // );
          // }
        } else if (
          questions[currentQuestion].coachingProcess === "Establish Actions"
        ) {
          // setLeadership(
          // (prevLeadership) => prevLeadership + Number(data.teamScore)
          setActions([...Actions, Number(data.teamScore)]);
          // );
          if (
            questions[currentQuestion].coachingCompetency === "Evokes Awareness"
          ) {
            // setClientPres(
            // (prevClientPres) => prevClientPres + Number(data.teamScore)
            setActionsEvoke([...ActionsEvoke, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].coachingCompetency ===
            "Facilitates Client Growth"
          ) {
            // setClientEvokes(
            // (prevClientEvokes) => prevClientEvokes + Number(data.teamScore)
            setActionFCG([...ActionFCG, Number(data.teamScore)]);
            // );
          }
          // else if (questions[currentQuestion].coachingCompetency === "") {
          //   // setClientLA(
          //   // (prevClientLA) => prevClientLA + Number(data.teamScore)
          //   setClientLA([...ClientLA, Number(data.teamScore)]);
          //   // );
          // } else {
          //   // setLeadershipO(
          //   // (prevLeadershipO) => prevLeadershipO + Number(data.teamScore)
          //   // setLeadershipO([...LeadershipO, Number(data.teamScore)]);
          //   // );
          // }
        } else if (
          questions[currentQuestion].coachingProcess === "Closing the Session"
        ) {
          // setLeadership(
          // (prevLeadership) => prevLeadership + Number(data.teamScore)
          setClosing([...Closing, Number(data.teamScore)]);
          // );
          if (
            questions[currentQuestion].coachingCompetency ===
            "Facilitates Client Growth"
          ) {
            // setClientPres(
            // (prevClientPres) => prevClientPres + Number(data.teamScore)
            setClosingFCG([...ClosingFCG, Number(data.teamScore)]);
            // );
          }
          // else if (
          //   questions[currentQuestion].coachingCompetency === "Evokes Awareness"
          // ) {
          //   // setClientEvokes(
          //   // (prevClientEvokes) => prevClientEvokes + Number(data.teamScore)
          //   setClientEvokes([...ClientEvokes, Number(data.teamScore)]);
          //   // );
          // } else if (
          //   questions[currentQuestion].coachingCompetency === "Listens Actively"
          // ) {
          //   // setClientLA(
          //   // (prevClientLA) => prevClientLA + Number(data.teamScore)
          //   setClientLA([...ClientLA, Number(data.teamScore)]);
          //   // );
          // } else {
          //   // setLeadershipO(
          //   // (prevLeadershipO) => prevLeadershipO + Number(data.teamScore)
          //   // setLeadershipO([...LeadershipO, Number(data.teamScore)]);
          //   // );
          // }
        } else if (
          questions[currentQuestion].coachingProcess === "Establish Trust"
        ) {
          // setLeadership(
          // (prevLeadership) => prevLeadership + Number(data.teamScore)
          setTrust([...Trust, Number(data.teamScore)]);
          // );
          if (
            questions[currentQuestion].coachingCompetency ===
            "Meeting Ethical Guidelines & Professional Standards"
          ) {
            // setClientPres(
            // (prevClientPres) => prevClientPres + Number(data.teamScore)
            setTrustMegps([...TrustMegps, Number(data.teamScore)]);
            // );
          } else if (
            questions[currentQuestion].coachingCompetency ===
            "Cultivates Trust & Safety"
          ) {
            // setClientEvokes(
            // (prevClientEvokes) => prevClientEvokes + Number(data.teamScore)
            setTrustCts([...TrustCts, Number(data.teamScore)]);
            // );
          }
          // else if (questions[currentQuestion].coachingCompetency === "Listens Actively") {
          //   // setClientLA(
          //   // (prevClientLA) => prevClientLA + Number(data.teamScore)
          //   setClientLA([...ClientLA, Number(data.teamScore)]);
          //   // );
          // } else {
          //   // setLeadershipO(
          //   // (prevLeadershipO) => prevLeadershipO + Number(data.teamScore)
          //   // setLeadershipO([...LeadershipO, Number(data.teamScore)]);
          //   // );
          // }
        }
        // // console.log("hello first");
      }
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      SetshowScore(true);
      setSession(Session.reduce((p, c) => p + c, 0) / Session.length);
      setSessionER(SessionER.reduce((p, c) => p + c, 0) / SessionER.length);
      setSessionCA(SessionCA.reduce((p, c) => p + c, 0) / SessionCA.length);
      // setRolesCol(RolesCol.reduce((p, c) => p + c, 0) / RolesCol.length);
      setClient(Client.reduce((p, c) => p + c, 0) / Client.length);
      setClientPres(ClientPres.reduce((p, c) => p + c, 0) / ClientPres.length);
      setClientEvokes(
        ClientEvokes.reduce((p, c) => p + c, 0) / ClientEvokes.length
      );
      // setLeadershipO(
      //   LeadershipO.reduce((p, c) => p + c, 0) / LeadershipO.length
      // );
      // setPractices(Practices.reduce((p, c) => p + c, 0) / Practices.length);
      // setPracticesP(PracticesP.reduce((p, c) => p + c, 0) / PracticesP.length);
      // setPracticesT(PracticesT.reduce((p, c) => p + c, 0) / PracticesT.length);
      // setPracticesA(PracticesA.reduce((p, c) => p + c, 0) / PracticesA.length);
      // setPracticesPM(
      //   PracticesPM.reduce((p, c) => p + c, 0) / PracticesPM.length
      // );
      // setPracticesG(PracticesG.reduce((p, c) => p + c, 0) / PracticesG.length);
      // setPracticesCol(
      //   PracticesCol.reduce((p, c) => p + c, 0) / PracticesCol.length
      // );
      setWishful(Wishful.reduce((p, c) => p + c, 0) / Wishful.length);
      setWishfulEvoke(
        WishfulEvoke.reduce((p, c) => p + c, 0) / WishfulEvoke.length
      );
      setWishfulMP(WishfulMP.reduce((p, c) => p + c, 0) / WishfulMP.length);
      // setTeamcultureA(
      //   TeamCultureA.reduce((p, c) => p + c, 0) / TeamCultureA.length
      // );
      // setTeamcultureCol(
      //   TeamCultureCol.reduce((p, c) => p + c, 0) / TeamCultureCol.length
      // );
      setActions(Actions.reduce((p, c) => p + c, 0) / Actions.length);
      setActionsEvoke(
        ActionsEvoke.reduce((p, c) => p + c, 0) / ActionsEvoke.length
      );
      setActionFCG(ActionFCG.reduce((p, c) => p + c, 0) / ActionFCG.length);

      setClosing(Closing.reduce((p, c) => p + c, 0) / Closing.length);
      setClosingFCG(ClosingFCG.reduce((p, c) => p + c, 0) / ClosingFCG.length);
      // setWishfulMP(WishfulMP.reduce((p, c) => p + c, 0) / WishfulMP.length);

      setTrust(Trust.reduce((p, c) => p + c, 0) / Trust.length);
      setTrustMegps(TrustMegps.reduce((p, c) => p + c, 0) / TrustMegps.length);
      setTrustCts(TrustCts.reduce((p, c) => p + c, 0) / TrustCts.length);
    }
  };

  const validationSchema = Yup.object({
    applicable: Yup.string().required("Required"),
    applied: Yup.string().required("Required"),
    teamScore: Yup.string().required("Required"),
  });

  const graphData = [
    { name: "Establish Rapport", x: SessionER },
    { name: "Establishes Coaching Agreement", x: SessionCA },
    { name: "Listens Actively", x: ClientLA },
    { name: "Evokes Awareness", x: CheckEvoke },
    { name: "Ownership", x: WishfulMP },
    { name: "Practices", x: CheckIn },
  ];

  const graphDataTheme = [
    { name: "Intiate the Session", x: Session },
    { name: "Check In", x: CheckIn },
    { name: "Explore possibilities & wishful thinking", x: Wishful },
    { name: "Explore the client situation", x: Client },
    { name: "Establish Actions", x: Actions },
    { name: "Closing the Session", x: Closing },
    { name: "Establish Trust", x: Trust },
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
              <Col md={12}>
                <div className="score-section p-5 bg-light shadow text-center text-primary fw-bold">
                  {Session} {SessionER}you scored {Score} out of{" "}
                  {questions.length}{" "}
                </div>

                {/* <RadarGraph /> */}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={6}>
                <div className="text-center">
                  <ReactRadar data={graphDataTheme} />
                </div>
              </Col>
              <Col md={6}>
                <div className="text-center">
                  <ReactRadar data={graphData} />
                </div>
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
                                Checkout
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

export default AgileCoachingAssessment;
