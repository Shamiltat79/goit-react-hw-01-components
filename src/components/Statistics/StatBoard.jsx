import PropTypes from 'prop-types';
import Statistic from './Statistic';
import css from './Statistics.module.css'

function StatBoard({title, items}){
    return(
        <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
{
items.map(({id, label, percentage}) => (
   
    <Statistic
    id={id}
    label={label}
    percentage={percentage}
    />
    
    ))}
     
     </ul>
   </section>
    )

}
StatBoard.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.exact(
        { id: PropTypes.string.isRequired, 
        label: PropTypes.string.isRequired, 
        percentage: PropTypes.number.isRequired,
     }
        )
    ),
}
export default StatBoard