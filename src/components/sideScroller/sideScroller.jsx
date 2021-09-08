import styles from "./sideScroller.module.css";
import SideScrollerDot from "../sideScrollerDot/sideScrollerDot";

const SideScroller = ({arrowDot, flag, scroll}) => {

  const handleScrollDown = () => {
    scroll.scrollDown();
  }

  const handleScrollUp = () => {
    scroll.scrollUp();
  }
  
  return(
    <div className={styles.arrows}>
        <div className={styles.upArrow} onClick={handleScrollUp}/>
        {arrowDot.map((dot,index) => {
          return <SideScrollerDot key={index} id={index} flag={flag}/>
        })}
        <div className={styles.downArrow} onClick={handleScrollDown}/>
    </div>
  )
}

export default SideScroller;