import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAngleUp, FaAngleDown } from "react-icons/fa"
import questions from "../data/questions"

const SingleQuestion = ({ id, question, answer }) => {
  const [showQuestion, setShowQuestion] = useState(false)
  return (
    <div id={id} className="single-qtn">
      <div className="qtn-top">
        <p>{question}</p>
        <button onClick={() => setShowQuestion(!showQuestion)}>
          {showQuestion ? <FaAngleDown /> : <FaAngleUp />}
        </button>
      </div>
      {showQuestion && <p className="answer">{answer}</p>}
    </div>
  )
}

const FrequentQuestions = () => {
  const [qtns, setQtn] = useState(questions)
  console.log(qtns)
  return (
    <section className="frequent-questions">
      <h2>Frequently Asked Questions</h2>
      {qtns.map(qtn => {
        return <SingleQuestion {...qtn} />
      })}
      <Link to="/about-us">Learn more</Link>
    </section>
  )
}

export default FrequentQuestions
