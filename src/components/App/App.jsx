// import Profile from '../Profile/Profile';
// import FriendList from '../FriendList/FriendList';
// import TransactionHistory from '../TransactionHistory/TransactionHistory';

// import transactions from '../../transactions.json';
// import userData from '../../userData.json';
// import friends from '../../friends.json';

// import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}