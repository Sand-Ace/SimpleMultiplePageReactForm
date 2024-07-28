const UserPersonalDetail = ({
  onConfirm,
  onCancel,
  handleChange,
  formData,
}) => {
  const { occupation, city, bio } = formData;

  function handleInputChange(event) {
    const { name, value } = event.target;
    handleChange(name, value);
  }

  return (
    <section className="form_section">
      <form onSubmit={(e) => onConfirm(e)} className="form">
        <div className="form_input">
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => handleInputChange(e)}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={city}
            onChange={(e) => handleInputChange(e)}
            required
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            value={bio}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className="actions">
          <button className="full_btn" type="submit">
            Continue
          </button>
          <button className="ouline_btn" onClick={onCancel}>
            Back
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserPersonalDetail;
