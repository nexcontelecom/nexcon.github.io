import { useRef, useEffect, useState,useCallback } from "react";
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AboutUs from "./components/about/about";
import Technology from "./components/technology/technology";
import Service from "./components/service/service";
import Contact from "./components/contact/contact";
import SideScroller from "./components/sideScroller/sideScroller";
import { Scroll } from "./controller/scroll";
import './App.css';

function App() {
  const root = useRef(document.querySelector("html"));
  const [sections, setSections] = useState([]);
  const [flag, setFlag] = useState(0);
  const [scroll,setScroll] = useState({})

  const onSections = useCallback((sections) => {
    setSections(sections)
  }, []);
  
  useEffect(() => {
    setFlag(0);
    setScroll(new Scroll(sections,setFlag));
  },[root,sections])

  return (
    <Router >
      <Navbar />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <AboutUs root={root} SideScroller={SideScroller} onSections={onSections} flag={flag} scroll={scroll} setScroll={setScroll} />
          </Route>
          <Route exact path="/technology">
            <Technology root={root} SideScroller={SideScroller} onSections={onSections} flag={flag} scroll={scroll} setScroll={setScroll}/>
          </Route>
          <Route exact path="/service">
            <Service root={root} SideScroller={SideScroller} onSections={onSections} flag={flag} scroll={scroll} setScroll={setScroll}/>
          </Route>
          <Route exact path="/contact">
            <Contact root={root} SideScroller={SideScroller} onSections={onSections} flag={flag} scroll={scroll} setScroll={setScroll}/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
