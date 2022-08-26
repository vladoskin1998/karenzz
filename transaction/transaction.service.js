import Balance from './balance.model.js'
import { BALANCE_NOT_FOUND, HISTORY_NOT_FOUND, BALANCE_NEGATIVE, NEW_USER_NEGATIVE } from '../config/config.js'
import ApiError from '../errors/api.erros.js'

class TransactionService {

    async getBalance({ id }) {
        const balance = await Balance.findById(id)

        if (!balance) {
            throw ApiError.badRequest(BALANCE_NOT_FOUND, 400)
        }

        return { money: balance?.balance }
    }

    async getHistory({ id }) {
        const balance = await Balance.findById(id)

        if (!balance) {
            throw ApiError.badRequest(HISTORY_NOT_FOUND, 400)
        }

        return balance?.history
    }


    async changeBalance({ id, money }) {

        const balance = await Balance.findById(id)

        if (balance && Number(balance.balance) + money < 0) {
            throw ApiError.badRequest(BALANCE_NEGATIVE, 400)
        }

        if (!balance && money < 0) {
            throw ApiError.badRequest(NEW_USER_NEGATIVE, 400)
        }

        const updateBalance = await Balance.findOneAndUpdate(
            { _id: id },
            { $inc: { balance: money }, $push: { history: { transaction: money } } },
            { new: true, upsert: true }
        )

        return updateBalance
    }


    async remittance({ idFrom, idTo, money }) {

        const balanceFrom = await this.changeBalance({ id: idFrom, money: money * -1 })

        const balanceTo = await this.changeBalance({ id: idTo, money })

        return { balanceFrom, balanceTo }

    }
}

export default new TransactionService()