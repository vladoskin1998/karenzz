import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Balance = new Schema(
    {
        balance: { type: Number, required: true, default: 0 },
        currency: { type: String, default: 'USD' },
        history: {
            type: [
                {
                    date: { type: Date, required: true, default: new Date() },
                    transaction: Number
                }
            ], default: []
        }
    }, {
    versionKey: false
}
)



export default model('Balance', Balance)