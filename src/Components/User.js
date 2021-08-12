import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const User = (props) => {
    const [user, setUser] = useState({});
    const [loadUser, setLoadUser] = useState(true);

    const {id} = props.match.params

    const getUser = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            setUser(res.data) 
            setLoadUser(false)   
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getUser()
        // eslint-disable-next-line
    }, [])

    return (
        <div style={{background:"#ddd"}}>
            <Link to="/" > <span style={{fontSize: "12px"}}> Home Page</span></Link> <br /><br />
           <h2 className="title"> User Details : </h2>
           {
               loadUser ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
               ):(
                <Card style={{ width: '30rem', display: "block", margin: "auto" }}>
                    <Card.Img variant="top" height={300} src="https://ak.picdn.net/shutterstock/videos/1025559263/thumb/8.jpg?ip=x480" />
                    <Card.Body>
                        <Card.Title> <span className= "titles"> Name :</span> {user.name} </Card.Title>
                        <Card.Text>  <span className= "titles">UserName :</span> {user.username}</Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item> <span className= "titles"> Email :</span> {user.email} </ListGroup.Item>
                            <ListGroup.Item> <span className= "titles"> Address : </span> {`${user.address.street} ${user.address.suite} ${user.address.city}`} </ListGroup.Item>
                            <ListGroup.Item><span className= "titles"> Phone :</span> {user.phone} </ListGroup.Item>
                            <ListGroup.Item> <span className= "titles"> WebSite : </span> {user.website} </ListGroup.Item>
                            <ListGroup.Item> <span className= "titles"> Company : </span> {user.company.name} </ListGroup.Item>
                        </ListGroup>
                        
                    </Card.Body>
                </Card>
               )
           }
        </div>
    );
};

export default User;