import React from 'react';
import { Spinner } from 'react-bootstrap';
import UserCard from './UserCard'
const UserList = ({users, loadUsers }) => {
    return (
        <div>
            <h2 className="title"> List of Users : </h2>
            {
                loadUsers? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    users.map((el) => <UserCard user={el} key={el.id} /> )
                )
            }
        </div>
    );
};

export default UserList;
