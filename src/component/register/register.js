import { useState } from "react";

export default function Register() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setError] = useState({
    usernameErr: "",
    emailErr: "",
    passErr: "",
    confirmPasswordErr: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const changeData = (e) => {
    // console.log(e.target.value)
    if (e.target.name === "username") {
      setUserData({
        ...userData,
        userName: e.target.value,
      });

      setError({
        ...errors,
        usernameErr:
          e.target.value.length === 0
            ? "this field ie required"
            : e.target.value.length < 3
            ? "Min length  is 3 char."
            : null,
      });
    } else if (e.target.name === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
      setError({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "this field ie required"
            : e.target.value.length < 5
            ? "Min length  is 5 char."
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)
            ? "please provide a valid email"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setError({
        ...errors,
        passErr:
          e.target.value.length === 0
            ? "this field ie required"
            : e.target.value.length < 8
            ? "Min length  is 8 char."
            : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                e.target.value
              )
            ? "please provide a valid password"
            : null,
      });
    } else if (e.target.name === "confirmPassword") {
      setUserData({
        ...userData,
        confirmPassword: e.target.value,
      });
      setError({
        ...errors,
        confirmPasswordErr:
          e.target.value.length === 0
            ? "this field ie required"
            : e.target.value !== userData.password
            ? "passward and confirm password do not match"
            : null,
      });
    }
  };

  const submitData = (e) => {
    console.log(e.target);
    e.preventDefault();
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h1 className='mt-4'> Register </h1>

      <form onSubmit={(e) => submitData(e)} className="container py-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.usernameErr ? "border-danger" : ""
            }`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userData.userName}
            onChange={(e) => changeData(e)}
            name="username"
          />
          <div className="text-danger">{errors.usernameErr}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            value={userData.email}
            onChange={(e) => changeData(e)}
            name="email"
          />
        </div>
        <div className="text-danger">{errors.emailErr}</div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword3" className="form-label">
            password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="exampleInputPassword3"
            value={userData.password}
            onChange={(e) => changeData(e)}
            name="password"
          />
        </div>
        <div className="text-danger">{errors.passErr}</div>
        <button className="btn btn-info" onClick={(e) => togglePassword(e)}>
          Show Password
        </button>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="example1InputPassword2"
            value={userData.confirmPassword}
            onChange={(e) => changeData(e)}
            name="confirmPassword"
          />
        </div>
        <div className="text-danger">{errors.confirmPasswordErr}</div>
        <button
          type="submit"
          disabled={
            errors.emailErr ||
            errors.usernameErr ||
            errors.passErr ||
            errors.confirmPasswordErr
          }
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
