---
tags: [Spring, DI, AOP]
---

# Spring Framework 기초

## [Framework](https://en.wikipedia.org/wiki/Software_framework)

어떤 특수한 용도의 소프트웨어를 제작할 때 필요한 기본적인 기능들을 포함한 틀이 되는 추상화된 소프트웨어를 말한다.  
단어 자체의 뜻처럼 소프트웨어의 뼈대, 골격이 된다.

### Framework의 장점

- 효율적으로 코드 작성 가능
- 정해진 규약이 있어 관리에도 용이

### Framework의 단점

- Framework마다 정해진 규약을 학습해야 함
- 자유도가 떨어짐

### [Library](https://en.wikipedia.org/wiki/Library_(computing))와의 차이

일반적인 라이브러리와 프레임워크는 차이점이 존재한다.  
라이브러리는 개발자가 애플리케이션의 흐름에 맞추어 사용할 수 있고 프레임워크는 개발자가 프레임워크가 정한 애플리케이션의 흐름을 따라가게 된다. ([Inversion of Control, IoC](https://en.wikipedia.org/wiki/Inversion_of_control))  
필요에 따라 프레임워크는 라이브러리들을 포함할 수 있다.  
라이브러리와 프레임워크가 반드시 구분되는 것은 아니고 프레임워크이면서 라이브러리가 될 수도 있지만 담고 있는 의미가 다른 것을 이해하면 된다.

## Spring Framework

Java로 웹 애플리케이션을 개발하기 위한 프레임워크 중 하나다.

### Spring Framework의 장점

- [POJO (Plain Old Java Object)](https://en.wikipedia.org/wiki/Plain_old_Java_object)
- [IoC (Inversion of Control)](https://en.wikipedia.org/wiki/Inversion_of_control) / [DI (Dependency Injection)](https://en.wikipedia.org/wiki/Dependency_injection)
- [AOP (Aspect-Oriented Programming)](https://en.wikipedia.org/wiki/Agent-oriented_programming)
- Java 자체의 장점 - 정적 타입 언어, OOP

### Java 웹 애플리케이션의 역사

1. [JSP Model 1](https://en.wikipedia.org/wiki/JSP_model_1_architecture)
2. [JSP Model 2](https://en.wikipedia.org/wiki/JSP_model_2_architecture) (servlet을 따로 분리)
3. [Spring MVC](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html) (프레임워크화)
4. [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/) (설정 간소화)

:::tip[further reading]

- [Jakarta Servlet - Wikipedia](https://en.wikipedia.org/wiki/Jakarta_Servlet)
- [Web container - Wikipedia](https://en.wikipedia.org/wiki/Web_container)
- [Apache Tomcat - Wikipedia](https://en.wikipedia.org/wiki/Apache_Tomcat)
- [Apache Tomcat®](https://tomcat.apache.org/)

:::

### POJO (Plain Old Java Object)

- 순수한 자바 객체라는 의미
- 순수한 자바 객체 내에 다른 기술, 환경에 종속되는 코드가 없도록 하는 기법
- 객체지향적인 설계가 용이해진다.
- 특정 기술에 대한 지식보다 JDK의 API와 OOP에 대한 이해가 중요
- Spring Framework에서는 POJO를 지향하기 위해 IoC/DI, AOP, PSA라는 개념을 사용한다.

### IoC (Inversion of Control) / DI (Dependency Injection)

- IoC는 흐름을 제어하는 주도권이 역전된 형태를 의미한다.
  - 자바 웹 애플리케이션의 경우 서블릿이 주도권을 가지고 있는 것이 아니라 서블릿 컨테이너가 주도권을 가지게 되어 IoC 개념이 적용된다.
- DI는 IoC 개념을 객체 단계에서 구체화시킨 것으로 객체 간의 관계를 느슨하게 한다.
- 클래스 내부에서 `new`를 사용하여 참조할 클래스의 객체를 직접 생성하는 경우 두 클래스 간에 의존관계가 성립하게 된다.
- 클래스 내부에서 객체를 직접 생성하지 않고 생성자의 매개변수 등을 통해 외부에서 다른 클래스의 객체를 전달받는 경우를 의존성 주입이라고 한다.
- `new`를 사용하여 해당 타입의 객체를 직접 생성할 때 클래스가 강하게 결합(tight coupling)되어있다고 한다.
- 인터페이스와 같이 일반화된 구성 요소에 의존하는 경우 클래스가 느슨하게 결합(loose coupling)되어있다고 한다.
  - 느슨한 결합을 사용하는 경우 요구 사항이 변경될 때 유연하게 대처할 수 있다.
- DI는 클래스 간의 강한 결합을 느슨한 결합으로 바꾼다.
- Spring 프레임워크에서는 Config 클래스를 사용하여 DI를 프레임워크 단계에서 해준다.

:::tip[further reading]

- [SOLID - Wikipedia](https://en.wikipedia.org/wiki/SOLID)
- **Java Reflection API**
  - [Trail: The Reflection API](https://docs.oracle.com/javase/tutorial/reflect/index.html)
  - [Using Java Reflection](https://www.oracle.com/technical-resources/articles/java/javareflection.html)
  - [java.lang.reflect (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/reflect/package-summary.html)

:::

### AOP (Aspect-Oriented Programming)

비즈니스 로직이 핵심 관심 사항(core concern)이라면 로깅, 보안, 트랜잭션, 모니터링, 트레이싱과 같은 공통적으로 사용되는 기능은 공통 관심 사항(cross-cutting concern)이라고 한다.  
이 공통 관심 사항을 분리하여 각 관점(aspect)에 따라 바라보는 것이 AOP다.

#### AOP의 장점

- 코드의 간결화
- OOP 원칙 준수 (단일 책임 원칙)
- 코드의 재사용성 향상

### [PSA (Portable Service Abstraction)](https://en.wikipedia.org/wiki/Service_abstraction)

애플리케이션에서 서비스를 이용할 때 기능에 접근하는 방식을 추상화하여 일관되게 유지하여 여러 서비스를 유연하게 변경하며 사용할 수 있게 한 것이 PSA이다.  
애플리케이션에서 사용하는 서비스가 변경되더라도 최소한의 수정으로 변경된 요구 사항을 반영할 수 있게 한다.  
트랜잭션 서비스, 메일 서비스, Spring Data 서비스 등에 PSA가 적용된다.  
e.g. JDBC가 MySQL, Oracle, Postgres 등 여러 RDBMS 서비스를 변경하며 접속할 수 있다.

## 아키텍처 (Architecture)

시스템, 소프트웨어, 하드웨어 등을 구성하는 구조와 방식을 아키텍처라고 부른다.

### [시스템 아키텍처 (Systems architecture)](https://en.wikipedia.org/wiki/Systems_architecture)

여러 소프트웨어와 하드웨어가 시스템을 이루는 경우의 아키텍처  
e.g. 클라이언트 - 로드 밸런서 - 애플리케이션 서버 - 데이터 서버

### [소프트웨어 아키텍처 (Software architecture)](https://en.wikipedia.org/wiki/Software_architecture)

소프트웨어의 구성을 나타내는 아키텍처

#### REST API 기반 계층형 웹 애플리케이션 아키텍처

1. API layer (presentation layer)  
  클라이언트의 요청을 받는다.
2. Service layer  
  API 계층에서 전달 받은 요청을 도메인의 요구 사항에 맞게 비즈니스 로직을 구현하여 처리한다.
3. Data access layer  
  비즈니스 계층에서 처리할 데이터와 처리된 데이터를 데이터베이스 등에 저장한다.

## Spring Boot

Spring Framework를 설정할 때의 복잡함을 해결하기 위해 생겨난 Spring Project 중 하나다.  
Spring Framework의 구성은 Spring Boot에 맡기고 개발자는 비즈니스 로직에만 집중할 수 있게 한다.

### Spring Boot를 사용하는 이유

- XML 기반의 복잡한 설계 방식을 사용하지 않아도 된다.
- Starter 모듈 구성 기능을 통해 의존 라이브러리를 자동으로 구성해 준다.
- 애플리케이션 설정을 자동으로 구성해 준다.
- 프로덕션급 애플리케이션을 손쉽게 빌드할 수 있다.
- 내장된 WAS를 사용하여 손쉽게 배포할 수 있다.

### [Spring Initializr](https://start.spring.io/)

스프링 부트 프로젝트를 웹에서 쉽게 생성할 수 있다.

:::note[references]

- [Spring Boot](https://spring.io/projects/spring-boot)

:::
