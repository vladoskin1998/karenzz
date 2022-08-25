// const { checkSchema, validationResult } = require('express-validator');
import TransactionService from './transaction.service.js';

class TransactionController{

    async getBalance(req, res){
        console.log(req);
        const balance = await TransactionService.getBalance(req.query)
        return res.json(balance)
    }

    async getHistory(req, res){
        const history = await TransactionService.getHistory(req.query)
        return res.json(history)
    }

    async changeBalance(req,res){
        const transaction = await TransactionService.changeBalance(req.body)
        return res.json(transaction)
    }


    async remittance(req,res){
        const transaction = await TransactionService.remittance(req.body)
        return transaction
    }


}

export default new TransactionController()