import 'dotenv/config';

export const PORT=process.env.PORT || 3000
export const LINK_MONGO=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@transaction.osqhvw2.mongodb.net/?retryWrites=true&w=majority`
export const NEW_USER="NEW USER"
export const BALANCE_NEGATIVE="Balance is negative"
