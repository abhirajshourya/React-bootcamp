import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  // ANCHOR useInput
  const {
    value: fName,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const formIsValid = fNameIsValid && lNameIsValid && emailIsValid;

  // ANCHOR Handlers
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      console.log(`First Name: ${fName} Last Name: ${lName} Email: ${email}`);
    }

    fNameReset();
    lNameReset();
    emailReset();
  };

  const fNameInputClasses = !fNameHasError
    ? "form-control"
    : "form-control invalid";
  const lNameInputClasses = !lNameHasError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fName}
            onBlur={fNameBlurHandler}
            onChange={fNameChangeHandler}
          />
          {fNameHasError && (
            <span className="error-text">First name is required</span>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lName}
            onBlur={lNameBlurHandler}
            onChange={lNameChangeHandler}
          />
          {lNameHasError && (
            <span className="error-text">Last name is required</span>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && (
          <span className="error-text">E-Mail address is required</span>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
