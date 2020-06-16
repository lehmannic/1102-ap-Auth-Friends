import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then((res) => {
        // console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log('error fetching friends list', err.response);
      });
  }, []);

  const addFriend = (e) => {
    e.preventDefault();
    console.log(newFriend);
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='container'>
      <form onSubmit={addFriend}>
        <h1>Add User</h1>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Age'
          name='age'
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
      <div className='container friends-list'>
        <h1>Friends</h1>
        {friends.length !== 0 ? (
          <div>
            {friends.map((f) => (
              <div key={f.id} className='container'>
                <h3>Name: {f.name}</h3>
                <p>Email: {f.email}</p>
                <p>Age: {f.age}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FriendsList;
