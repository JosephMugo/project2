import {useState} from "react";

const Registration = () => {

    const [userRegistrationDetails, setUserRegistrationDetails] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserRegistrationDetails(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('registration not implemented, only state is populated')
    }

    return (
        <main className="flex-fill d-flex flex-column justify-content-center align-items-center">
            <form className="user-form border p-4" onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
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
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="repeat-password" className="form-label"
                    >Repeat Password</label
                    >
                    <input type="password" className="form-control" id="repeat-password" name="repeat-password" onChange={handleChange} />
                </div>
                <div className="d-flex flex-column flex-lg-row">
                    <button type="reset" className="btn btn-secondary">Reset</button>
                    <button type="submit" className="btn btn-primary mt-3 mt-lg-0 ms-lg-4">
                        Register
                    </button>
                </div>
            </form>
        </main>
    )
}

export default Registration;