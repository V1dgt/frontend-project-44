#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/games/game-even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(description, generateQuestionAndAnswer);
