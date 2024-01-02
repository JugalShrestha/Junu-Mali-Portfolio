import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const Navbar = React.forwardRef(({scrollToComponent},ref) => {
  const handleClick = (componentRef) => {
    return () => {
      // Check if componentRef is defined before calling scrollIntoView
      if (componentRef && componentRef.current) {
        componentRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };
  const [scrolled, setScrolled] = useState(false);
   useEffect(()=>{

    let isScrolling = false;

    const checkScroll = () => {
      if (!isScrolling) {
        // Add a buffer of a few pixels around 99 scrollY
        if (window.scrollY >= 200) {
          setScrolled(true);
        }
        else {
          setScrolled(false);
        }
        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 100);
      }
    };
    window.addEventListener('scroll',checkScroll)
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };

  },[])
  return (
    <section ref={ref} className={scrolled?"nav-bar scrolled":"nav-bar"}>
      <div onClick={handleClick(scrollToComponent.homePageRef)} className="nav-option" id="logo">junu mali</div>
      <div className="nav-options">
        <div onClick={handleClick(scrollToComponent.contactPageRef)} className="nav-option">contact</div>
        <div onClick={handleClick(scrollToComponent.workPageRef)} className="nav-option">gallery</div>
      </div>
    </section>
  )
})

Navbar.propTypes = {
  scrollToComponent: PropTypes.shape({
    homePageRef: PropTypes.object.isRequired,
    workPageRef: PropTypes.object.isRequired,
    contactPageRef: PropTypes.object.isRequired,
  }).isRequired,
}

Navbar.displayName = "Navbar"

export default Navbar