#!/usr/bin/env node

import runGame from '../src/index.js'
import generateQuestionAndAnswer from '../src/games/game-progression.js'

runGame(generateQuestionAndAnswer)
