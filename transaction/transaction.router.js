import { Router } from 'express';
import TransactionController from './transaction.controller.js';

const TransactionRouter = new Router();

TransactionRouter.get('/get-balance', TransactionController.getBalance)

TransactionRouter.get('/get-history', TransactionController.getHistory)

TransactionRouter.post('/change-balance', TransactionController.changeBalance)

TransactionRouter.post('/remittance', TransactionController.remittance)

export default TransactionRouter