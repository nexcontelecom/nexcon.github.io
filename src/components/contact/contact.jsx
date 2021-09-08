import { useEffect, useRef, useState, memo } from "react";
import styles from "./contact.module.css";
import emailjs from "emailjs-com";
import { secret } from "../../config/secret.js";
import EmailModal from "../email-modal/email-modal";

const Contact = ({scroll, SideScroller, flag, root,onSections}) => {
  const [emailFlag, setEmailFlag] = useState(false);
  const [arrowDot, setArrowDot] = useState([]);
  const bannerRef = useRef();
  const contactUsRef = useRef();
  
  const handleSendEmail = (event) => {
    event.preventDefault();
    console.log(event.target[0]);
    for (let i = 1; i < event.target.length; i++) {
      if (event.target[i].value === "") {
        return alert("필수 입력란이 비어있습니다. 확인해주세요");
      }
    }
    emailjs.sendForm(secret.serviceId, secret.templateId, event.target,secret.userId)
      .then((result) => {
          console.log(result.text);
          setEmailFlag(true);
      }, (error) => {
          console.log(error.text);
    });
    for (let i = 1; i < event.target.length; i++) {
      event.target[i].value = "";
    }
  }

  useEffect(() => {
    window.scrollTo({top:0,behavior:"auto"});
    const sections = [ 
      bannerRef.current,
      contactUsRef.current
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
    <article className={styles.contact}>
      <section ref={bannerRef} className={styles.banner}>
        <h1 className={styles.mainTitle}>고객의 비즈니스를 <br/> 성공으로</h1>
        <h3 className={styles.subTitle}>넥스컨 텔레컴과 합께 성공을 경험하기 위한, <br/>여러분의 다양한 서비스 의견과 제안을 <br/>기다립니다.</h3>
      </section>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <section ref={contactUsRef} className={styles.contactUs}>
        {flag >= 1 ?
          <div>
            <div className={styles.textBox}>
            <div className={styles.imageBox}>
              <img className={styles.image} src="img/desk.png" alt="desk" />
              <h1 className={styles.text}>넥스컨 텔레컴(주)</h1>
              <h3 className={styles.text}>서울특별시 강남구 테헤란로 34길 17, 혜성빌딩 401호</h3>
              <h3 className={styles.text}>대한민국 06222</h3>
            </div>
            <form className={`${styles.inputBox} "contact-form"`} onSubmit={handleSendEmail}>
              <input type="hidden" name="contact_number" />
              <input className={styles.input} type="text" name="from_name" placeholder="당신의 이름을 입력해주세요"/>
              <input className={styles.input} type="email" name="from_email" placeholder="당신의 이메일을 입력해주세요"/>
              <input className={styles.input} type="text" name="category" placeholder="주제를 입력해주세요"/>
              <textarea cols="30" rows="10" name="message" placeholder="메시지를 입력해주세요" />
              <input className={styles.submit} type="submit" value="제출하기"/>
            </form>
          </div>
        </div>
        :
        <div>
            <div className={styles.textBox1}>
            <div className={styles.imageBox1}>
              <img className={styles.image} src="img/desk.png" alt="desk" />
              <h1 className={styles.text}>넥스컨 텔레컴(주)</h1>
              <h3 className={styles.text}>서울특별시 강남구 테헤란로 34길 17, 혜성빌딩 401호</h3>
              <h3 className={styles.text}>대한민국 06222</h3>
            </div>
            <form className={`${styles.inputBox1} "contact-form"`} onSubmit={handleSendEmail}>
              <input type="hidden" name="contact_number" />
              <input className={styles.input} type="text" name="from_name" placeholder="당신의 이름을 입력해주세요"/>
              <input className={styles.input} type="email" name="from_email" placeholder="당신의 이메일을 입력해주세요"/>
              <input className={styles.input} type="text" name="category" placeholder="주제를 입력해주세요"/>
              <textarea cols="30" rows="10" name="message" placeholder="메시지를 입력해주세요" />
              <input className={styles.submit} type="submit" value="제출하기"/>
            </form>
          </div>
        </div>}
      </section>
      {emailFlag ? 
        <EmailModal setEmailFlag={setEmailFlag}/>
      : ""}
      {arrowDot? <SideScroller scroll={scroll} arrowDot={arrowDot} flag={flag}/> : ""}
    </article>
  )
}

export default memo(Contact);