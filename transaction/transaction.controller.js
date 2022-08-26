import TransactionService from './transaction.service.js';

class TransactionController {

    async getBalance(req, res, next) {
        try {
            const balance = await TransactionService.getBalance(req.query)
            return res.json(balance)
        } catch (error) {
            next(error)
        }
    }

    async getHistory(req, res, next) {
        try {
            const history = await TransactionService.getHistory(req.query)
            return res.json(history)
        } catch (error) {
            next(error)
        }
    }

    async changeBalance(req, res, next) {
        try {
            const transaction = await TransactionService.changeBalance(req.body)
            return res.json(transaction)
        } catch (error) {
            next(error)
        }
    }


    async remittance(req, res, next) {
        try {
            const transaction = await TransactionService.remittance(req.body)
            return res.json(transaction)
        } catch (error) {
            next(error)
        }
    }


}

export default new TransactionController()