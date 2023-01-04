import Balance from "../models/BalanceModel.js";

export const getBalances = async (req, res) => {
    try {
        const balances = await Balance.find();
        res.json(balances);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getBalanceById = async (req, res) => {
    try {
        const balance = await Balance.findById(req.params.id);
        res.json(balance);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveBalance = async (req, res) => {
    const balance = new Balance(req.body);
    try {
        const insertedbalance = await balance.save();
        res.status(201).json(insertedbalance);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateBalance = async (req, res) => {
    try {
        const updatedbalance= await Balance.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedbalance);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteBalance = async (req, res) => {
    try {
        const deletedbalance = await Balance.deleteOne({_id:req.params.id});
        res.status(200).json(deletedbalance);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}