import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/usersRedux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); // null, 'loading, 'success', 'serverError', 'emailError'
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    };

    setStatus('loading');
    fetch(`${API_URL}auth/login`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
          dispatch(logIn({ email }));
          setTimeout(() => {
            navigate('/');
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
      <h2 className="my-4">Sign in</h2>
      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have successfully logged in!</p>
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
          <Alert.Heading>Invalid credentials</Alert.Heading>
          <p>Email or password is incorrect...</p>
        </Alert>
      )}
      {status === 'loading' && (
        <Spinner animation="border" role="status" className="block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Form.Group className="my-3" controlId="formEmail">
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
      <button className={styles.btnLogin}>
        <b>Log in</b>
      </button>
      <p>
        Forgot your password? <a href="/lost-account"><b>Click here!</b></a>
      </p>
      <p>
        Don't have an account? <a href="/register"><b>Register now!</b></a>
      </p>
    </Form>
  );
};

export default Login;
