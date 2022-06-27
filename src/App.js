import { useState, useMemo } from 'react';
import './App.css';

function App() {
   const [users, setUsers] = useState([
      { id: 1, name: 'Kyle', age: 27 },
      { id: 2, name: 'John', age: 30 },
      { id: 3, name: 'Mary', age: 25 },
      { id: 4, name: 'Bob', age: 28 },
   ]);
   const [selectedUserID, setSelectedUserID] = useState(null);

   const selectUser = (userId) => {
      setSelectedUserID(userId);
   };

   const selectedUser = useMemo(
      () => users.find((user) => user.id === selectedUserID),
      [selectedUserID, users]
   );

   const incrementAge = (userId) => {
      const newUsers = users.map((user) => {
         if (user.id === userId) {
            return { ...user, age: user.age + 1 };
         } else {
            return user;
         }
      });
      setUsers(newUsers);
   };
   return (
      <div className="App">
         <h3>
            Selected USER:{' '}
            {selectedUserID === null
               ? 'none'
               : `${selectedUser.name} is ${selectedUser.age} years old`}
         </h3>

         {users.map((user) => {
            return (
               <div
                  key={user.id}
                  style={{
                     display: 'grid',
                     justifyItems: 'center',
                     gridTemplateColumns: '200px 100px 100px',
                     gap: '15rpx',
                     marginBottom: '10px',
                  }}
               >
                  <p style={{ backgroundColor: 'lightblue' }}>
                     {user.name}
                     {user.age} years old
                  </p>
                  <button onClick={() => incrementAge(user.id)}>
                     Increment
                  </button>
                  <button onClick={() => selectUser(user.id)}>
                     Select User
                  </button>
               </div>
            );
         })}
      </div>
   );
}

export default App;
