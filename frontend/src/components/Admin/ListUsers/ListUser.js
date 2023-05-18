import React, { useEffect } from 'react';
import CardUsers from './CardUsers';
import { fetchAllUsers,deleteUser } from '../../../Api/UserListApi';
import { useDispatch, useSelector } from 'react-redux';
import { setListUser } from '../../../store/ListUserSlice';

const ListUser = () => {
 
  const Users = useSelector((state) => state.UserElement);
console.log ('UserElement',Users)

const dispatch = useDispatch();
  const getAllUser = async () => {
    try {
      const data = await fetchAllUsers();
      console.log("donnees Users:", data.Users)
      dispatch(setListUser(data.Users));
    } catch (err) {
      console.err('Error fetching users:', err);
    }
  };


  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      getAllUser();
    } catch (err) {
      console.err('Error deleting user:', err);
    }
  };

 

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      {Users.map((e) => ( <CardUsers  miniUser={e}  getAllUser={getAllUser}     deleteUser={deleteUser}  />
      ))}
    </div>
  );
};

export default ListUser;
