const Confirm = ({ onConfirm, onCancel, formData }) => {
  const { firstname, lastname, email, occupation, city, bio } = formData;

  return (
    <form onSubmit={(e) => onConfirm(e)} className="confirm_container">
      <div>
        <h3>FirstName:</h3>
        <p>{firstname}</p>
      </div>
      <div>
        <h3>LastName:</h3>
        <p>{lastname}</p>
      </div>
      <div>
        <h3>Email:</h3>
        <p>{email}</p>
      </div>
      <div>
        <h3>Occupation:</h3>
        <p>{occupation}</p>
      </div>
      <div>
        <h3>City:</h3>
        <p>{city}</p>
      </div>
      <div>
        <h3>Bio</h3>
        <p>{bio}</p>
      </div>
      <div className="actions">
        <button className="full_btn" type="submit">
          Confirm & Continue
        </button>
        <button className="ouline_btn" onClick={onCancel}>
          Back
        </button>
      </div>
    </form>
  );
};

export default Confirm;
