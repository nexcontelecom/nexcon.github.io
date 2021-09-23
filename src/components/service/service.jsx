import { useEffect, useRef, useState, memo } from "react";
import styles from "./service.module.css";

const Service = ({scroll, SideScroller, flag, root,onSections}) => {
  const [arrowDot, setArrowDot] = useState([]);
  const bannerRef = useRef();
  const serviceRef = useRef();

  useEffect(() => {
    window.scrollTo({top:0,behavior:"auto"});
    const sections = [
      bannerRef.current,
      serviceRef.current
    ]
    onSections(sections);
  },[onSections])

  useEffect(() => {
    const cleanUp = root.current;
    root.current.addEventListener("wheel", scroll.move, {passive: false});
    return () => cleanUp.removeEventListener("wheel",scroll.move); //clean-up
  },[scroll,root])

  useEffect(() => {
    setArrowDot(scroll.sections);
  },[scroll.sections,arrowDot])

  return(
    <article className={styles.service}>
      {/* Banner */}
      <section ref={bannerRef} className={styles.banner}>
        <h1 className={styles.mainTitle}>성장의 돌파구를 마련하는 <br/> 넥스컨 텔레컴</h1>
        <h3 className={styles.subTitle}>넥스컨 텔레컴의 글로벌 R&D 팀은 무선 네트워크 성능 향상, 컴퓨팅 비용 절감 및 네트워크 역량 확대를 위해 노력하고 있으며 차세대 IP 기술과 저렴한 공용 네트워크를 활용하고 있으며 IP 기술과 저렴한 공용 네트워크를 활용하는 혁신적인 TCP/IP 솔루션을 개발합니다.</h3>
      </section>
      {/* Service */}
      <section ref={serviceRef} className={styles.services}>
      <h1 className={styles.serviceTitle}>Service</h1>
      {flag >= 1 ? <div>
          <div className={styles.item}>
            {/* item - wifion */}
            <div className={styles.thumbnail}>
              <h1 className={styles.thumbnailTitle}>차별화된 나눔의 시작,</h1>
              <h1 className={`${styles.thumbnailTitle} ${styles.red}`}>와이파이온</h1>
            </div>
            <div className={styles.description}>
              <h3>와이파이온은 넥스컨텔레컴이 제공하는 새로운 와이파이 무료 이용 앱서비스 입니다. 비밀번호가 필요없고, 빠른 전송 속도와 데이터 절약을 한번에 제공합니다. 또 이 서비스에 AP를 제공하는 소상공인, 혹은 다양한 사업자에게 이익이 될 수 있도록 광고 서비스를 제공합니다.</h3>
              <div className={styles.button}>
                <a className={styles.link} rel="noreferrer" href="https://wifion.in" target="_blank">자세히 보기</a>
              </div>
            </div> 
          </div>
        </div>
        :
        <div>
          <div className={styles.item1}>
            {/* item - wifion */}
            <div className={styles.thumbnail1}>
              <h1 className={styles.thumbnailTitle}>차별화된 나눔의 시작,</h1>
              <h1 className={`${styles.thumbnailTitle} ${styles.red}`}>와이파이온</h1>
            </div>
            <div className={styles.description1}>
              <h3>와이파이온은 넥스컨텔레컴이 제공하는 새로운 와이파이 무료 이용 앱서비스 입니다. 비밀번호가 필요없고, 빠른 전송 속도, 데이터 절약을 한번에 제공합니다. 또 이 서비스에 AP를 제공하는 소상공인, 혹은 다양한 사업자에게 이익이 될 수 있도록 광고 서비스를 제공합니다.</h3>
              <div className={styles.button}>
                <a className={styles.link} rel="noreferrer" href="https://wifion.in" target="_blank">자세히 보기</a>
              </div>
            </div> 
          </div>
        </div>}
      </section>
      {arrowDot? <SideScroller scroll={scroll} arrowDot={arrowDot} flag={flag}/> : ""}
    </article>
  )
}

export default memo(Service);

// end of line
