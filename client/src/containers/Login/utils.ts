import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_HOST } from 'constants/hosts';

export const useLoginForm = () => {
  const [token, setToken] = useState<string>();
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = handleSubmit(async data => {
    const res = await fetch(`${API_HOST}/login`, {
      body: JSON.stringify(data),
      headers: { contentType: 'application/json' },
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    });
    const response = await res.json();
    setToken(response.token);
  });

  return { handleFormSubmit, register, token };
};
