import Balance from './balance.model.js'
import { NEW_USER, BALANCE_NEGATIVE } from '../config/config.js'
import ApiError from '../errors/api.erros.js'

class TransactionService {

    async getBalance({ id }) {
        const balance = await Balance.findById(id)

        if (!balance) {
            throw ApiError.badRequest('Balance not found!', 400)
        }

        return { money: balance?.balance }
    }

    async getHistory({ id }) {
        const balance = await Balance.findById(id)

        if (!balance) {
            throw ApiError.badRequest('History not found!', 400)
        }

        return balance?.history
    }


    async changeBalance({ id, money }) {

        const balance = await Balance.findById(id)

        if (balance && Number(balance.balance) + money < 0) {
            throw ApiError.badRequest('Balance is negative', 400)
        }

        if (!balance && money < 0) {
            throw ApiError.badRequest('New user can`t have negative balance', 400)
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