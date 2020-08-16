import React, { useState, useEffect } from "react";
import './dashboard.scss';
import ProgressBar from "../components/progressBar";


export default function Dashboard() {
  const [active, setActive] = useState(-1);
  const [factor, setFactor] = useState(null);
  const [points, setPoints] = useState(0);
  const [optionActive, setOptionActive] = useState(0);

  let result=null;
  const question = [
    {
      questionNo: 1,
      question: "How old are you?",
      option: [
        {
          heading: "18-24",
          subHeading: "years",
          points: null,
          factor: 1,
          image: null,
          optionNo: 1
        },
        {
          heading: "25-30",
          subHeading: "years",
          points: null,
          factor: 0.9,
          image: null,
          optionNo: 2
        },
        {
          heading: "30+",
          subHeading: "years",
          points: null,
          factor: 0.8,
          image: null,
          optionNo: 3
        }
      ]
    },
    {
      questionNo: 2,
      question: "How are you feeling today?",
      option: [
        {
          heading: null,
          subHeading: "sad",
          points: -2,
          factor: 1,
          image: "./assets/sad.png",
          optionNo: 1
        },
        {
          heading: null,
          subHeading: "neutral",
          points: 0,
          factor: 1,
          image: "./assets/neutral.png",
          optionNo: 2
        },
        {
          heading: null,
          subHeading: "happy",
          points: 2,
          factor: 1,
          image: "./assets/smilling.png",
          optionNo: 3
        }
      ]
    },
    {
      questionNo: 3,
      question:
        "Do you have someone who you feel comfortable sharing your feelings with?",
      option: [
        {
          heading: "Yes",
          subHeading: null,
          points: +3,
          factor: 1,
          image: null,
          optionNo: 1
        },
        {
          heading: "No",
          subHeading: null,
          points: 0,
          factor: 1,
          image: null,
          optionNo: 2
        }
      ]
    },
    {
      questionNo: 4,
      question:
        "How many times this week would you say you felt stressed to the point of worry?",
      option: [
        {
          heading: "0",
          subHeading: "TIMES",
          points: 0,
          factor: 1,
          image: null,
          optionNo: 1
        },
        {
          heading: "1-2",
          subHeading: "TIMES",
          points: 1,
          factor: 1,
          image: null,
          optionNo: 2
        },
        {
          heading: "3+",
          subHeading: "TIMES",
          points: 2,
          factor: 1,
          image: null,
          optionNo: 3
        }
      ]
    },
    {
      questionNo: 5,
      question:
        "How many times this week have you exercised moderately for more than 20 minutes?",
      option: [
        {
          heading: "0",
          subHeading: "TIMES",
          points: 0,
          factor: 1,
          image: null,
          optionNo: 1
        },
        {
          heading: "1",
          subHeading: "TIMES",
          points: 2,
          factor: 1,
          image: null,
          optionNo: 2
        },
        {
          heading: "3+",
          subHeading: "TIMES",
          points: 3,
          factor: 1,
          image: null,
          optionNo: 3
        },
        
      ]
    },
    {
      questionNo: 6,
      question:
        "How many hours do you sleep on average every day?",
      option: [
        {
          heading: "<6",
          subHeading: "HOURS",
          points: -1,
          factor: 1,
          image: null,
          optionNo: 1
        },
        {
          heading: "6-8",
          subHeading: "HOURS",
          points: 1,
          factor: 1,
          image: null,
          optionNo: 2
        },
        {
          heading: "8+",
          subHeading: "HOURS",
          points: 2,
          factor: 1,
          image: null,
          optionNo: 3
        },
        
      ]
    },
    {
      questionNo: 7,
      question:
        "How many times each day do you stop to relax and breathe?",
      option: [
        {
          heading: "0",
          subHeading: "TIMES",
          points: 0,
          factor: 1,
          image: null,
          optionNo: 1
        },
        {
          heading: "1+",
          subHeading: "TIMES",
          points: 2,
          factor: 1,
          image: null,
          optionNo: 2
        }
        
      ]
    },
    
  ];

  const calcResult = () => {
    let finalPoints = points * factor;
    if (finalPoints < 5) {
      result=1;
      return (
        <div>
          <p>
            Based on your answers, below are a few tips that we think might be
            helpful to you.
          </p>
          <ul>
            <li>Talking to someone you trust</li>
            <li> Trying to manage your worries</li>
            <li>Look after your physical health</li>
            <li>Try breathing excercises</li>
            <li>Keep a diary to help you recognise and avoid stressors </li>
            <li> Celebrate the positives</li>
          </ul>
        </div>
      );
    } else if (finalPoints < 10) {
      result=2;
      return  <div>
      <p>
      Based on your answers, we think you are doing pretty well. Carry on as you were!
      </p>
      
    </div>;
    } else {
      result=3;
      return <div><p>Based on your answers, we think you are a Wellness Champion! Let’s celebrate your success together </p></div>;
    }
  };

  const handleNext = event => {
    setActive(active + 1);
  };

  const handlePrev = event => {
    setActive(-1);
    setPoints(0);
  };
  const handleOptionClick = event => {
    setOptionActive(0);
    setOptionActive(event.optionNo);
    if (active === 0) {
      setFactor(event.factor);
    } else {
      setPoints(points + event.points);
    }
  };
  useEffect(() => {
    setOptionActive(0);
  }, [active]);

  return (
    <div className="main-wrapper">
      <div className="left-container">
        {active === -1  ? (
          <></>
        ) : (<>
          { active >= question.length ? (<></>):(<div className="question-counter">
          {active + 1}/{question.length}
        </div>)}
          
        </>)}
      </div>
      <div className="right-container">
        {active === -1 ? (
          <div className="card">
            <div className="logo">
              <img  alt={"logo"} className="logo" src="../assets/logo.png"></img>
            </div>
            <div className="content-wrapper">
              <div>
                <h2>Welcome !</h2>
                <h2>Thank you for joining us.</h2>
                <p>
                  We all know that mental wellness is equally important as
                  physical well-being. Let’s go through a couple a questions to
                  find out how you have been doing recently.
                </p>
              </div>
              <div>
                <img alt={"logo"} src={`../assets/question${active + 1}.png`}></img>
              </div>
            </div>
            <div className="button-wrapper">
              <button className="prev-btn btn"> I’D LIKE TO OPT OUT</button>
              <button
                className="next-btn btn"
                onClick={e => {
                  handleNext();
                }}
              >
                {" "}
                LET'S GET STARTED{" "}
              </button>
            </div>
          </div>
        ) : (
          <>
            {active + 1 > question.length ? (
              <div>
                <div>
                  <div className="card">
                  <ProgressBar width={active} />
                  <div className="logo">
                      <img alt={"logo"} src="/assets/logo.png"></img>
                    </div>
                    <div className="content-wrapper">
                      <div className="content-left">
                        <h2>{"Well done!"}</h2>
                     
                      
                          {calcResult()}


                      </div>
                      <div className="content-right">
                        <img alt={"result"} src={`../assets/result${result}.png`}></img>
                      </div>
                    </div>
                    <div className="button-wrapper-end">
                      <p>
                        Are you interested in hearing from us in the future?
                      </p>
                      <div>
                        <button
                          className="prev-btn btn"
                          onClick={e => {
                            handlePrev();
                          }}
                        >
                          No Thanks
                        </button>
                        <button className={"next-btn btn"}>YES PLEASE</button>
                      </div>
                    </div>
                  </div>
            
                </div>
              </div>
            ) : (
              <div>
                <div className="card">
                <ProgressBar width={active} />
                <div className="logo">
                    <img alt={"logo"} src="/assets/logo.png"></img>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-left">
                    
                      <h2>
                        {question[active].questionNo}.{" "}
                        {question[active].question}{" "}
                      </h2>{" "}
                      <br></br>
                      <div className="options-wrapper">
                        {question[active].option.map(el => {
                          return (
                            <div key={el.optionNo}
                              onClick={() => {
                                handleOptionClick(el);
                              }}
                              className={
                                optionActive === el.optionNo
                                  ? "active option"
                                  : "option"
                              }
                            >
                              <div>
                                {el.image===null ? (<> </>):(<img alt={"logo"} src={el.image}></img>)}
                                <div>{el.heading}</div>
                                <div>{el.subHeading}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="content-right">
                      <img alt={"logo"} src={`../assets/question${active}.png`}></img>
                    </div>
                  </div>
                  <div className="button-wrapper">
                    <button
                      className="prev-btn btn"
                      onClick={e => {
                        handlePrev();
                      }}
                    >
                      BACK
                    </button>
                    <button
                      className={
                        optionActive === 0
                          ? "next-btn btn disable"
                          : "next-btn btn"
                      }
                      onClick={e => {
                        handleNext();
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
           
              </div>
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
}
