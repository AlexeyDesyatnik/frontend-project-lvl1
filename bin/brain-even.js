#!/usr/bin/env node

import { runGame } from '../src/cli.js';
import { taskDescription, makeQuestion } from '../src/gameEven.js';

runGame(taskDescription, makeQuestion);
