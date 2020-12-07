import React from 'react';
import { useGlobalContext } from '../quizService';

const InitialForm = () => {
    const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
    return (
        <main>
            <section className='quiz quiz-small'>
                <form className='setup-form'>
                    <h2> Trivia</h2>
                    {/* Number of questions */}
                    <div className='form-control'>
                        <label htmlFor='amount'>Number of questions</label>
                        <input
                            type='number'
                            name='amount'
                            id='amount'
                            value={quiz.amount}
                            onChange={handleChange}
                            className='form-input'
                            min={1}
                            max={50}
                        />
                    </div>

                    {/* Question category */}
                    <div className='form-control'>
                        <label htmlFor='category'>Category</label>
                        <select
                            name='category'
                            id='category'
                            className='form-input'
                            value={quiz.category}
                            onChange={handleChange}
                        >
                            <option value='history'>History</option>
                            <option value='sports'>Sports</option>
                            <option value='politics'>Politics</option>
                            <option value='celebrities'>Celebrities</option>
                            <option value='general'>General</option>
                            <option value='comics'>Comics</option>
                        </select>
                    </div>

                    {/* Question difficulty */}
                    <div className='form-control'>
                        <label htmlFor='difficulty'>Select difficulty</label>
                        <select
                            name='difficulty'
                            id='difficulty'
                            className='form-input'
                            value={quiz.difficulty}
                            onChange={handleChange}
                        >
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </div>
                    {error && (
                        <p className='error'>
                            Can't generate questions, please try different options
                        </p>
                    )}
                    <button type='submit' onClick={handleSubmit} className='submit-btn'>
                        start quiz
          </button>
                </form>
            </section>
        </main>
    )
}

export default InitialForm;
