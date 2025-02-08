import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';

export default function AddItem() {

  const [transactionDetails, setTransaction] = useState({ title: "", category: "", date: "", amount: "", description: "" });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!transactionDetails.title || !transactionDetails.category || !transactionDetails.date || !transactionDetails.amount || !transactionDetails.description ) {
      let emptyField = null;
      Object.keys(transactionDetails).forEach(key => {
        //console.log(key, obj[key]);
        if(!transactionDetails[key]){
          emptyField = key;
        }
      });

      setErrorMessage(`Please fill ${emptyField} field`);
      return;
    } 
    else {
      
      setErrorMessage('');
    }

    const response = await fetch(`http://3.85.219.160:5000/transaction`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: transactionDetails.title,
          category: transactionDetails.category,
          date: transactionDetails.date,
          amount: transactionDetails.amount,
          description: transactionDetails.description
        })
      }
    );
    const responseJSON = await response.status;
    if (responseJSON===200) {
      alert("Transaction Created");
    }
    else{
      alert("Transaction not creted");
    }
    event.target.reset();

  }
  const onChange = (event) => {
    setTransaction({ ...transactionDetails, [event.target.name]: event.target.value });
  }
  return (
    <div>
      <div><Navbar /></div>
      <div className="mt-5 container">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="Title" className="form-label">Title</label>
            <input type="text" className="form-control" name='title' value={transactionDetails.title} onChange={onChange} />
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <select className='m-2 h-100 rounded' name='category' value={transactionDetails.category} onChange={onChange}>
              <option value="Bills">Bills</option>
              <option value="Grocery">Grocery</option>
              <option value="Medicine">Medicine</option>
              <option value="Cloth">Cloth</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" className="form-control" name='date' value={transactionDetails.date} onChange={onChange} />

          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input type="number" className="form-control" name='amount' value={transactionDetails.amount} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text-area" className="form-control" name='description' value={transactionDetails.description} onChange={onChange} />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit" className="m-3 btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
