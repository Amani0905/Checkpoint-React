import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <div class="container">
    <h1>Create Account</h1>
      <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button class="but" variant="primary" type="submit">
Submit
  </Button>
</Form>
</div>
    </div>
  );
}

export default App;
