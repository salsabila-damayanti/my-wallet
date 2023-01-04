import React, { useState, useEffect } from 'react';
import axios from "axios";
import { jsPDF } from "jspdf";
import { Navbar } from '../../shared/Navbar';
import { Footer } from '../../shared/Footer';
import './Outcome.css';
import { BiTrash } from "react-icons/bi";
import moment from 'moment';

export const Outcome = () => {
    const [expenses, setExpense] = useState([]);
    const [balances, setBalances] = useState([]);

    useEffect(() =>{
        getExpenses();
    },[]);

    const getExpenses = async () => {
        const response = await axios.get("http://localhost:3100/expenses");
        setExpense(response.data);
    };

    const deleteExpense = async (id) => {
        try {
          await axios.delete(`http://localhost:3100/expenses/${id}`);
          getExpenses();
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() =>{
        getBalances();
    },[]);

    const getBalances = async () => {
        const response = await axios.get("http://localhost:3100/balances");
        setBalances(response.data);
    };

    const createPDF = async () => {
        const pdf = new jsPDF("landscape", "pt", "a3");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
          pdf.save("my_report_my_wallet.pdf");
        });
    };

    return(       
        <>
        <Navbar/>
        <div className="outcome-page rounded">
            <div className="container rounded" id="pdf">
            <h2 className="m-5 d-flex justify-content-center">My Report</h2>
            
                <div className="stat mb-3 rounded">
                    <p>Total Balance : Rp {balances.reduce(function(acc, val) { return acc + val.balancecost; }, 0)}</p>
                </div>
                <div className="stat mb-3 rounded">
                    <p>Total Expense : Rp {expenses.reduce(function(acc, val) { return acc + val.expensecost; }, 0)}</p>
                </div>

                <div className="col d-flex justify-content-end mb-3 me-5">
                    <button type="button" className="btn btn-primary rounded" onClick={createPDF}>Print</button>
                </div>
            
            <div className="container d-flex justify-content-center">
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remaining Balance</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                       <tr key={expense._id}>
                            <td>{index + 1}</td>
                            <td>{moment(expense.date).format("DD-MM-YYYY")}</td>
                            <td>{expense.category}</td>
                            <td>Rp {expense.expensecost}</td>
                            <td>Rp {(balances.reduce(function(acc, val) { return acc + val.balancecost; }, 0))-(expenses.reduce(function(acc, val) { return acc + val.expensecost; }, 0))}</td>
                            <td>
                                <button onClick={() => deleteExpense(expense._id)} type="button" className="btn btn-danger"><BiTrash/></button>
                            </td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        </div>

        <Footer/>
        </>
    );
};