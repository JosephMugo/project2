import { useState } from "react";
import { useAuth } from "../../utils/Routing/auth";

const Account = () => {
  const [userDetails, setUserDetails] = useState();

  const auth = useAuth();

  const handleChange = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;
    setUserDetails((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.updateUser(userDetails);
  };

  return (
    <main className="flex-fill d-flex flex-column justify-content-center align-items-center">
      <div className="m-4 col-md-6 col-lg-4">
        <h4 className="mb-3">Account</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="youremail@domain.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="phone-num" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone-number"
                name="phoneNumber"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="1234 Main St"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="address2" className="form-label">
                Address 2<span className="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                name="address2"
                placeholder="Apartment or suite"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select
                className="form-select"
                id="city"
                name="city"
                required
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option>Florissant</option>
                <option>Hazelwood</option>
                <option>St Charles</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid city.
              </div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">
                State
              </label>
              <select
                className="form-select"
                id="state"
                name="state"
                required=""
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option>MO</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                placeholder=""
                required
                onChange={handleChange}
              />
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Account;
