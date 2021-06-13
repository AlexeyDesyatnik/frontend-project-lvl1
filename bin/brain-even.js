#!/usr/bin/env node

import { greetUser, gameFinale } from '../src/cli.js';
import gameEven from '../src/gameEven.js';

const name = greetUser();
const gameResult = gameEven();
gameFinale(name, gameResult);
