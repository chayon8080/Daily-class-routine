import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='ques-container'>
            <div className='ques-ans'>
                <h1>Question 01 : How does React work?</h1>
                <p>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces.It allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>
            <div className='ques-ans'>
                <h1>Question 02 : What is the differences butween Props and State?</h1>
                <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='ques-ans'>
                <h1>Question 03 : What is useEffect do without load API through fetch?</h1>
                <p>Ans: By using useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed and call it later after performing the DOM updates.Also Placing useEffect inside the component lets us access the count state variable or any props right from the effect </p>
            </div>
        </div>
    );
};

export default Question;