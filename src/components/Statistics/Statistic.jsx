import PropTypes from 'prop-types';
import css from './Statistics.module.css'


function Statistic( { id, label, percentage } ) {
    console.log(label);
    // console.log(css[label]);
    return (
 



     <li className={`${css.id} ${css[label]}`} key={id}>
            <span className={css.label}>{label}</span>
           <span className={css.percentage}>{percentage} %</span>
      </li>
     
    
    //   {`${css.id} ${css[label]}`} 
   
   
    
      ); 

};

Statistic.propTypes = {
   
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,


   

}

export default Statistic;
