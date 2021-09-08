import styles from "./footer.module.css";

const Footer = () => {
  return(
    <article className={styles.footer}>
      <div className={styles.copyright}>
        <h5 className={styles.description}>넥스컨 텔레컴(주)</h5>
        <h5 className={styles.description}>대표이사: 김협 주소: 06222 서울시 강남구 테헤란로 34길 17, 혜성빌딩 401호</h5>
        <h5 className={styles.description}>© 2021 Copyright. NEXCONTELECOM CO., LTD ALL Rights Reserved.</h5>
      </div>
    </article>
    
  )
}

  export default Footer;