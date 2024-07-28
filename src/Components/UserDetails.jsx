const UserDetails = ({ onConfirm, formData, handleChange }) => {
  const { firstname, lastname, email } = formData;

  function handleInputData(event) {
    const { name, value } = event.target;
    handleChange(name, value);
  }

  return (
    <section className="form_section">
      <form onSubmit={(e) => onConfirm(e)} className="form">
        <div className="form_input">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => handleInputData(e)}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => handleInputData(e)}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputData(e)}
            required
          />
        </div>
        <div className="actions">
          <button className="full_btn" type="submit">
            Continue
          </button>
          {/* <button className="full_btn">Continue</button> */}
        </div>
      </form>
    </section>
  );
};

export default UserDetails;
