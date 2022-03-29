
import './Navigation.scss';
import navbarBg from './navbar-bg.jpeg';
import navLogo from '../../assets/img/Nav-icon.webp';
import playBg from '../../assets/img/play-button-bg.jpg';
import CSS from 'csstype';

function Navigation() {


    const playButtonStyle: CSS.Properties = {
        background: `url(${playBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        WebkitUserSelect: 'none'
    }

    return(
        <nav id="mainNav" style={{'background': `url(${navbarBg})`}}
             className="navbar navbar-expand-lg navbar-dark border-primary fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand d-flex py-2">

                    <img src={navLogo} />
                    <div className="d-md-inline ms-4 mt-2 d-none">
                        <h5>ZEAH RSPS <br /><small>Play your way</small></h5>

                    </div>

                </div>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown text-white">
                            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Home
                            </a>
                            <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Forums</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Discord</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Highscores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vote</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Store</a>
                        </li>
                    </ul>

                </div>
                <div className="me-auto">
                    <div  className="play-btn me-5 w-100 mb-1">
                        <h5 className="px-3 py-2 text-center me-md-5" style={playButtonStyle}>PLAY NOW</h5>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation;
