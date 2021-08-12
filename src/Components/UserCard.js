import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../App.css';

const UserCard = ({user}) => {
    return (
        <div style={{display: "inline-flex", justifyContent: "space-evenly", flexWrap: "wrap", padding: "5px", margin: "5px"}} >
           <Card style={{ width: '16rem', height: '26rem', position:"relative", boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 7px" }} border="info">
            <Card.Img variant="top" className="imageUser" src="https://cdn4.vectorstock.com/i/thumb-large/09/78/user-neon-label-vector-28270978.jpg" />
            <Card.Body style={{padding: "20px", background: "#d7d4da"}}>
                <Card.Title style={{color: "#c79d2b", fontWeight: "bold" }}>{user.name} <br />
                {` ( ${user.username} )`} 
                </Card.Title>
                <Card.Text> <span className= "titles">Email:</span> <br/> {user.email} </Card.Text>
                <Button variant="primary" className= "btn-users"> 
                <Link to={`/users/${user.id}`} > 
                User Details </Link> </Button>
            </Card.Body>
            </Card> 
        </div>
    );
};

export default UserCard;