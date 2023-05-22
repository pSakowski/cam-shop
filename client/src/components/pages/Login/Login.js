import { Button } from 'reactstrap';
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
    <Form className="col-12 col-sm-3 mx-auto" onSubmit={handleSubmit}>
      <h2 className="my-4">Zaloguj się</h2>
      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Sukces!</Alert.Heading>
          <p>Udało Ci się zalogować!</p>
        </Alert>
      )}
      {status === 'serverError' && (
        <Alert variant="danger">
          <Alert.Heading>Coś poszło nie tak...</Alert.Heading>
          <p>Spróbuj ponownie!</p>
        </Alert>
      )}
      {status === 'clientError' && (
        <Alert variant="danger">
          <Alert.Heading>Nieprawidłowe dane</Alert.Heading>
          <p>Email lub hasło są nieprawidłowe...</p>
        </Alert>
      )}
      {status === 'loading' && (
        <Spinner animation="border" role="status" className="block mx-auto">
          <span className="visually-hidden">Oczekiwanie...</span>
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
          placeholder="Hasło"
        />
      </Form.Group>
      <Button color="success" className={styles.btnLogin}>
        <b>Zaloguj</b>
      </Button>
      <p>
        Nie pamiętasz hasła? <a href="/lost-account"><b>Kliknij tutaj!</b></a>
      </p>
      <p>
        Nie masz konta? <a href="/register"><b>Zarejestruj się!</b></a>
      </p>
    </Form>
  );
};

export default Login;
