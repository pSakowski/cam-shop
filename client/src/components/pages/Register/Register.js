import { Button } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import { API_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';

const Register = () => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordRepeat: passwordRepeat,
      }),
    };

    setStatus('loading');
    fetch(`${API_URL}auth/register`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
          setTimeout(() => {
            navigate('/login');
          }, 1500);
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .catch((error) => {
        setStatus('Error:', error);
      });
  };

  return (
    <Form className="col-11 col-sm-3 mx-auto" onSubmit={handleSubmit}>
      <h2 className="my-4">Sign up</h2>

      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been successfully registered! Now you can log in...</p>
        </Alert>
      )}

      {status === 'serverError' && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Please try again!</p>
        </Alert>
      )}

      {status === 'clientError' && (
        <Alert variant="danger">
          <Alert.Heading>Invalid data</Alert.Heading>
          <p>Email or password is incorrect...</p>
        </Alert>
      )}

      {status === 'loginError' && (
        <Alert variant="warning">
          <Alert.Heading>Email is already taken</Alert.Heading>
          <p>You must use a different email address.</p>
        </Alert>
      )}

      {status === 'loading' && (
        <Spinner animation="border" role="status" className="block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <Form.Group className="my-3" controlId="formLogin">
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPasswordRepeat">
        <Form.Control
          type="password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          placeholder="Repeat Password"
        />
      </Form.Group>

      <button className={styles.btnRegister}>
        <b>Register</b>
      </button>
    </Form>
  );
};

export default Register;
