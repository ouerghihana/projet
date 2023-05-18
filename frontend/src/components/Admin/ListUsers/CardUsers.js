import React from 'react';
import './CardUser.css';

const CardUsers = ({ miniUser,getAllUser ,deleteUser}) => {
  console.log('user from the backend', miniUser);


  const handleDelete = () => {
    // Gérer la suppression de l'utilisateur 
    console.log('Deleting user:', miniUser);
  };

  return (
    <div>
    
      <div className="container_UserCard">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>User</span>
                      </th>
                      <th>
                        <span>Created</span>
                      </th>
                      <th className="text-center">
                        <span>Status</span>
                      </th>
                      <th>
                        <span>Email</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://t4.ftcdn.net/jpg/00/69/80/23/360_F_69802365_MCbh26YysjB1dIa0s4AbSW6vj8pH1TZE.jpg"
                          alt=""
                        />
                        <a href="#q" className="user-link">
                          {miniUser.UserName}
                        </a>
                        <span className="user-subhead">{miniUser.role}</span>
                      </td>
                      <td>2023</td>
                      <td className="text-center">
                        <span className="label label-default">Inactive</span>
                      </td>
                      <td>
                        <a href="#s">{miniUser.email}</a>
                      </td>
                      <td style={{ width: '20%' }}>
                        <a href="#s" className="table-link">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                        
                        <button
                          className="bn30"
                          onClick={async () => {
                            await deleteUser();
                            handleDelete(miniUser._id);
                            getAllUser();
                          }}
                        >
                          Delete
                        </button>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUsers;
