// 1. Dependencies
import express, { json } from 'express';
import morgan from 'morgan';
// import { requestHandler } from './request-handler';
import userRouter from './users/users.router'

//import userRouter from '../users/userRouter';

// 2. init
const app = express();

// 3. setup global configurations for your app
app.set('x-powered-by', false)

// 4. middleware
app.use(morgan('dev'));
app.use(json())

// 5. routes
app.use('/users', userRouter)
// 6. error handlers

// 7. bootstrap
app.listen(3000, () => console.log('server is listening on port 3000'));