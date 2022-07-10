import React,{useState,useMemo} from "react";
import "./../assets/css/admin.css";
import { Form, InputGroup, Button } from "react-bootstrap";
export const Login = () => {

    
    const initialState = useMemo(() => {
        return {
            "username" : "",
            "password" : "",
        }
    },[])

    const [validated,setValidated] = useState(false);
    const [data, setData]  = useState(initialState);

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
        console.log(data);
    }
    

    return (
    <main className="w-screen bg-gradient-login center">
        <div className="login-container">
            <Form className="bg-light p-5 rounded" 
                 validated={validated}
                 onSubmit={(e) => handleSubmit(e)}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>
                    <i className="fas fa-user-secret"></i>
                    </InputGroup.Text>
                    <Form.Control
                    name="username"
                    placeholder="Username"
                    aria-label="Username"
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
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    </main>
  );
};
