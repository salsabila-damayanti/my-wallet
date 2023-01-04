import express from "express";
import { 
    getBalances, 
    getBalanceById,
    saveBalance,
    updateBalance,
    deleteBalance
} from "../controllers/BalanceController.js";

const router = express.Router();

router.get('/balances', getBalances);
router.get('/balances/:id', getBalanceById);
router.post('/balances', saveBalance);
router.patch('/balances/:id', updateBalance);
router.delete('/balances/:id', deleteBalance);

export default router;