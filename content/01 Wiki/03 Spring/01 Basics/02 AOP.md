---
tags: [Spring, AOP]
---

# Spring AOP

## AOP의 필요성

### OOP

- 공통된 목적을 가진 데이터와 동작을 묶어 하나의 객체로 정의
- 객체의 활용으로 재사용성 높음
- 관심사 분리 원칙 준수
  - Spring MVC에서는 `@Controller`, `@Service`, `@Repository`로 계층 분리

#### OOP의 한계

- 트랜잭션, 보안, 로깅 등의 부가 기능은 다수의 클래스에 반복적으로 존재
- 핵심 기능을 구현하는 비즈니스 클래스에 부가 기능 코드가 공존하게 되어 모듈화 힘듬

### AOP

- 비즈니스 로직과 같은 core concerns와 트랜잭션, 보안, 로깅과 같은 cross-cutting concerns를 분리하여 구현
- 반복되는 부가 기능을 따로 모듈화할 수 있음

## AOP 용어

### Aspect

- Cross-cutting concern을 구현한 공통 기능, 부가 기능을 의미
- Advice와 Pointcut을 모듈화, 여러 Advice와 Pointcut이 함께 존재할 수 있음

### Join point

- 클래스 초기화, 객체 인스턴스화, 메서드 호출, 필드 접근, 예외 발생 등 애플리케이션 실행 흐름의 특정 포인트
- Aspect 코드를 추가하여 AOP를 적용할 수 있는 지점들을 의미
- Spring AOP의 경우 프록시 방식으로 메소드 실행 지점으로 제한됨

### Advice

- Join point에서 실행되는 부가 기능에 해당되는 코드
- Aspect를 핵심 기능 메서드의 실행 지점 중 어느 시점에 적용할 지 정의한다.

### Pointcut

- Join point 중 advice가 적용될 위치를 선별한다.
- AspectJ 문법을 사용해서 지정한다.

### Weaving

- Pointcut으로 결정한 타겟의 join point에 advice를 적용하는 것
- 실행 시점에 따른 분류
  - Compile time (e.g. AspectJ compiler)
  - Load time
  - Runtime (e.g. Spring AOP, 그 외 순수 Java AOP 프레임워크)

### AOP proxy

- AOP 구현을 위해 만들어지는 프록시 객체
- Spring AOP에서 사용되는 프록시 종류
  - [JDK 동적 프록시](https://docs.oracle.com/javase/8/docs/technotes/guides/reflection/proxy.html): 기본값, 인터페이스를 프록시화
  - CGLIB 프록시: 인터페이스로 구현하지 않아서 클래스를 프록시화할 때 사용

### Target

- 핵심 기능을 담고 있는 모듈 중 부가 기능을 부여할 대상
- Advice를 받는 객체로 pointcut으로 특정된다.

### Advisor

- Spring AOP에서 사용되는 개념
- 하나의 advice와 하나의 pointcut으로 구성

:::note[references]

- [AOP Concepts](https://docs.spring.io/spring-framework/reference/core/aop/introduction-defn.html)

:::

## @AspectJ Advice

### 순서

기본적으로 순서가 보장되지 않는다.  
`@Aspect` 클래스에 [`@Order`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/annotation/Order.html) 애너테이션을 사용하여 클래스 단위로 분리하여 순서를 적용할 수 있다.

### 종류

#### `@Before`

조인 포인트 실행 이전에 실행

#### `@AfterReturning`

조인 포인트가 정상적으로 값을 반환한 후에 실행

#### `@AfterThrowing`

조인 포인트가 예외를 발생시키는 경우 실행

#### `@After`

조인 포인트가 정상 동작, 예외 상관없이 종료되면 실행

#### `@Around`

조인 포인트의 실행을 조정하며 실행할 수 있다  
`ProceedingJoinPoint`를 사용한다.

- `proceed()` 메서드를 사용하여 조인 포인트 실행 여부, 횟수도 조절 가능
- `proceed(args[])` 메서드로 전달 인자 변환 가능
- `return`문으로 반환값 변환 가능
- `throw`문으로 예외 변환 가능
- `try-catch-finally` 구문 사용 가능

:::note[references]

- [Declaring Advice](https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/advice.html)
- [Appendix A. AspectJ Quick Reference](https://www.eclipse.org/aspectj/doc/released/progguide/quick.html)

:::

:::tip[further reading]

- [Aspect Oriented Programming with Spring](https://docs.spring.io/spring-framework/reference/core/aop.html)
- [Spring AOP APIs](https://docs.spring.io/spring-framework/reference/core/aop-api.html)

:::
