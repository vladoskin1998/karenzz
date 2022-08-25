import { Router } from 'express';
import TransactionRouter from './transaction/transaction.router.js';

const router = new Router();

router.use('/transaction', TransactionRouter)

export default router