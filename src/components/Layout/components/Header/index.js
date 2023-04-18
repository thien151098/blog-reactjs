import './style.scss';
import ToggleMenu from '../../../ToggleMenu';

function Header() {
    return (
        <header className="wrapper">
            <div className="inner">
                <a href="https://demo.cocobasic.com/romea-wp/demo-1/" className="logo">
                    <img
                        src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/themes/romea-wp/images/logo.png"
                        alt="Romea"
                    ></img>
                </a>
                <div className="toggle-menu mt-5">
                    <ToggleMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
