import {useState, useEffect} from 'react';

export const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        const formData = new FormData(event.currentTarget);

        let formValues = {}
        for (let [key, value] of formData.entries()) {
            formValues = {...formValues, [key]: value}
        }

        setValues(values => (formValues));
        setErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        // setValues(values => ({...values, [event.target.name]: event.target.value}));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;
