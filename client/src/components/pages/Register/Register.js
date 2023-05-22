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
    <Form className="col-12 col-sm-3 mx-auto" onSubmit={handleSubmit}>
      <h2 className="my-4">Zarejestruj się</h2>

      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Sukces!</Alert.Heading>
          <p>Zostałeś pomyślnie zarejestrowany! Teraz możesz się zalogować...</p>
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

      {status === 'loginError' && (
        <Alert variant="warning">
          <Alert.Heading>Email jest już zajęty</Alert.Heading>
          <p>Musisz użyć innego adresu e-mail.</p>
        </Alert>
      )}

      {status === 'loading' && (
        <Spinner animation="border" role="status" className="block mx-auto">
          <span className="visually-hidden">Oczekiwanie...</span>
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
          placeholder="Hasło"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPasswordRepeat">
        <Form.Control
          type="password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          placeholder="Powtórz hasło"
        />
      </Form.Group>

      <Button color="success" className={styles.btnRegister}>
        <b>Zarejestruj</b>
      </Button>
    </Form>
  );
};

export default Register;
