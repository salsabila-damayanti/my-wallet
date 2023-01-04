import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../shared/Navbar'
import { Footer } from '../../shared/Footer'
import './Home.css'
import { FaPlus } from "react-icons/fa";

export const Home = () => {
	const [date, setDate] = useState("");
	const [category, setCategory] = useState("Meals");
	const [expensecost, setExpenseCost] = useState("");
	const [balancecost, setBalanceCost] = useState("");
	const navigate = useNavigate();

	const saveExpense = async(e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:3100/expenses',{
				date,
				category,
				expensecost
			});
			navigate("/Outcome");
		} catch (error) {
			console.log(error);
		}
	}

	const saveBalance = async(e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:3100/balances',{
				balancecost
			});
			navigate("/Outcome");
		} catch (error) {
			console.log(error);
		}
	}

    return(
        <>
        <Navbar/>

        <div className="page">
		<div className="alerta fw-bold m-4 p-3 rounded" role="alert">
			Hello 👋🏻, welcome to My Wallet !
		</div>
		
		<button type="button" className="btn btn-primary mb-4" id="btnbalance" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><FaPlus/> Add Balance</button>
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
				<div className="modal-header">
					<h1 className="modal-title fs-5" id="exampleModalLabel">Add Balance</h1>
				</div>
				<div className="modal-body">
					<form>
					<div className="mb-3">
						<label htmlFor="recipient-name" className="col-form-label">Cost</label>
						<input 
							type="number" 
							className="form-control" 
							id="balancecost"
							value={balancecost}
							onChange={(e) => setBalanceCost(e.target.value)}
						/>
					</div>
					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					<button type="submit" className="btn btn-primary" onClick={(e)=> {saveBalance(e)}}>Add</button>
				</div>
				</div>
			</div>
			</div>

		<button type="button" className="btn btn-primary mb-4" id="btnexpense" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo"><FaPlus/> Add Expense</button>
			<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
				<div className="modal-header">
					<h1 className="modal-title fs-5" id="exampleModalLabel2">Add Expense</h1>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
					<form onSubmit={saveExpense}>
					<div className="mb-3">
						<label className="col-form-label">Date</label>
						<input 
							type="date" 
							className="form-control" 
							id="expensedate" 
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="recipient-name" className="col-form-label">Category</label>
						<select 
							className="form-select" 
							id="inputGroupSelect02"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<option value="Meals">Meals</option>
							<option value="Social Life">Social Life</option>
							<option value="Transportation">Transportation</option>
							<option value="Self-Reward">Self-Reward</option>
							<option value="Household">Household</option>
							<option value="Health">Health</option>
							<option value="Education">Education</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="col-form-label">Cost</label>
						<input 
							type="number" 
							className="form-control" 
							id="expensecost"
							value={expensecost}
							onChange={(e) => setExpenseCost(e.target.value)}
						/>
					</div>
					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					<button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=> {saveExpense(e)}}>Add</button>
				</div>
				</div>
			</div>
			</div>

        </div>
		<Footer/>
        </>
    );
};