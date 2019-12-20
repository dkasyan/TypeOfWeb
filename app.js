const express = require('express');
const app = express();

app.listen(port:3000, callback:() => {
    console.log('Serwer dziala')
});

let goodAnswers = 0;
let callToAFreindUsed = false;
let questionToTheCrowdUsed = false;
let halfOnHalfUsed = false;

const question = [
    {
        question: 'Jaki to kolor', 
        answers: ['Zielony', 'Czerwony', 'Niebieski', 'Rozowy'],
        correctAnswer: 2,
    },
    {
        question: 'Jaki to kolor', 
        answers: ['Zielony', 'Czerwony', 'Niebieski', 'Rozowy'],
        correctAnswer: 2,
    },
    {
        question: 'Jaki to kolor', 
        answers: ['Zielony', 'Czerwony', 'Niebieski', 'Rozowy'],
        correctAnswer: 2,
    },
];

