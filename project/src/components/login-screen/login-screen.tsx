import Header from '../header/header';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useRef, FormEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';

const spaces = new RegExp('\\s');
const letters = new RegExp('[A-Za-z]');
const numbers = new RegExp('\\d');

function LoginScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const validatePassword = () => {
    const passwordValue = passwordRef.current?.value;

    if (passwordValue) {
      if (!letters.test(passwordValue)) {
        passwordRef.current?.setCustomValidity('Must contain at least one letter');
      } else if (!numbers.test(passwordValue)) {
        passwordRef.current?.setCustomValidity('Must contain at least one number');
      } else if (spaces.test(passwordValue)) {
        passwordRef.current?.setCustomValidity('No spaces available');
      } else {
        passwordRef.current?.setCustomValidity('');
      }
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={validatePassword}
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Root} className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
