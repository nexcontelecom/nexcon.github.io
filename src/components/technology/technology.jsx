import { useEffect, useRef,useState, memo } from "react";
import styles from "./technology.module.css";

const Technology = ({scroll, SideScroller, flag, root,onSections }) => {
  const bannerRef = useRef();
  const techRef = useRef();
  const istackRef = useRef();
  const virtualRef = useRef();
  const wifiRef = useRef();
  const wtcpRef = useRef();
  const tcpRef = useRef();
  const [arrowDot, setArrowDot] = useState([]);

  useEffect(() => {
    window.scrollTo({top:0,behavior:"auto"});
    const sections = [
      bannerRef.current,
      techRef.current,
      istackRef.current,
      virtualRef.current,
      wifiRef.current,
      wtcpRef.current,
      tcpRef.current,
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
    <article className={styles.technology}>
      {/* banner */}
      <section ref={bannerRef} className={styles.banner}>
        <h1 className={styles.mainTitle}>내일의 도전을<br/>시작합니다</h1>
        <h3 className={styles.subTitle}>기술의 발전은 멈추지 않으며,<br/> 오늘날의 폐쇠된 문은 미래의 개방형 포털이 될 수 있습니다.</h3>
      </section>
      {/* Technology */}
      <section ref={techRef} className={styles.technologies}>
        <h1 className={styles.technologyTitle}>Technology</h1>
        {/* Istack */}
        <section ref={istackRef} className={styles.textBox}>
        {flag >= 1 ?
          <div className={styles.text}>
            <div className={styles.Box}>
              <h2 className={styles.title}>iStack™</h2>
              <h3 className={styles.description}>iSTACK™은 넥스컨 텔레컴을 차별화하는 “Global First” 
                TCP-IP 삽입 기술입니다. 진정한 완벽한 통합인 <br/> 범용 “플러그 앤 플레이”는 
                거의 모든 애플리케이션과 물리적 계층을 지원합니다.
              </h3>
              <ul className={styles.unOrderList}>
                <li className={styles.list}>가능한 모든 애플리케이션(HTTP, FTP, VOLP, LTE, SIP, RTP등)</li>
                <li className={styles.list}>가능한 모든 물리적 계층(WIFI, WIBRO, WIMAX, GPRS, WCDMA, EVDO)</li>
                <li className={styles.list}>유연한 플러그인 드라이버(다운로드 가능 또는 터미널 또는 IP 박스 내부 통합)</li>
              </ul>
            </div>
            <img className={styles.image} src="img/istack.png" alt="istack" /> 
          </div>
          : 
          <div className={styles.text1}>
            <div className={styles.Box}>
              <h2 className={styles.title1}>iStack™</h2>
              <h3 className={styles.description1}>iSTACK™은 넥스컨 텔레컴을 차별화하는 “Global First” 
                TCP-IP 삽입 기술입니다. 진정한 완벽한 통합인 <br/> 범용 “플러그 앤 플레이”는 
                거의 모든 애플리케이션과 물리적 계층을 지원합니다.
              </h3>
              <ul className={styles.unOrderList1}>
                <li className={styles.list1}>가능한 모든 애플리케이션(HTTP, FTP, VOLP, LTE, SIP, RTP등)</li>
                <li className={styles.list1}>가능한 모든 물리적 계층(WIFI, WIBRO, WIMAX, GPRS, WCDMA, EVDO)</li>
                <li className={styles.list1}>유연한 플러그인 드라이버(다운로드 가능 또는 터미널 또는 IP 박스 내부 통합)</li>
              </ul>
            </div>
            <img className={styles.image1} src="img/istack.png" alt="istack" /> 
          </div>
          }
          
        </section>
        {/* Virtualization */}
        <section ref={virtualRef} className={styles.textBox}>
        {flag >= 2 ? 
          <div className={styles.text}>
            <img className={styles.image}src="img/virtualization.png" alt="Virtualization" />
            <div className={styles.Box}>
              <h2 className={styles.title}>Network Virtualization</h2>
              <h3 className={styles.description}>iSTACK™의 네트워크 가상화 기술은 거의 모든 네트워크에서 최고의 연결 환경을 가능하게 합니다.</h3>
              <ul className={styles.unOrderList}>
                <li className={styles.list}>확장성: iStack의 유기적인 솔루션 덕분에 임의의 수의 노드를 지원합니다.</li>
                <li className={styles.list}>자가복구: 노드가 중단되면 몇 초 만에 네트워크가 자가 복구되어 서비스 중단을 방지할 수 있습니다.</li>
                <li className={styles.list}>최적의 라우팅: iStack P2P 솔루션은 두 터미널 간의 경로가 항상 최단 경로를 따르도록 보장하므로 어떤 형태의 삼각 라우팅도 피할 수 있습니다.</li>
                <li className={styles.list}>방회벽 및 네트워크: iStack P2P 오버레이 네트워크는 NAT 박스에서 새 포트 변호를 열 필요 없이 NAT 및 방화벽 트래버셜 문제에 대한 자연스러운
                  솔루션을 제공하며 비효율적인 터널링 솔루션을 방지합니다.
                </li>
              </ul>
            </div>
          </div>
          :
          <div className={styles.text1}>
          <img className={styles.image1}src="img/virtualization.png" alt="Virtualization" />
          <div className={styles.Box}>
            <h2 className={styles.title1}>Network Virtualization</h2>
            <h3 className={styles.description1}>iSTACK™의 네트워크 가상화 기술은 거의 모든 네트워크에서 최고의 연결 환경을 가능하게 합니다.</h3>
            <ul className={styles.unOrderList1}>
              <li className={styles.list1}>확장성: iStack의 유기적인 솔루션 덕분에 임의의 수의 노드를 지원합니다.</li>
              <li className={styles.list1}>자가복구: 노드가 중단되면 몇 초 만에 네트워크가 자가 복구되어 서비스 중단을 방지할 수 있습니다.</li>
              <li className={styles.list1}>최적의 라우팅: iStack P2P 솔루션은 두 터미널 간의 경로가 항상 최단 경로를 따르도록 보장하므로 어떤 형태의 삼각 라우팅도 피할 수 있습니다.</li>
              <li className={styles.list1}>방회벽 및 네트워크: iStack P2P 오버레이 네트워크는 NAT 박스에서 새 포트 변호를 열 필요 없이 NAT 및 방화벽 트래버셜 문제에 대한 자연스러운
                솔루션을 제공하며 비효율적인 터널링 솔루션을 방지합니다.
              </li>
            </ul>
          </div>
        </div>}  
        </section>
        {/* Clean WiFI */}
        <section ref={wifiRef} className={styles.textBox}>
          {flag >= 3 ?
          <div className={styles.text}>
            <div className={styles.Box}>
              <h2 className={styles.title}>Clean WiFi™</h2>
              <h3 className={styles.description}>Clean WiFi™는 혁신의 핵심입니다. QoS 기술을 사용하여 정크 인터넷 트래픽을 정리하고 <br/> 데이터 네트워크의 품질을 향상시키는 모바일 혁신 기술을 개발합니다.</h3>
              <ul className={styles.unOrderList}>
                <li className={styles.list}>Clean WiFi™ 프로젝트는 모든 레벨에서 모바일 기술의 완벽한 통합을 보여주고 보다 스마트한 네트워크를 위한 지능형 연결을 촉진합니다.
                  넥스컨 텔레컴의 Clean WiFi™는 WTCP 가속 기술로 최대 60% 더 빠른 WiFi를 제공하는 것에서부터 대역폭 본딩 기술이 적용된 특허받은 알고리즘을 통해 
                  최초의 유기 통신 네트워크를 운영하는 것에 이르기까지 거의 모든 네트워크에 대해 “글로벌 최고의” 최종 사용자 환경을 제공합니다.
                </li>
              </ul>
            </div>
            <img className={styles.image}src="img/clean.png" alt="Clean" />
          </div>
          : 
          <div className={styles.text1}>
            <div className={styles.Box}>
              <h2 className={styles.title1}>Clean WiFi™</h2>
              <h3 className={styles.description1}>Clean WiFi™는 혁신의 핵심입니다. QoS 기술을 사용하여 정크 인터넷 트래픽을 정리하고 <br/> 데이터 네트워크의 품질을 향상시키는 모바일 혁신 기술을 개발합니다.</h3>
              <ul className={styles.unOrderList1}>
                <li className={styles.list1}>Clean WiFi™ 프로젝트는 모든 레벨에서 모바일 기술의 완벽한 통합을 보여주고 보다 스마트한 네트워크를 위한 지능형 연결을 촉진합니다.
                  넥스컨 텔레컴의 Clean WiFi™는 WTCP 가속 기술로 최대 60% 더 빠른 WiFi를 제공하는 것에서부터 대역폭 본딩 기술이 적용된 특허받은 알고리즘을 통해 
                  최초의 유기 통신 네트워크를 운영하는 것에 이르기까지 거의 모든 네트워크에 대해 “글로벌 최고의” 최종 사용자 환경을 제공합니다.
                </li>
              </ul>
            </div>
            <img className={styles.image1}src="img/clean.png" alt="Clean" />
          </div>
          }
        </section>
        {/* WTCP */}
        <section ref={wtcpRef} className={styles.textBox}>
          {flag >= 4 ? 
          <div className={styles.text}>
            <img className={styles.image}src="img/TDMA.png" alt="TDMA" />
            <div className={styles.Box}>
              <h2 className={styles.title}>IP-TDMA Technology</h2>
              <h3 className={styles.description}>WiFi-QoS 장벽을 허무는 혁신적인 무선 기술</h3>
              <ul className={styles.unOrderList}>
                <li className={styles.list}>시간 또는 비실시간 모두 QoS 트래픽에 대한 충돌 없음</li>
                <li className={styles.list}>WiFi 대역폭의 최대 활용률</li>
                <li className={styles.list}>불안정한 대역폭과 불확실한 트래픽 수요 모두에 적용</li>
                <li className={styles.list}>개방형 플랫폼 솔루션: 대부분의 일반 기성 제품과 호환 및 구현 가능</li>
                <li className={styles.list}>소프트웨어 솔루션: 간단하고 저렴하며 현장에서 업그레이드할 수 있으며 완전히 유연함</li>
                <li className={styles.list}>WiFi 셀당 최대 AV(오디오-비디오) 연결 용량, 고화질(광대역 및 고비트 전송률) 애플리케이션을 지원하기에 충분한 대역폭</li>
              </ul>
            </div>
          </div>
          : 
          <div className={styles.text1}>
            <img className={styles.image1}src="img/TDMA.png" alt="TDMA" />
            <div className={styles.Box}>
              <h2 className={styles.title1}>IP-TDMA Technology</h2>
              <h3 className={styles.description1}>WiFi-QoS 장벽을 허무는 혁신적인 무선 기술</h3>
              <ul className={styles.unOrderList1}>
                <li className={styles.list1}>시간 또는 비실시간 모두 QoS 트래픽에 대한 충돌 없음</li>
                <li className={styles.list1}>WiFi 대역폭의 최대 활용률</li>
                <li className={styles.list1}>불안정한 대역폭과 불확실한 트래픽 수요 모두에 적용</li>
                <li className={styles.list1}>개방형 플랫폼 솔루션: 대부분의 일반 기성 제품과 호환 및 구현 가능</li>
                <li className={styles.list1}>소프트웨어 솔루션: 간단하고 저렴하며 현장에서 업그레이드할 수 있으며 완전히 유연함</li>
                <li className={styles.list1}>WiFi 셀당 최대 AV(오디오-비디오) 연결 용량, 고화질(광대역 및 고비트 전송률) 애플리케이션을 지원하기에 충분한 대역폭</li>
              </ul>
            </div>
          </div>
          }
        </section>
        {/* TCP */}
        <section ref={tcpRef} className={styles.textBox}>
          {flag >= 5 ? 
          <div className={styles.text}>
          <div className={styles.Box}>
            <h2 className={styles.title}>TCP Acceleration Technology</h2>
            <h3 className={styles.description}>넥스컨 텔레컴 WTCP 혁신은 최대 인터넷 대역폭을 활용하고 네트워크 환경에서 <br/>엔드 노드에 혁신적인 속도를 제공하도록 설계된 소프트웨어 기반 기술입니다.</h3>
            <ul className={styles.unOrderList}>
              <li className={styles.list}>표준 TCP를 수정한 당사의 캐리어급 TCP 가속 기술은 마지막 무선 마일(GGSN에서 모바일 핸드셋으로)을 포함하여 모든 무선 네트워크에서 TCP 처리량을 최대 2배 향상시킵니다.
                NexCon Telecom은 지난 3년간 전 세계 주요 생산 핵심 네트워크에서 선도적인 무선 통신사에 WTCP 혁신을 최초로 구현했으며 입증된 성능을 통해 연간 20% 이상의 대역폭을 절감했습니다.
              </li>
            </ul>
          </div>  
          <img className={styles.image}src="img/WTCP.png" alt="WTCP" />
          </div>
          :
          <div className={styles.text1}>
          <div className={styles.Box}>
            <h2 className={styles.title1}>TCP Acceleration Technology</h2>
            <h3 className={styles.description1}>넥스컨 텔레컴 WTCP 혁신은 최대 인터넷 대역폭을 활용하고 네트워크 환경에서 <br/>엔드 노드에 혁신적인 속도를 제공하도록 설계된 소프트웨어 기반 기술입니다.</h3>
            <ul className={styles.unOrderList1}>
              <li className={styles.list1}>표준 TCP를 수정한 당사의 캐리어급 TCP 가속 기술은 마지막 무선 마일(GGSN에서 모바일 핸드셋으로)을 포함하여 모든 무선 네트워크에서 TCP 처리량을 최대 2배 향상시킵니다.
                NexCon Telecom은 지난 3년간 전 세계 주요 생산 핵심 네트워크에서 선도적인 무선 통신사에 WTCP 혁신을 최초로 구현했으며 입증된 성능을 통해 연간 20% 이상의 대역폭을 절감했습니다.
              </li>
            </ul>
          </div>  
          <img className={styles.image1}src="img/WTCP.png" alt="WTCP" />
          </div>}
        </section>
      </section>
      {arrowDot? <SideScroller scroll={scroll} arrowDot={arrowDot} flag={flag}/> : ""}
    </article>
  )
}

export default memo(Technology);