import useForm from "../../Hooks/useForm";

const ContactForm = ({ placeOrder }) => {

  const initialData = {
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    message: ''
  };

  const onValidate = (form) => {
    let errors = {}

    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;

    if (!form.firstName.trim()) {
      errors.firstName = "First Name can't be empty."
    } else if (!regexName.test(form.firstName)) {
      errors.firstName = "First Name can only contain letters and spaces."
    }

    if (!form.lastName.trim()) {
      errors.lastName = "Last Name can't be empty."
    } else if (!regexName.test(form.lastName)) {
      errors.lastName = "Last Name can only contain letters and spaces."
    }

    if (!form.email.trim()) {
      errors.email = "Email can't be empty."
    } else if (!regexEmail.test(form.email)) {
      errors.email = "Email contains a format not valid."
    }

    if (!form.subject.trim()) {
      errors.subject = "Subject can't be empty."
    }

    if (!form.message.trim()) {
      errors.message = "Message can't be empty."
    } else if (!regexComments.test(form.message)) {
      errors.message = 'Message can only be 250 characters length.'
    }

    return errors
  }


  const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate, placeOrder)


  return (
    <div className="contact-us-container">
      <div className="contact-us-right">
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <label>{errors.firstName}</label>}

          <input type="text" placeholder="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <label>{errors.lastName}</label>}

          <input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <label>{errors.email}</label>}

          <input type="text" placeholder="Subject" name="subject" value={form.subject} onChange={handleChange} />
          {errors.subject && <label>{errors.subject}</label>}

          <textarea placeholder="Message" name="message" value={form.message} onChange={handleChange}></textarea>
          {errors.message && <label>{errors.message}</label>}
          <button disabled={loading}>{loading ? "Sending..." : 'Submit'}</button>
        </form>
      </div>
    </div>
  );

}

export default ContactForm;
