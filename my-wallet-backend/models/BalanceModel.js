import mongoose from "mongoose";

const Balance = mongoose.Schema({
    balancecost:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Balances', Balance);