import React, {useEffect, useState} from 'react'

export default function ChartGrph() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://3.85.219.160:5000/allTransaction')
        .then(response => response.json())
        .then(response => setData(response))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
