import Profile from 'components/Profile/Profile';

import StatBoard from 'components/Statistics/StatBoard'
import FriendList from 'components/FriendList/FriendList';
import Transactions from 'components/TransactionHistory/Transaction';
import user from 'components/DataObjects/user'
import data from 'components/DataObjects/data.json';
import friends from 'components/DataObjects/friends';
import transactions from 'components/DataObjects/transactions';
import css from './App.module.css';

export default function App() {
  return (
       <div className={css.UserProfile}>
        
          <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
               />
             
        
      <StatBoard
        title="Upload stats"
      items={data}
              
     />
     <FriendList
     friends={friends}
     />

<Transactions
transactions={transactions}
/>
      
       </div>
  );
};



