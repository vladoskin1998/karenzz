import { Router } from 'express';
import { idValidator } from '../validator/id.validator.js';
import TransactionController from './transaction.controller.js';
import { isValid } from '../middleware/validResult.middleware.js';
import { isChangeBalance } from '../validator/changeBalance.validator.js';
import { isRemittance } from '../validator/remittance.validator.js';

const TransactionRouter = new Router();

TransactionRouter.get('/get-balance',
    idValidator,
    isValid,
    TransactionController.getBalance)

TransactionRouter.get('/get-history',
    idValidator,
    isValid,
    TransactionController.getHistory)

TransactionRouter.post('/change-balance',
    isChangeBalance,
    isValid,
    TransactionController.changeBalance)

TransactionRouter.post('/remittance',
    isRemittance,
    isValid,
    TransactionController.remittance)

export default TransactionRouter