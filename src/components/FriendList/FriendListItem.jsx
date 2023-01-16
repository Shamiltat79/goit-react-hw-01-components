import PropTypes from 'prop-types';
import css from './Friends.module.css'
import classNames from 'classnames';


function FriendListItem ({avatar, name, isOnline, id }) {
  console.log({isOnline});
  return (
    
    
    
     <li className={css.item}key={id}>
      
      <p className={classNames( isOnline ? css.isOnline : css.isOfline)}></p>
      
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>) }  
   



FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
export default FriendListItem;

