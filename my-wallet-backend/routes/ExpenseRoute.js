import express from "express";
import { 
    getExpenses, 
    getExpenseById,
    saveExpense,
    updateExpense,
    deleteExpense
} from "../controllers/ExpenseController.js";

const router = express.Router();

router.get('/expenses', getExpenses);
router.get('/expenses/:id', getExpenseById);
router.post('/expenses', saveExpense);
router.patch('/expenses/:id', updateExpense);
router.delete('/expenses/:id', deleteExpense);

export default router;