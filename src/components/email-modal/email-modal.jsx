import styles from "./email-modal.module.css";

const EmailModal = ({setEmailFlag}) => {
  const handleClose = () => {
    setEmailFlag(false)
  }
  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.sect01}>
        <div className={styles.lineBox}>
          <span className={styles.line01}></span>
          <span className={styles.line02}></span>
        </div>
      </div>
      <div className={styles.text}>
        <h2>제안해 주셔서 감사합니다.</h2>
      </div>
    </div>
  )
}

export default EmailModal;