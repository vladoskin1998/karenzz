import { query } from 'express-validator';
import mongoose from 'mongoose';

export const mongooseIdisValid = (id) => !!mongoose.Types.ObjectId.isValid(id)
export const idValidator = query('id').custom(id => mongooseIdisValid(id))
