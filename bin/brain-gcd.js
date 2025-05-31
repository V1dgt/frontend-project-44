#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/games/game-gcd.js';

const description = 'Find the greatest common divisor of given numbers.';

runGame(description, generateQuestionAndAnswer);
