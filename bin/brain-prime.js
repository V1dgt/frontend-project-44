#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/games/game-prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(description, generateQuestionAndAnswer);
