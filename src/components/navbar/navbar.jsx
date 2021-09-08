import { useCallback, useEffect, useState, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSpring , animated } from "react-spring";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [colorFlag,setColorFlag] = useState(false);
  const [state , toggle] = useState(true);
  const [navbarFlag, setNavbarFlag] = useState("/");
  const history = useHistory();

  const handleNavbarFlag = useCallback(() => {
    setNavbarFlag(history.location.pathname);
  },[history.location.pathname]);

  const opacity = {
    opacity: 1,
  }

  const onHomeButton = () => {
      setNavbarFlag("/")
      history.push("/");
  }
  const { x } = useSpring({
    from : { x : 0},
    x: state ? 1 : 0,
    config: { duration : 1000}
  })

  const handleScroll = () => {
    window.scrollY > 200 ? setColorFlag(true) : setColorFlag(false);
  }
  useEffect(() => {
    handleNavbarFlag();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[handleNavbarFlag]);

  return (
    <header className={`${styles.header} ${colorFlag ? styles.headerOn : ""}` }>
      <div className={styles.logo}>
        <h1 className={styles.logoTitle} >NEXCON TELECOM</h1>
        <img className={styles.homeImage} src="img/home_button.png" alt="home" onClick={onHomeButton}/>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.contents}>
          <Link to="/"><div className={styles.content} style={navbarFlag === "/" ? opacity : {}} onClick={() => toggle(!state)}>
            <animated.li className={styles.text} style={{
              opacity: x.to({ range: [0,1], output: [1, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
              }}>
              About Us
            </animated.li>
            </div>
          </Link>
          <Link to="/technology"><div className={styles.content} style={navbarFlag === "/technology" ? opacity : {}} onClick={() => toggle(!state)}>
            <animated.li className={styles.text} style={{
              opacity: x.to({ range: [0,1], output: [1, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
              }}>
              Technology
            </animated.li>
            </div>
          </Link>
          <Link to="/service"><div className={styles.content} style={navbarFlag === "/service" ? opacity : {}} onClick={() => toggle(!state)}>
            <animated.li className={styles.text} style={{
              opacity: x.to({ range: [0,1], output: [1, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
              }}>
              Service
            </animated.li>
            </div>
          </Link>
          <Link to="/contact"><div className={styles.content} style={navbarFlag === "/contact" ? opacity : {}} onClick={() => toggle(!state)}>
            <animated.li className={styles.text} style={{
              opacity: x.to({ range: [0,1], output: [1, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
              }}>
              Contact Us
            </animated.li>
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default memo(Navbar);