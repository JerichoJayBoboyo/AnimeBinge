import "./styles/nav.css";
import "./styles/index.css";
import { useState, useRef, useEffect } from "react";

function Nav() {
  const [showNav, setShowNav] = useState(false);
  const linkDivRef = useRef(null);

  function toggleNavVisibility() {
    setShowNav((prevShowNav) => !prevShowNav);
  }

  useEffect(() => {
    if (linkDivRef.current) {
      linkDivRef.current.style.right = showNav ? "0" : "-500px";
    }
  }, [showNav]);

  useEffect(() => {
    function handleClick(event) {
      if (!linkDivRef.current) return;

      // Calculate the pseudo-element's dimensions
      const pseudoElementStyle = window.getComputedStyle(
        linkDivRef.current,
        "::after"
      );
      const pseudoElementWidth = parseFloat(pseudoElementStyle.width);
      const pseudoElementHeight = parseFloat(pseudoElementStyle.height);
      const pseudoElementX =
        linkDivRef.current.getBoundingClientRect().right - pseudoElementWidth;
      const pseudoElementY =
        linkDivRef.current.getBoundingClientRect().bottom - pseudoElementHeight;

      // Check if the click is within the pseudo-element's area
      if (
        event.clientX >= pseudoElementX &&
        event.clientX <= pseudoElementX + pseudoElementWidth &&
        event.clientY >= pseudoElementY &&
        event.clientY <= pseudoElementY + pseudoElementHeight
      ) {
        setShowNav(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav>
      <div className="nav-cntr">
        <div className="logo-cntr">AnimeBinge</div>
        <div className="navlinks">
          <div className={`links ${showNav ? "visible" : ""}`} ref={linkDivRef}>
            <a href="#">Home</a>
            <a href="#">Discover</a>
            <a href="#">About Us</a>
          </div>
          <div className="nav-links-icon">
            <button id="bars" onClick={toggleNavVisibility}>
              {showNav ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
          <div className="account-cntr">
            <button id="signup-btn">Sign Up</button>
            <button id="login-btn">Login</button>
            <button id="user">
              <i className="fa-regular fa-user"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
