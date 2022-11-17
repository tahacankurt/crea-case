import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import useForm from '../../../hooks/useForm';
import loginFormRules from './helpers';
import { loginRequest } from '../redux/authState';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthWaiting = useSelector((state) => state?.auth.isLoading);
  const authError = useSelector((state) => state?.auth.error);
  const auth = useSelector((state) => state?.auth.payload);

  function submit(formData) {
    dispatch(loginRequest({ formData, navigate }));
  }

  // formik will much more scalable and better option instead of custom hook.
  const { errors, handleChange, handleSubmit } = useForm(submit, loginFormRules);

  useEffect(() => {
    if (auth.user) navigate('/');
  }, [auth, navigate]);

  return (
    <div className="bg-gray-100 h-screen">
      <div
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 overflow-hidden p-5 bg-white rounded-xl shadow-sm w-96"
      >
        <form onSubmit={handleSubmit}>

          <div className="mt-4">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="mt-1">
              {/* Default value Hint For Demo Case */}
              <input
                disabled={isAuthWaiting}
                type="text"
                defaultValue="user@mail.com"
                name="email"
                id="email"
                className={`input ${errors.email ? 'error:tf-input' : 'tf-input'}`}
                onChange={handleChange}
              />
            </div>

            {errors.email && (
            <p className="mt-2 text-sm text-red-600" id="email-error">{errors.email}</p>
            )}
          </div>

          <div className="mt-4">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              {/* Default value Hint For Demo Case */}
              <input
                disabled={isAuthWaiting}
                type="text"
                defaultValue="user123"
                name="password"
                id="password"
                className={`input ${errors.password ? 'error:tf-input' : 'tf-input'}`}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
            <p className="mt-2 text-sm text-red-600" id="password-error">
              {errors.password}
            </p>
            )}
          </div>

          <p className="mt-2 text-sm text-red-600">
            {authError && authError?.response}
          </p>

          <div className="mt-5">
            <button
              type="submit"
              className={`primary:tf-btn float-right ${isAuthWaiting && 'opacity-50 cursor-not-allowed'}`}
              disabled={isAuthWaiting}
            >
              {isAuthWaiting ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
