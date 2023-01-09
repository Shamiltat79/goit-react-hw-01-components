import PropTypes from 'prop-types';
import css from './Transaction.module.css'

function Transactions ({transactions}) {
    return(
<table className={css.transactionHistory}>         
        <thead>
        <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>      
{transactions.map(transaction => (
    <tbody>
    <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
    
  </tbody>

        ))}
  </table> 
    )
    
};
Transactions.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,

}
export default Transactions;