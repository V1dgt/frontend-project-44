#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/games/game-calc.js';

const description = 'What is the result of the expression?';

runGame(description, generateQuestionAndAnswer);
