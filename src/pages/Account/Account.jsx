import { useEffect, useState } from "react";
import { alertOptions, useAuth } from "../../utils/Routing/auth";
import axios from "axios";
import { toast } from "react-toastify";

const Account = () => {
  const [userDetails, setUserDetails] = useState();
  const [hasExistingDetails, setHasExistingDetails] = useState(false);

  const auth = useAuth();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserDetails((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasExistingDetails) {
      auth.updateUserDetails(userDetails);
    } else {
      auth.createUserDetails(userDetails);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    populateFields();
  };

  const populateFields = () => {
    axios
      .get("http://localhost:8080/account", { params: { userID: auth.userID } })
      .then((res) => {
        if (res.status === 204) {
          throw new Error(res);
        }
        auth.setLoading(false);
        const accountDetails = res?.data;
        setUserDetails({
          firstName: accountDetails.first_name,
          lastName: accountDetails.last_name,
          address: accountDetails.address_1,
          secondaryAddress: accountDetails.address_2,
          city: accountDetails.city,
          state: accountDetails.state,
          zipCode: accountDetails.zip_code,
          phoneNumber: accountDetails.phone_number,
          email: accountDetails.email,
        });
        toast.success("User details populated with current", alertOptions);
        setHasExistingDetails(true);
      })
      .catch((e) => {
        auth.setLoading(false);
        toast.error("No user details for user!", alertOptions);
      });
  };

  useEffect(() => {
    populateFields();
  }, []);

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
                value={userDetails?.firstName || ""}
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
                value={userDetails?.lastName || ""}
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
                value={userDetails?.email || ""}
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
                value={userDetails?.phoneNumber || ""}
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
                value={userDetails?.address || ""}
              />
            </div>
            <div className="col-12">
              <label htmlFor="secondaryAddress" className="form-label">
                Address 2<span className="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="secondaryAddress"
                name="secondaryAddress"
                placeholder="Apartment or suite"
                onChange={handleChange}
                value={userDetails?.secondaryAddress || ""}
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
                value={userDetails?.city || ""}
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
                value={userDetails?.state || ""}
              >
                <option value="">Choose...</option>
                <option>MO</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zipCode" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                name="zipCode"
                placeholder=""
                required
                onChange={handleChange}
                value={userDetails?.zipCode || ""}
              />
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-primary">
                  {hasExistingDetails ? "Update" : "Create"}
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
