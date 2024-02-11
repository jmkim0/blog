---
tags:
  - Security
  - HTTP
  - Cookie
  - JWT
  - OAuth2
---
# Security

## [HTTPS]

[HTTPS]: https://en.wikipedia.org/wiki/HTTPS

- [How HTTPS works](https://howhttps.works/)
- [GitHub - alex/what-happens-when: An attempt to answer the age old interview question "What happens when you type google.com into your browser and press enter?"](https://github.com/alex/what-happens-when#tls-handshake)
- [How does SSL/TLS work?](https://security.stackexchange.com/questions/20803/how-does-ssl-tls-work?noredirect=1&lq=1)
- [Transport Layer Security - Wikipedia](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [Root certificate - Wikipedia](https://en.wikipedia.org/wiki/Root_certificate)
- [RSA (cryptosystem) - Wikipedia](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
- 공개키로 암호화, 개인키로 복호화 → 보낸 사람과 개인키를 가진 사람만 확인 가능 → 비대칭 암호화 전송
- 개인키로 암호화, 공개키로 복호화 → 개인키를 가진 사람만 암호 생성 가능 → 서명 역할
  - 인증서를 hashing하고 개인키로 암호화하여 서명을 작성 → 인증서를 hashing한 값과 공개키로 서명을 복호화한 값이 같으면 인증서를 발행한, 서명한 사람이 개인키를 가지고 있음이 증명된다.

### *Further Reading*

- [Man-in-the-middle attack - Wikipedia](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)

### 인증서 발급

- [GitHub - FiloSottile/mkcert: A simple zero-config tool to make locally trusted development certificates with any names you'd like.](https://github.com/FiloSottile/mkcert)
- [PKCS 12 - Wikipedia](https://en.wikipedia.org/wiki/PKCS_12)

## Hashing

- [Adding Salt to Hashing: A Better Way to Store Passwords](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/)
- [SHA-2 - Wikipedia](https://en.wikipedia.org/wiki/SHA-2)

## [HTTP cookie]

[HTTP cookie]: https://en.wikipedia.org/wiki/HTTP_cookie

- [Using HTTP cookies - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Set-Cookie - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
- [Understanding "same-site" and "same-origin"](https://web.dev/i18n/en/same-site-same-origin/)
- [SameSite cookies - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)  
  표준이 바뀌어서 scheme이 다르면 same-site가 아니게 될 수도 있음 유의
- [Same-origin policy - Wikipedia](https://en.wikipedia.org/wiki/Same-origin_policy)
- [Cross-site scripting - Wikipedia](https://en.wikipedia.org/wiki/Cross-site_scripting)
- [Cross-site request forgery - Wikipedia](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

### Session Based Authentication

- 로그인시 서버에서 인증된 상태, 세션을 저장하고 클라이언트에 있는 쿠키에 저장된 세션을 가리키는 session_id를 담는 방식으로 상태를 유지시킨다.
  - 유저 로그인 상태, 장바구니 등 정보를 세션에 저장할 수 있다.
  - In-memory, 세션 스토어(redis 등 트랜잭션이 빠른 DB 사용) 등 저장소에 세션을 저장한다.
- 로그아웃시 서버에서는 세션을 저장소에서 제거하고 클라이언트에서는 쿠키의 session_id를 무효한 값으로 바꿔줘야 한다.

## 웹 보안 공격

- [SQL injection](https://en.wikipedia.org/wiki/SQL_injection)
- [Cross-Site Request Forgery (CSRF)](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
- [Session fixation](https://owasp.org/www-community/attacks/Session_fixation)
- [Clickjacking - Wikipedia](https://en.wikipedia.org/wiki/Clickjacking)

### *Further Reading*

- [OWASP Foundation, the Open Source Foundation for Application Security | OWASP Foundation](https://owasp.org/)
- [Rainbow table - Wikipedia](https://en.wikipedia.org/wiki/Rainbow_table)

## Session-based Authentication vs Token-based Authentication

### Session-based Authentication

서버 측에 인증된 사용자의 정보를 세션 형태로 세션 저장소에 저장하는 방식

- 인증된 사용자 정보를 서버 측 세션 저장소에서 관리
- 생성된 사용자 세션의 고유 ID인 세션 ID를 클라이언트의 쿠키에 저장  
  → request 전송 시 인증된 사용자인지를 증명하는 수단으로 사용
- 세션 ID만 클라이언트 쪽에서 사용 → 상대적으로 적은 네트워크 트래픽 사용
- 서버 측에서 세션 정보를 관리 → 보안성 측면에서 상대적으로 유리
- 서버의 확장성 면에서는 세션 불일치 문제가 발생할 가능성 높음  
  → sticky session, session clustering, 세션 저장소 외부화 등으로 해결
- 세션 데이터가 많아지면 질수록 서버의 부담이 가중됨
- SSR 방식의 애플리케이션에 적합

### Token-based Authentication

인증된 사용자의 정보를 토큰에 저장하고, 접근 권한을 부여해 접근 권한이 부여된 특정 리소스에만 접근이 가능하게 하는 방식

- 토큰에 포함된 인증된 사용자 정보를 서버 측에서 별도로 관리하지 않음
- 생성된 토큰을 헤더에 포함 → request 전송 시 인증된 사용자인지를 증명하는 수단으로 사용
- 토큰 내에 인증된 사용자 정보 등을 포함 → 상대적으로 많은 네트워크 트래픽 사용
- 기본적으로 서버 측에서 토큰을 관리하지 않으므로 보안성 측면에서 조금 더 불리하다.
- 인증된 사용자 request의 상태를 유지할 필요가 없음  
  → 서버의 확장성 면에서 유리, 세션 불일치 등의 문제 발생하지 않음
- 토큰에 포함되는 사용자 정보는 토큰의 특성상 암호화가 되지 않음  
  → 민감한 정보는 토큰에 포함시키지 않아야 함
- 기본적으로 토큰이 만료되기 전까지는 토큰을 무효화 시킬 수 없음  
  → Redis와 같은 key-value 인메모리 DB에 토큰을 저장하고 해당 key-value 쌍의 만료 시간을 최소로 주어 사용할 수 없게 하는 방법 등으로 해결
- CSR 방식의 애플리케이션에 적합

### *Further Reading*

- [What is Session Stickiness | Pros and Cons of Using Session Cookies | Imperva](https://www.imperva.com/learn/availability/sticky-session-persistence-and-cookies/)
- [Clustering/Session Replication How-To](https://tomcat.apache.org/tomcat-10.1-doc/cluster-howto.html)

## JWT

- [JSON Web Token - Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Token)
- [JWT.IO](https://jwt.io/)
- [RFC 7519 - JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519)
- [RFC 6750: The OAuth 2.0 Authorization Framework: Bearer Token Usage](https://www.rfc-editor.org/rfc/rfc6750)

### JWT의 장점

- 토큰 기반 인증의 장점을 공유
- JWT 구조상 토큰의 payload 안에 해당 사용자의 권한 정보를 포함하기 용이하다.

### JWT의 단점

- 토큰 기반 인증의 단점을 공유
- JWT 구조상 payload가 Base64로 인코딩되어 쉽게 디코딩 가능  
  → payload에 민감한 정보를 포함하지 않아야 함

### *Further Reading*

- [JSON Web Signature - Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Signature)
- [RFC 7515 - JSON Web Signature (JWS)](https://datatracker.ietf.org/doc/html/rfc7515)
- [JSON Web Encryption - Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Encryption)
- [RFC 7516 - JSON Web Encryption (JWE)](https://datatracker.ietf.org/doc/html/rfc7516)
- [RFC 7517: JSON Web Key (JWK)](https://www.rfc-editor.org/rfc/rfc7517.html)

## OAuth 2.0

- [OAuth 2.0 - OAuth](https://oauth.net/2/)
- [RFC 6749: The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749)
