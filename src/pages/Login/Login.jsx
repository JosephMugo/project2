import { useEffect, useState } from "react";
import { useAuth } from "../../utils/Routing/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  const auth = useAuth();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    auth.login(user);
  };

  useEffect(() => {
    setUser({});
  }, []);

  return (
    <main className="flex-fill d-flex flex-column justify-content-center align-items-center">
      <form className="user-form border p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            name="username"
            id="username"
            aria-describedby="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column flex-lg-row">
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
          <button
            type="submit"
            className="btn btn-primary mt-3 mt-lg-0 ms-lg-4"
            disabled={user.username === "" || user.password === ""}
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
