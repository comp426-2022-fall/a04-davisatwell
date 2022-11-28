#!/usr/bin/env node

import {roll} from "./lib/roll.js";
import express from 'express';
import minimist from 'minimist';

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;


app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
})

app.get('/app/roll/', (req, res) => {
    let sides = 6;
    let dice = 2;
    let rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
})

app.post('/app/roll/', (req, res) => {
    let sides = 6 || parseInt(req.body.sides);
    let dice = 2 || parseInt(req.body.dice);
    let rolls = 1 || parseInt(req.body.rolls);
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/', (req, res) => {
    let sides = parseInt(req.params.sides);
    let dice = 2;
    let rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = 1;
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = parseInt(req.params.rolls);
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('*', (req, res) => {
    console.error('error encountered');
    res.status(404).send('404 NOT FOUND');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}\n`)
});
