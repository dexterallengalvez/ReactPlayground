import { useState } from "react";

const useForm = (getFreshModelObject) => {
  const [values, setValues] = useState(getFreshModelObject());
  const [errors, setErrors] = useState({});

  //Updates the state depending on the event passed.
  //Ensure that the name of the components are the same as the names in the state JSON object
  const handleInputChange = (event) => {
    const [name, value] = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //Clear the form state and errors
  const resetFormControls = () => {
    setValues(getFreshModelObject());
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  };
};

export default useForm;
