import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../../utils/Routing/auth";

const Footer = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate("/");
    }

    return (
        <footer className="postion-relative top-0 container-fluid py-3 px-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link to={ "/" } className="nav-link px-2 text-body-secondary">Home</Link>
                </li>
                {
                    auth.user
                        ?
                        <>
                            <li>
                                <Link to={ "/account" } className="nav-link px-2 text-body-secondary">Account</Link>
                            </li>
                            <li className="d-flex">
                                <button id="logout-btn" onClick={ handleLogout }>Logout</button>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to={ "/registration" } className="nav-link px-2 text-body-secondary">Registration</Link>
                            </li>
                            <li>
                                <Link to={ "/login" } className="nav-link px-2 text-body-secondary">Login</Link>
                            </li>
                        </>
                }
            </ul>
            <p className="text-center text-body-secondary">© 2023 ProMang</p>
        </footer>
    );
}

export default Footer;