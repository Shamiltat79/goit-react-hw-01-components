import PropTypes from 'prop-types';


function Friends ({friends}) {
    return (
    <ul  className="friend-list">
     {friends.map(friend => ( 
     <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
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

