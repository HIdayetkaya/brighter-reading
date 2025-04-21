import React from "react";
import './Home.css'

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-header">
                <div className="home-text">Brighter Reading</div>
                <div className="home-underline"></div>           
            </div> 
            <div className="resource-header">Resources</div>
            <div className="home-underline" style={{padding: '30px'}}></div>           
            <div className="resource">
                <div className="turkish">For turkish</div>
                <div className="english">For english</div>
            </div>
            <div className="mainexam">
            <div className="exam-container">
                    <div className="exam1">Exam 1</div>
                    <div className="exam-button">Take Exam</div>
            </div>
            <div className="exam-container">
                    <div className="exam2">Exam 2</div>
                    <div className="exam-button">Take Exam</div>
            </div>
            <div className="exam-container">
                    <div className="exam3">Exam 3</div>
                    <div className="exam-button">Take Exam</div>
            </div>
            </div>
        </div>

        
    )
}

export default Home