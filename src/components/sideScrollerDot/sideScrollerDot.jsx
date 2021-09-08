import styles from "./sideScrollerDot.module.css";

const SideScrollerDot = ({id, flag}) => {
  const onDot = id === flag && true;
  const onDotStyle = {
    backgroundColor: "#525252",
    transition: "300ms",
  }
  return (
      <div className={styles.dot} style={onDot ? onDotStyle : {}}/>
  )
}

export default SideScrollerDot;