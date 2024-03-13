import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import Logo from "./images/logo.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`nav_start ${scroll ? 'scrolled' : ''}`}>
      <nav className={`navbar navbar-expand-sm fixed-top navbar-light ${scroll || !collapsed ? 'bg-white' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className='navbar_logo'><img src={Logo} alt='Logo'/></div>
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleNavbar}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features" onClick={toggleNavbar}>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/connect" onClick={toggleNavbar}>Connect</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team" onClick={toggleNavbar}>Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import "./navbar.css";
// import { Link } from 'react-router-dom';
// import Logo from "./images/logo.png";

// const Navbar = () => {
//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={scroll ? 'nav_start scrolled' : 'nav_start'}>
//       <nav className={`navbar navbar-expand-sm fixed-top navbar-light ${scroll ? 'bg-white' : ''}`}>
//         <div className="container">
//           <Link className="navbar-brand" href="#">
//             <div className='navbar_logo'><img src={Logo} alt='Logo'/></div>
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/features">Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/connect">Connect</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/team">Team</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="sticky-top bg-white hidden-spacer"></div>
//     </div>
//   );
// };

// export default Navbar;
