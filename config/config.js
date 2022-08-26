import 'dotenv/config';

export const PORT=process.env.PORT || 3000
export const LINK_MONGO=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@transaction.osqhvw2.mongodb.net/?retryWrites=true&w=majority`
export const BALANCE_NOT_FOUND='Balance not found!'
export const HISTORY_NOT_FOUND='History not found!'
export const BALANCE_NEGATIVE="Balance is negative!"
export const NEW_USER_NEGATIVE='New user can`t have negative balance'
export const SERVER_ERROR='Problem of server'
