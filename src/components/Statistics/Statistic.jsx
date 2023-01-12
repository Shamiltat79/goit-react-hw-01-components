import PropTypes from 'prop-types';
import css from './Statistics.module.css';





function Statistic( { id, label, percentage } ) {
    console.log(label);
    console.log(css[label.slice(1)]);
    return (
 



     <li className={`${css.id} ${css[label.slice(1)]}`}  key={id}>
            <span className={css.labelText}>{label}</span>
           <span className={css.percentage}>{percentage} %</span>
      </li>
     
    
      
   
   
    
      ); 

};

Statistic.propTypes = {
   
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,


   

}

export default Statistic;
