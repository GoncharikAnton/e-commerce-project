import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useContext, useState} from "react";
import {userLogin} from "../../../api/usersData";
import {DataContext} from "../../../context/context";

export const LoginPage = ({isLoggedIn, setIsLoggedIn}) => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(DataContext)
    const mailHandler = (e) => {
        setMail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        userLogin(mail, password).then(res => {
            context.user = res.data.data.result[0]
            setIsLoggedIn(!isLoggedIn);
        });
    }

    return(
        <Container>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={mailHandler}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onClick={passwordHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={submitHandler}>
            Submit
            </Button>
            </Form>
        </Container>
    )


}