---
tags:
  - ComputerNetworking
  - TCPIP
  - OCI
  - TCP
  - UDP
  - HTTP
---
# Computer Networks

## 네이티브 애플리케이션 vs 웹 애플리케이션

### 네이티브 애플리케이션

#### 장점

- 상대적으로 빠르다.
- 기기의 리소스에 접근이 용이하다.
- 인터넷 없이 사용 가능하다.
- 상대적으로 안전하다.

#### 단점

- 개발비가 더 들어간다. (멀티 플랫폼)
- 빠른 업데이트, 배포가 힘들다.
- 앱 스토어에 등록하는 비용이 발생한다.

### 웹 애플리케이션

#### 장점

- 설치나 다운로드가 필요 없이 브라우저로 실행 가능하다.
- 업데이트 등의 유지관리가 쉽다. (바로 배포 가능)
- 상대적으로 개발이 간편하다.
- 앱 스토어 승인이 필요 없다.

#### 단점

- 인터넷 연결이 필요하다.
- 상대적으로 느리다.
- 앱 스토어의 관리를 받지 않아 사용자 접근성이 떨어진다.
- 상대적으로 보안상 위험에 노출되기 쉽다.

## TCP/IP

- [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite)
- [OSI model - Wikipedia](https://en.wikipedia.org/wiki/OSI_model)

| TCP/IP 4 Layers | OSI 7 Layers | Protocol Examples |
| ---- | ---- | ---- |
| Application | Application | DNS, HTTP, SSH, TLS/SSL |
| Application | Presentation | MIME, ASCII |
| Application | Session | Named pipe, RTP |
| Transport | Transport | TCP, UDP, QUIC |
| Internet | Network | IP |
| Link | Data Llnk | ARP, MAC (Ethernet, Wi-Fi) |
| - | Physical | Ethernet PHY, Wi-Fi PHY |

- [MAC](https://en.wikipedia.org/wiki/Medium_access_control)
- [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol)
  - OSI 2.5 layer, network와 data link 사이
- [QUIC - Wikipedia](https://en.wikipedia.org/wiki/QUIC)

### 패킷

- [Network packet](https://en.wikipedia.org/wiki/Network_packet)
- [회선 교환](https://en.wikipedia.org/wiki/Circuit_switching)
- [패킷 교환](https://en.wikipedia.org/wiki/Packet_switching)

## IP

- [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)

### IPv4

- [IPv4](https://en.wikipedia.org/wiki/IPv4)
- 서브넷 전체 주소:  호스트 비트 모두 0
- 브로드캐스트 주소: 호스트 비트 모두 1
- [IP address management - Wikipedia](https://en.wikipedia.org/wiki/IP_address_management)

### IP의 한계

- [비연결성, 비신뢰성](https://en.wikipedia.org/wiki/Internet_Protocol#Relibility) → TCP, UDP

## TCP & UDP

- [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
- [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol)

|  | TCP | UDP |
| :--: | ---- | ---- |
| 서비스 타입 | 연결 지향 | 데이터그램 지향 |
| 신뢰성 | 목적 기기까지 전송을 보장 | 목적 기기까지 전송이 보장되지 않음 |
| 순서 보장 | 자체적으로 순서 보장 | 자체적으로 순서 보장되지 않음, 상위 계층에서 순서 관리 필요 |
| 속도 | 상대적으로 느림 | 상대적으로 빠름 |

- **TCP와 UDP 중 비디오 스트리밍 상황에 주로 사용하는 방식**  
주로 UDP를 사용한다. 데이터를 빠르게 전송하는 것이 중요하고 약간의 손실은 감수할 수 있기 때문이다.
- **미 국방부가 TCP/IP가 극심한 전시중 에도 신뢰성을 잃지 않는다고 판단한 이유**  
RTO, DupAck 기반 재전송 기술로 신뢰성이 확보되어 있다.
- **DNS 서버가 TCP방식에서 동작하는 경우의 문제점**  
서버와 클라이언트의 연결이 유지되어야 하는 TCP의 구조상 자원이 더 많이 들 수 밖에 없다.  
서버와 클라이언트 간의 더 큰 데이터 교환이 필요한 경우에는 TCP를 사용하기도 한다.

## 포트

포트와 소켓

• 같은 웹 브라우저를 동시에 두개 켜 놓고 같은 사이트에 접속을 해도 문제 없이 통신이 가능합니다. 이러한 경우. 어떠한 방식으로 원활히 통신이 가능할 수 있을까요?

## URL & DNS

### URL & URI

![URL](../../00%20Meta/02%20Images/mdn-url-all.png)

- [URL](https://en.wikipedia.org/wiki/URL)
- [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
- [What is a URL? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

### DNS

- [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)

## 웹 애플리케이션 아키텍처

### Multitier Architecture

#### 1-Tier Architecture

- 메인프레임과 터미널로 이루어진 구조.
- 개인용 컴퓨터 개념이 없던 시절의 구조로, 메인프레임에서 데이터 저장 및 모든 로직을 실행하고 터미널은 유저와 상호작용하는 역할만 한다.

#### 2-Tier Architecture

- 클라이언트와 서버로 이루어진 구조.
- 개인용 컴퓨터의 보급으로 클라이언트 쪽에서도 어느 정도 컴퓨팅이 이루어지게 되면서 생겨났다.
- 클라이언트는 유저 상호작용과 관련된 로직 실행, 서버는 데이터 저장을 하게 된다.
- 구성에 따라 비즈니스 로직을 실행하는 주체는 달라질 수 있으나 2-tier 개념은 주로 클라이언트에서 더 많은 컴퓨팅을 하는 쪽부터 나타났다.

#### 3-Tier Architecture

- 클라이언트, 애플리케이션 서버, 데이터 서버로 이루어진 구조.
- 2-tier 구조에서 비즈니스 로직을 실행하는 애플리케이션 서버를 따로 둔다.
- 클라이언트가 더 가벼워지고 서버가 역할에 따라 단계가 나누어졌다.

#### MVC vs 3-Tier Architecture

- MVC는 코드 디자인이 model, view, controller 3가지 요소로 나뉘어진 것을 의미하고,  
3-tier 구조는 물리적으로 클라이언트, 애플리케이션 서버, 데이터 서버 3단계로 분리되어 네트워크로 연결된 것을 의미한다.
- MVC는 클라이언트 혹은 애플리케이션 서버 내부에서 사용될 수 있는 디자인 패턴, 구조인 반면,  
3-tier 구조는 좀 더 거시적인 개념, 물리적인 구조다.

#### *References*

- [Multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture)
- [Three-Tier Architecture](https://www.linuxjournal.com/article/3508)
- [Model-view-controller - Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [MVC Vs n-tier architecture](https://stackoverflow.com/questions/698220/mvc-vs-n-tier-architecture)

### 계층 외 요소

#### Cross-Cutting Concerns

- [Cross-cutting concern](https://en.wikipedia.org/wiki/Cross-cutting_concern)
- 보안, 통신, 운영 관리 등을 위한 요소
- e.g. Spring AOP
- [Aspect-oriented programming - Wikipedia](https://en.wikipedia.org/wiki/Aspect-oriented_programming)

#### Third-party Integrations

- 제3의 API 서비스와의 결합
- e.g. OAuth 2.0 소셜 로그인 기능, PG사의 결제 기능

## 웹 애플리케이션 구현

### 구현 방식

#### SPA

- [Single-page application](https://en.wikipedia.org/wiki/Single-page_application)
- AJAX, Asynchronous JavaScript, XML 등을 사용하여 새로고침 없이 한 페이지에서 작동한다.

#### MSA (Microservices Architecture)

- [Microservices](https://en.wikipedia.org/wiki/Microservices)
- 특정 기능을 하는 작은 서비스들을 모아 하나의 웹 애플리케이션을 만든다.

#### Serverless

- [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing)
- 클라우드 서비스에서 서버와 그 기반 기능들을 담당하여 개발자가 서버를 관리할 필요가 없이 필요한 기능을 구현할 수 있다.

### 구현 기술

- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [Cookie](https://en.wikipedia.org/wiki/HTTP_cookie)와 [session](https://en.wikipedia.org/wiki/Session_(computer_science))
- [사용자 인증](https://en.wikipedia.org/wiki/Authentication): [MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication), [OTP](https://en.wikipedia.org/wiki/One-time_password), [OAuth](https://en.wikipedia.org/wiki/OAuth)

### SSR과 CSR

- [Dynamic web page](https://en.wikipedia.org/wiki/Dynamic_web_page)

### CORS (Cross-Origin Resource Sharing)

- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## HTTP

- [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [HTTP Messages - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
- [HTTP request methods - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### *Further Reading*

- [What is the difference between POST and PUT in HTTP?](https://stackoverflow.com/questions/630453/what-is-the-difference-between-post-and-put-in-http/2590281#2590281)
- [Idempotent - MDN Web Docs Glossary&colon; Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent)
- [MIME types (IANA media types) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [Stateless protocol - Wikipedia](https://en.wikipedia.org/wiki/Stateless_protocol)

## REST

- [Representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [REST API Tutorial](https://restfulapi.net/)

### Richardson Maturity Model (RMM)

- [Richardson Maturity Model](https://en.wikipedia.org/wiki/Richardson_Maturity_Model)

### Open API

- [Open API](https://en.wikipedia.org/wiki/Open_API)

#### Examples

- [공공데이터 포털](https://www.data.go.kr/)
- [Сurrent weather and forecast - OpenWeatherMap](https://openweathermap.org/)

### *Further Reading*

- [What is REST - REST API Tutorial](https://restfulapi.net/)
- [5 Basic REST API Design Guidelines](https://blog.restcase.com/5-basic-rest-api-design-guidelines/)
- [api.gov.au](https://api.gov.au/)
- [API design guide | Cloud APIs | Google Cloud](https://cloud.google.com/apis/design)
- [api-guidelines/Guidelines.md at master · microsoft/api-guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md)
- [GitHub - OAI/OpenAPI-Specification: The OpenAPI Specification Repository](https://github.com/OAI/OpenAPI-Specification)

## HTTP API 테스트 툴

### CLI

- [curl](https://curl.se/)
- [wuzz](https://github.com/asciimoo/wuzz)

### GUI

- [Postman API Platform](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

## 웹 브라우저

- [When happens when...](https://github.com/alex/what-happens-when)
- [How browsers work](https://web.dev/howbrowserswork/)

### Chrome

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Chromium network errors](https://source.chromium.org/chromium/chromium/src/+/main:net/base/net_error_list.h)
- [Fix "Aw, Snap!" page crashes and other page loading errors](https://support.google.com/chrome/answer/95669#zippy=%2Cpage-loading-error-codes-and-issues)
