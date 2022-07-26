// Quiz basiert auf dem Quiz von https://github.com/davidrazmadzeExtra/Multiple_Choice_Quiz_ReactJS.
import React, { useState } from "react";
import '../pages/quiz.css'

function Quiz() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizNumber, setQuizNumber] = useState(0);

    const questions = [
        {
            text: "Bitte wähle eine Lektion",
            options: [
                { id: 0, text: "Lektion 1" },
                { id: 1, text: "Lektion 2" },
                { id: 2, text: "Lektion 3" },
            ],
        },
    ];
    const questions1 = [
        {
            text: "Was sind die 4 Vs von Big Data?",
            options: [
                { id: 0, text: "Variety, Various, Virtual, Volume", isCorrect: false },
                { id: 1, text: "Variability, Velocity, Volume, Violet", isCorrect: false },
                { id: 2, text: "Volume, Vomit, Venom, Velocity ", isCorrect: false },
                { id: 3, text: "Volume, Velocity, Variety, Variability", isCorrect: true },
            ],
        },
        {
            text: "Was ist Big Data?",
            options: [
                { id: 0, text: "Big Data umfasst Technologien zur Verarbeitung und Auswertung von großen Datenmengen", isCorrect: true },
                { id: 1, text: "Big Data steht für dicke Daten", isCorrect: false },
                { id: 2, text: "Big Data ist eine neue Plattform von Facebook", isCorrect: false },
                { id: 3, text: "Big Data steht für gut gefüllte Konten", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Volume im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Volume steht für die große Datenmenge", isCorrect: true },
                { id: 1, text: "Volume ist die Formel, mit der die Größe berechnet wird", isCorrect: false },
                { id: 2, text: "Volume steht für die Geschwindigkeit mit denen die Daten analysiert werden", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Velocity im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Velocity ist ein Maß für die Zähflüssigkeit der Daten", isCorrect: false },
                { id: 1, text: "Velocity steht für die Geschwindigkeit mit denen die Daten verarbeitet und analysiert werden", isCorrect: true },
                { id: 2, text: "Velocity steht für die Inkonsistenz der Daten", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Variety im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Variety steht für die Integrierung aller Länder bei Big Data", isCorrect: false },
                { id: 1, text: "Variety steht für die unterschiedlichen Personen, die bei Big Data mitwirken", isCorrect: false },
                { id: 2, text: "Variety steht für die Heterogenität der Daten", isCorrect: true },
            ],
        },
        {
            text: "Was bedeutet Variability im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Variability steht für das Streuungsmaß der Daten", isCorrect: false },
                { id: 1, text: "Variability beschreibt die durchschnittliche Größe der Daten", isCorrect: false },
                { id: 2, text: "Variability steht für die Inkonsistenz der Daten", isCorrect: true },
            ],
        },
    ];
    const questions2 = [
        {
            text: "Das ist ein Test",
            options: [
                { id: 0, text: "Variety, Various, Virtual, Volume", isCorrect: false },
                { id: 1, text: "Variability, Velocity, Volume, Violet", isCorrect: false },
                { id: 2, text: "Volume, Vomit, Venom, Velocity ", isCorrect: false },
                { id: 3, text: "Volume, Velocity, Variety, Variability", isCorrect: true },
            ],
        },
        {
            text: "Was ist Big Data?",
            options: [
                { id: 0, text: "Big Data umfasst Technologien zur Verarbeitung und Auswertung von großen Datenmengen", isCorrect: true },
                { id: 1, text: "Big Data steht für dicke Daten", isCorrect: false },
                { id: 2, text: "Big Data ist eine neue Plattform von Facebook", isCorrect: false },
                { id: 3, text: "Big Data steht für gut gefüllte Konten", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Volume im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Volume steht für die große Datenmenge", isCorrect: true },
                { id: 1, text: "Volume ist die Formel, mit der die Größe berechnet wird", isCorrect: false },
                { id: 2, text: "Volume steht für die Geschwindigkeit mit denen die Daten analysiert werden", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Velocity im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Velocity ist ein Maß für die Zähflüssigkeit der Daten", isCorrect: false },
                { id: 1, text: "Velocity steht für die Geschwindigkeit mit denen die Daten verarbeitet und analysiert werden", isCorrect: true },
                { id: 2, text: "Velocity steht für die Inkonsistenz der Daten", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Variety im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Variety steht für die Integrierung aller Länder bei Big Data", isCorrect: false },
                { id: 1, text: "Variety steht für die unterschiedlichen Personen, die bei Big Data mitwirken", isCorrect: false },
                { id: 2, text: "Variety steht für die Heterogenität der Daten", isCorrect: true },
            ],
        },
        {
            text: "Was bedeutet Variability im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Variability steht für das Streuungsmaß der Daten", isCorrect: false },
                { id: 1, text: "Variability beschreibt die durchschnittliche Größe der Daten", isCorrect: false },
                { id: 2, text: "Variability steht für die Inkonsistenz der Daten", isCorrect: true },
            ],
        },
    ];
    const questions3 = [
        {
            text: "Das ist ein Test",
            options: [
                { id: 0, text: "Variety, Various, Virtual, Volume", isCorrect: false },
                { id: 1, text: "Variability, Velocity, Volume, Violet", isCorrect: false },
                { id: 2, text: "Volume, Vomit, Venom, Velocity ", isCorrect: false },
                { id: 3, text: "Volume, Velocity, Variety, Variability", isCorrect: true },
            ],
        },
        {
            text: "Was ist Big Data?",
            options: [
                { id: 0, text: "Big Data umfasst Technologien zur Verarbeitung und Auswertung von großen Datenmengen", isCorrect: true },
                { id: 1, text: "Big Data steht für dicke Daten", isCorrect: false },
                { id: 2, text: "Big Data ist eine neue Plattform von Facebook", isCorrect: false },
                { id: 3, text: "Big Data steht für gut gefüllte Konten", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Volume im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Volume steht für die große Datenmenge", isCorrect: true },
                { id: 1, text: "Volume ist die Formel, mit der die Größe berechnet wird", isCorrect: false },
                { id: 2, text: "Volume steht für die Geschwindigkeit mit denen die Daten analysiert werden", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Velocity im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Velocity ist ein Maß für die Zähflüssigkeit der Daten", isCorrect: false },
                { id: 1, text: "Velocity steht für die Geschwindigkeit mit denen die Daten verarbeitet und analysiert werden", isCorrect: true },
                { id: 2, text: "Velocity steht für die Inkonsistenz der Daten", isCorrect: false },
            ],
        },
        {
            text: "Was bedeutet Variety im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Variety steht für die Integrierung aller Länder bei Big Data", isCorrect: false },
                { id: 1, text: "Variety steht für die unterschiedlichen Personen, die bei Big Data mitwirken", isCorrect: false },
                { id: 2, text: "Variety steht für die Heterogenität der Daten", isCorrect: true },
            ],
        },
        {
            text: "Was bedeutet Variability im Zusammenhang mit Big Data?",
            options: [
                { id: 0, text: "Variability steht für das Streuungsmaß der Daten", isCorrect: false },
                { id: 1, text: "Variability beschreibt die durchschnittliche Größe der Daten", isCorrect: false },
                { id: 2, text: "Variability steht für die Inkonsistenz der Daten", isCorrect: true },
            ],
        },
    ];

    // geht momentan nur für die liste questions1. Entweder ich muss mehrere methoden machen oder die zahl flexible hinzufügen.
    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions1.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const selectQuiz = (id) => {
        setQuizNumber(id);
        console.log("Ausgewählt", { quizNumber });
    };

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    const backToMenu = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
        setQuizNumber(0);
    };


    switch (quizNumber) {
        case 0:
            return (
                < div className="App">
                    <h1>Hier findest du alle Quizze zu den Lektionen</h1>
                    <div className="question-card">
                        <h3 className="question-text">{questions[currentQuestion].text}</h3>
                        <ul>
                            {questions[currentQuestion].options.map((option) => {
                                return (
                                    <li
                                        key={option.id}
                                        onClick={() => selectQuiz(option.id + 1)}
                                    >
                                        {option.text}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            );
            break;
        case 1:
            return (
                < div className="App">
                    <h1>Big Data Quiz</h1>
                    <h2>Punkte: {score}</h2>
                    {showResults ? (
                        <div className="final-results">
                            <h1>Ergebnisse</h1>
                            <h2>
                                {score} von {questions1.length} richtig - (
                                {Math.round((score / questions1.length) * 100)}%)
                            </h2>
                            <button onClick={() => restartGame()}>Quiz neustarten</button>
                            <button onClick={() => backToMenu()}>Zum Menü</button>
                        </div>
                    ) : (
                        <div className="question-card">
                            <h2>
                                Frage: {currentQuestion + 1} von {questions1.length}
                            </h2>
                            <h3 className="question-text">{questions1[currentQuestion].text}</h3>
                            <ul>
                                {questions1[currentQuestion].options.map((option) => {
                                    return (
                                        <li
                                            key={option.id}
                                            onClick={() => optionClicked(option.isCorrect)}
                                        >
                                            {option.text}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            );
            break;
        case 2:
            return (
                < div className="App">
                    <h1>Big Data Quiz</h1>
                    <h2>Punkte: {score}</h2>
                    {showResults ? (
                        <div className="final-results">
                            <h1>Ergebnisse</h1>
                            <h2>
                                {score} von {questions2.length} richtig - (
                                {Math.round((score / questions2.length) * 100)}%)
                            </h2>
                            <button onClick={() => restartGame()}>Quiz neustarten</button>
                            <button onClick={() => backToMenu()}>Zum Menü</button>
                        </div>
                    ) : (
                        <div className="question-card">
                            <h2>
                                Frage: {currentQuestion + 1} von {questions2.length}
                            </h2>
                            <h3 className="question-text">{questions2[currentQuestion].text}</h3>
                            <ul>
                                {questions2[currentQuestion].options.map((option) => {
                                    return (
                                        <li
                                            key={option.id}
                                            onClick={() => optionClicked(option.isCorrect)}
                                        >
                                            {option.text}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            );
            break;
        case 3:
            return (
                < div className="App">
                    <h1>Big Data Quiz</h1>
                    <h2>Punkte: {score}</h2>
                    {showResults ? (
                        <div className="final-results">
                            <h1>Ergebnisse</h1>
                            <h2>
                                {score} von {questions3.length} richtig - (
                                {Math.round((score / questions3.length) * 100)}%)
                            </h2>
                            <button onClick={() => restartGame()}>Quiz neustarten</button>
                            <button onClick={() => backToMenu()}>Zum Menü</button>
                        </div>
                    ) : (
                        <div className="question-card">
                            <h2>
                                Frage: {currentQuestion + 1} von {questions3.length}
                            </h2>
                            <h3 className="question-text">{questions3[currentQuestion].text}</h3>
                            <ul>
                                {questions3[currentQuestion].options.map((option) => {
                                    return (
                                        <li
                                            key={option.id}
                                            onClick={() => optionClicked(option.isCorrect)}
                                        >
                                            {option.text}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            );
            break;
        default:
            break;
    }
}

export default Quiz;