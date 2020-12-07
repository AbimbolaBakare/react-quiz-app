import React from 'react'
import { useGlobalContext } from './quizService'
import SetupForm from './components/InitialForm';
import Loading from './components/Loading'
import Modal from './components/quizModal';
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    closeModal
  } = useGlobalContext()
  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }

  const { question, incorrect_answers, correct_answer } = questions[index]
  // const answers = [...incorrect_answers, correct_answer]
  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <button className='start-again' onClick={closeModal}>
          Start again
        </button>
        <p className='correct-answers'>
          Correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h3 className='title' dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          Next question
        </button>
      </section>
    </main>
  )
}

export default App;
