import { readFile } from 'fs';
import shared from './shared';
// import moment from moment;

readFile('./file.txt', (err, data) => {
    console.log(data.toString())
})

shared();