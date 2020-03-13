import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useForm = validateInputs => {
  const [values, setValues] = useState({ email: '', password: '', confirmPassword:'' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setConfirmPassword] = useState(false);
  
  const [error, setError] = useState({
    errors: false,
    email: ' ',
    password: ' ',
    confirmPassword:' '
  });
  const [isInvalidCred, setIsInvalidCred] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!error.errors && isSubmitting) {
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('password', values.password);
      axios({
        method: 'POST',
        url: '/auth/token/login',
        data: formData,
      })
        .then(({ data }) => {
          // handle success
          localStorage.setItem('token', data.auth_token);
          history.push('/');
        })
        .catch(response => {
          // handle error
          console.log(response);
          setIsInvalidCred(true);
        });
      setIsSubmitting(false);
      setValues(prevState => ({ ...prevState, email: '', password: '' ,confirmPassword:''}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isSubmitting]);

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setError(validateInputs(values));
    setIsSubmitting(true);
  };

  const toggleShowconfirmPassword = () =>{
    setConfirmPassword(prevState => !prevState)
  }

  const handleChange = event => {
    event.persist();
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    error,
    isInvalidCred,
    setIsInvalidCred,
    values,
    showPassword,
    showConfirmPassword,
    setError,
    toggleShowPassword,
    toggleShowconfirmPassword
  };
};

export default useForm;
