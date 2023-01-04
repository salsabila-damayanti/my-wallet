import mongoose from "mongoose";

const Expense = mongoose.Schema({
    date:{
        type: Date,
        default: new Date(),
        require: true
    },
    category:{
        type: String,
        required: true
    },
    expensecost:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Expenses', Expense);