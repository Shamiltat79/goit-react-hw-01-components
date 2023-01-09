import PropTypes from 'prop-types';
import css from './Friends.module.css'


function Friends ({friends}) {
    return (
    <ul  className={css.friendList}>
     {friends.map(friend => ( 
     <li className={css.item}key={friend.id}>
      <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p className="name">{friend.name}</p>
    </li>)) }  
   
</ul>)
}

Friends.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
export default Friends;

