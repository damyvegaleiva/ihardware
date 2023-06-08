import useForm from "../../Hooks/useForm";

const ContactForm = ({ placeOrder }) => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const onValidate = (form) => {
    let errors = {};

    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.firstName.trim()) {
      errors.firstName = "First Name can't be empty.";
    } else if (!regexName.test(form.firstName)) {
      errors.firstName = "First Name can only contain letters and spaces.";
    }

    if (!form.lastName.trim()) {
      errors.lastName = "Last Name can't be empty.";
    } else if (!regexName.test(form.lastName)) {
      errors.lastName = "Last Name can only contain letters and spaces.";
    }

    if (!form.email.trim()) {
      errors.email = "Email can't be empty.";
    } else if (!regexEmail.test(form.email)) {
      errors.email = "Email contains a format not valid.";
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate,
    placeOrder
  );

  return (
    <div className="contact-us-container">
      <h2 className="container-title">Buyer&apos;s Info</h2>

      <form className="contact-us-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <label>{errors.firstName}</label>}

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <label>{errors.lastName}</label>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <label>{errors.email}</label>}

        <button disabled={loading}>
          {loading ? "Sending..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
