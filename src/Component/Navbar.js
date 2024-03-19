import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo2.png'
import './Nav.css'
function NavBar() {

    return (
      <>
   <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'white', color: 'black', borderBottom: '0.5px solid grey', fontFamily: 'Poppins' }}>
  <Link className="navbar-brand" to="/"><img src={logo} width="350" height="80" alt="" loading="lazy" /></Link>
  <button className="navbar-toggler b-1 bg-light me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link fs-5" to="/" activeClassName="active" exact style={{ color: 'black' }}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" to="/aboutus" activeClassName="active" style={{ color: 'black' }}>About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" to="/events" activeClassName="active" style={{ color: 'black' }}>Event</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" to="/gallary" activeClassName="active" style={{ color: 'black' }}>Gallery</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" to="/contactus" activeClassName="active" style={{ color: 'black' }}>Contact</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target="_blank" rel="noopener noreferrer">
          <span className='btn text-light bt' style={{ fontSize: '16px', backgroundColor: '#E87F37', border: '1px solid blue' }}>Apply For Internship</span>
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/donate">
          <span className='btn btn-warning bt1' style={{ fontSize: '16px', border: '1px solid #E87F37', backgroundColor: '#fdd831', color: '#5a4a06' }}>
            <i className='bi bi-heart-fill me-2'></i>Help Now
          </span>
        </Link>
      </li>
    </ul>
  </div>
</nav>
    </>
    );
  }
  
  export default NavBar;
  