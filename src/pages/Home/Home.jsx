import logo from '../../resources/imgs/logo.svg';
const Home = () => {
    return (
        <main className="flex-fill d-flex flex-column justify-content-center">
            <div className="px-4 py-5 text-center">
                { /* Logo */ }
                <img
                    className="d-block mx-auto mb-4"
                    src={ logo }
                    alt="PropMang Logo"
                    width="72"
                    height="57"
                />
                {/* Website Name */}
                <h1 className="display-5 fw-bold text-body-emphasis">PropMang</h1>
                <div className="col-lg-6 mx-auto">
                    {/* Slogan */}
                    <p className="lead mb-4">Making Property Management Easy</p>
                </div>
            </div>
        </main>
    );
}

export default Home;