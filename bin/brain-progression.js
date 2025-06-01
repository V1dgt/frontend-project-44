#!/usr/bin/env node

import runGame from '../src/index.js';
import generateQuestionAndAnswer from '../src/games/game-progression.js';

const description = 'What number is missing in the progression?';

runGame(description, generateQuestionAndAnswer);
