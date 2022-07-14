import React,{useState,useMemo} from "react";
import "./../assets/css/admin.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import {login,logout} from "./../services/Auth";
export const Login = () => {

    
    const initialState = useMemo(() => {
        return {
            "email" : "",
            "password" : "",
        }
    },[])

    const [validated,setValidated] = useState(false);
    const [data, setData]  = useState(initialState);
    const [loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        setValidated(true);
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name] : value,
        })    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const send = async () => {
            setLoading(true);
            await login(data);
            setLoading(false);
        }
        send();
    }
    

    return (
    <main className="h-screen bg-gradient-login center">
        <div className="login-container">
            <Form className="bg-light p-5 rounded" 
                 validated={validated}
                 onSubmit={(e) => handleSubmit(e)}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>
                    <i className="fas fa-user-secret"></i>
                    </InputGroup.Text>
                    <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    aria-label="Email"
                    required
                    onChange={(e) => handleInputChange(e)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>
                    <i className="fas fa-lock"></i>
                    </InputGroup.Text>
                    <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    required
                    onChange={(e) => handleInputChange(e)}
                    />
                </InputGroup>
                <Button type="submit" disabled={loading}>
                    {loading && 
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    }
                    <span className="ms-2">Submit</span>
                </Button>
            </Form>
        </div>
    </main>
  );
};
