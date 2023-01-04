import Expense from "../models/ExpenseModel.js";

export const getExpenses = async (req, res) => {
    try {
        const Expenses = await Expense.find();
        res.json(Expenses);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        res.json(expense);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveExpense = async (req, res) => {
    const expense = new Expense(req.body);
    try {
        const insertedexpense = await expense.save();
        res.status(201).json(insertedexpense);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateExpense = async (req, res) => {
    try {
        const updatedexpense= await Expense.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedexpense);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteExpense = async (req, res) => {
    try {
        const deletedexpense = await Expense.deleteOne({_id:req.params.id});
        res.status(200).json(deletedexpense);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}