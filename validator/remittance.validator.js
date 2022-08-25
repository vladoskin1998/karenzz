import { mongooseIdisValid } from './id.validator.js';
import { body } from 'express-validator';

export const isRemittance = [
    body('idFrom').custom(id => mongooseIdisValid(id)),
    body('idTo').custom(id => mongooseIdisValid(id)),
    body('money').isInt()
]