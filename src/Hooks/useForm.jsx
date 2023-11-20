import { useState } from "react";

const useForm = (initialData, onValidate, placeOrder) => {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = onValidate(form);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      setLoading(true);
      placeOrder(form);
    }
  };

  return { form, errors, loading, handleChange, handleSubmit };
};

export default useForm;
