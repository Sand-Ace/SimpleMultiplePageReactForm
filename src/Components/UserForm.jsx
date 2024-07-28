import UserDetails from "./UserDetails";
import Confirm from "./Confirm";
import Submission from "./Submission";
import UserPersonalDetail from "./UserPersonalDetail";
import { useState } from "react";

const UserForm = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  function handleInputChange(name, value) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  console.log(formData);

  function handleConfirmButton(event) {
    event.preventDefault();

    setPage((prevNum) => prevNum + 1);
  }

  function handleBackButton() {
    if (page > 1) {
      setPage((prevNum) => prevNum - 1);
    }
  }

  console.log(page);

  return (
    <>
      <header>
        <nav className="nav_bar">
          <h1>Demo Form</h1>
        </nav>
      </header>
      <h2 className="form_heading">
        {page == 1
          ? "Enter User Details"
          : page == 2
          ? "Enter Personal Details"
          : page == 3
          ? "Confirm"
          : "Form Submitted"}
      </h2>
      {page == 1 && (
        <UserDetails
          onConfirm={handleConfirmButton}
          formData={formData}
          handleChange={handleInputChange}
        />
      )}
      {page == 2 && (
        <UserPersonalDetail
          onConfirm={handleConfirmButton}
          onCancel={handleBackButton}
          handleChange={handleInputChange}
          formData={formData}
        />
      )}
      {page == 3 && (
        <Confirm
          onConfirm={handleConfirmButton}
          onCancel={handleBackButton}
          formData={formData}
        />
      )}
      {page == 4 && <Submission onConfirm={handleConfirmButton} />}
    </>
  );
};

export default UserForm;
