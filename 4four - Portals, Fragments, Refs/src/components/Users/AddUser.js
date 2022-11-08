import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper.js";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const eName = nameInputRef.current.value;
    const eAge = ageInputRef.current.value;
    if (eName.trim().length === 0 || eAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please Enter a Valid name and Age (non-empty values).",
      });
    } else if (+eAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please Enter a Valid Age (value > 0).",
      });
    } else {
      props.onAddUser(eName, eAge);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
