#!/usr/bin/env node
import runGame from '../src/index.js'
import generateQuestionAndAnswer from '../src/games/game-prime.js'

runGame(generateQuestionAndAnswer)
