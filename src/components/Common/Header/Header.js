import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../../utils/Routing/auth";

const Header = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate("/");
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light mx-4 pb-2">
                <div className="container-fluid">
                    <Link to={ "/" } className="navbar-brand d-flex align-items-center">
                        <span className="ms-2">PropMang</span>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to={ "/" } className="nav-item nav-link">Home</Link>
                            {
                                auth.user
                                    ?
                                    <>
                                        <Link to={ "/account" } className="nav-item nav-link">Account</Link>
                                        <button id="logout-btn" onClick={ handleLogout }>Logout</button>
                                    </>
                                    :
                                    <>
                                        <Link to={ "/registration" } className="nav-item nav-link">Registration</Link>
                                        <Link to={ "/login" } className="nav-item nav-link">Login</Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;