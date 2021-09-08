import { useEffect, useRef, memo, useState } from "react";
import styles from "./about.module.css";


const AboutUs = ({ scroll, SideScroller, flag, root,onSections }) => {
  const bannerRef = useRef();
  const whatWeDoRef = useRef();
  const principleRef = useRef();
  const [arrowDot, setArrowDot] = useState([]);

  useEffect(() => {
    window.scrollTo({top:0,behavior:"auto"});
    const sections = [
      bannerRef.current,
      whatWeDoRef.current,
      principleRef.current
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
    <article className={styles.aboutUs}>
      {/* Banner */}
      <section ref={bannerRef} className={styles.banner}>
      <h1 className={styles.mainTitle1}>We Make</h1>
      <h1 className={styles.mainTitle2}>Hyper-connected</h1>
      <h1 className={styles.mainTitle3}>Society</h1>
      </section>
      {/* What we do */}
      <section ref={whatWeDoRef} className={styles.whatWeDo}>
        <h1 className={styles.whatWeDoTitle}>What we do?</h1>
        {flag >= 1 ? 
          <div className={styles.textBox}>
            <div>
              <h2 className={styles.textBoxTitle}>초연결 사회를 실현하다.</h2>
              <h2 className={styles.textBoxTitle}><strong>넥스컨텔레컴</strong></h2>
            </div>
            <div>
            <h3 className={styles.description}>
              넥스컨 텔레컴은 상당한 수준의 지적 재산권을 축적한 수년간의 기술력을 보유한
              기술 회사로서 사람들을 연결하고, 비즈니스 역량을 강화하여 더 풍요롭게 생활할 수 있는 “Ad-Hoc-Network” 기반 모바일 기술 및 혁신을 개발하는 데
              전념하고 있습니다. 우리는 고객이 네트워크 운영을 개선하면서 발생되는 상당한
              운영 비용을 절감하여 네트워크 시스템을 최대한 활용할 수 있도록 돕습니다.
            </h3>
            </div>
          </div> 
          :
            <div className={styles.textBox1}>
            <div>
              <h2 className={styles.textBoxTitle1}>초연결 사회를 실현하다.</h2>
              <h2 className={styles.textBoxTitle1}><strong>넥스컨텔레컴</strong></h2>
            </div>
            <div>
            <h3 className={styles.description1}>
              넥스컨 텔레컴은 상당한 수준의 지적 재산권을 축적한 수년간의 기술력을 보유한
              기술 회사로서 사람들을 연결하고, 비즈니스 역량을 강화하여 더 풍요롭게 생활할 수 있는 “Ad-Hoc-Network” 기반 모바일 기술 및 혁신을 개발하는 데
              전념하고 있습니다. 우리는 고객이 네트워크 운영을 개선하면서 발생되는 상당한
              운영 비용을 절감하여 네트워크 시스템을 최대한 활용할 수 있도록 돕습니다.
            </h3>
            </div>
          </div> 
          }
      </section>
      {/*  Principle */}
      <section ref={principleRef} className={styles.principle}>
        <h1 className={styles.principleTitle}>Principle</h1>
          <h3>
            다음 3가지 원칙은 개인과 팀으로서 우리가 믿는 것고 고객, 주주, 커뮤티니 및 <br/>
            수많은 사람들과의 상호작용을 어떻게 열망하는지 나타냅니다.
          </h3>
            {flag >= 2 ? <div className={styles.items}>
            <div className={styles.item1}>
              <img className={styles.image} src="img/wifi.png" alt="images" />
              <h1>최전선의 기술</h1>
              <h3>
                고객, 환경, 사람을 위한 “Global Best”<br/>
                품질의 “Ad-Hoc-Network” 기반 통신을<br/>
                제공합니다.
              </h3>
            </div>
            <div className={styles.item2}>
            <img className={styles.image} src="img/value.png" alt="images" />
              <h1>가치추구</h1>
              <h3>
                우리는 인재의 전문성을 통해 혁신을<br/>
                창조하는 "Global First" 가치를<br/>
                실현합니다.
              </h3>
            </div>
            <div className={styles.item3}>
            <img className={styles.image} src="img/shipping.png" alt="images" />
              <h1>세계화</h1>
              <h3>
                창의적인 마인드로 “Doing the Thing”<br/>
                차세대 인터넷을 구현하는 글로벌 리더가<br/>
                되겠습니다.
              </h3>
            </div>
          </div> :
          <div className={styles.items}>
          <div className={styles.item4}>
            <img className={styles.image} src="img/wifi.png" alt="images" />
            <h1>최전선의 기술</h1>
            <h3>
              고객, 환경, 사람을 위한 “Global Best”<br/>
              품질의 “Ad-Hoc-Network” 기반 통신을<br/>
              제공합니다.
            </h3>
          </div>
          <div className={styles.item5}>
          <img className={styles.image} src="img/value.png" alt="images" />
            <h1>가치추구</h1>
            <h3>
              우리는 인재의 전문성을 통해 혁신을<br/>
              창조하는 "Global First" 가치를<br/>
              실현합니다.
            </h3>
          </div>
          <div className={styles.item6}>
          <img className={styles.image} src="img/shipping.png" alt="images" />
            <h1>세계화</h1>
            <h3>
              창의적인 마인드로 “Doing the Thing”<br/>
              차세대 인터넷을 구현하는 글로벌 리더가<br/>
              되겠습니다.
            </h3>
          </div>
        </div>}
      </section>
      {arrowDot? <SideScroller scroll={scroll} arrowDot={arrowDot} flag={flag}/> : ""}
    </article>
  )
}

export default memo(AboutUs);