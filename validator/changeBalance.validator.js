import { mongooseIdisValid } from './id.validator.js';
import { body } from 'express-validator';

export const isChangeBalance = [
    body('id').custom(id => mongooseIdisValid(id)),
    body('money').isInt()
]