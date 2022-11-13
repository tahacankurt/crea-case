export default function loginFormRules(values) {
    let errors = {};

    // Email
    if (!values.email) errors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email address is invalid';
    // Password
    if (!values.password) errors.password = 'Password is required';

    return errors;
};
