import React from 'react';
import "assets/css/FAQ.css"
import website from "assets/jsons/website.json"

export default function FAQ() {
    const faq = website.faq;
    console.log(faq)
    const questions = faq.questions;

    return (
        <div className="faq-container">
            <div className="faq-header-holder">
                <h1 className="faq-header">FAQs</h1>
            </div>
            {questions.map((question) => {


                if (typeof question.answer === "string") {
                    return (
                        <div className="faq-question">
                            <h2>{question.question}</h2>
                            <p>{question.answer}</p>
                        </div>
                    )
                } else if (Array.isArray(question.answer)) {
                    console.log(question)
                    var output = ''
                    return (<div className='faq-question'>
                        <h2>{question.question}</h2>
                        {question.answer.map((q) => {
                            console.log(q)
                            return (
                            <p>{q}</p>
                            )
                        })
                        }


                    </div>)
                }
                else {
                    return (
                        <div className="faq-question">
                            <h2>{question.question}</h2>
                            <p>{question.answer}</p>
                        </div>
                    )
                }

            })}
            {/* <p className='addendum'>***Only avaliable with upgraded Packages</p> */}
        </div>
    );
}