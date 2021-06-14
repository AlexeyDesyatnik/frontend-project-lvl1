#!/usr/bin/env node

import { runGame } from '../src/cli.js';
import { taskDescription, makeQuestion } from '../src/gameCalc.js';

runGame(taskDescription, makeQuestion);
