import Profile from "./Profile/Profile";

import StatBoard from 'components/Statistics/StatBoard'
import Friends from 'components/FriendList/Friends';
import Transactions from 'components/TransactionHistory/Transaction';
import user from 'components/DataObjects/user'
import data from 'components/DataObjects/data';
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
     <Friends
     friends={friends}
     />

<Transactions
transactions={transactions}
/>
      
       </div>
  );
};



