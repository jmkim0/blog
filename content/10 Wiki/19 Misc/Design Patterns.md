---
tags:
  - DesignPattern
---
# Design Patterns

## Builder Pattern

- [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern)

## Factory Method Pattern

- [Factory Method Pattern](https://en.wikipedia.org/wiki/Factory_method_pattern)
- [List.of](<https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html#of()>), [Stream.of](<https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Stream.html#of(T...)>)와 같이 생성자가 아닌 static factory method로 객체를 생성
- [SPI (Service Provicer Interface)](https://en.wikipedia.org/wiki/Service_provider_interface)에서 많이 사용
    - e.g. `Class.forName("com.mysql.jdbc.Driver")`

## Strategy Pattern

- [Strategy Pattern](https://en.wikipedia.org/wiki/Strategy_pattern)

## Singleton Pattern

클래스를 하나의 인스턴스로만 사용하는 패턴

### 문제점

- 추가적인 코드가 필요 (큰 문제점은 아님)
- 클라이언트가 구체 클래스에 의존한다. (tight coupling)
    - 테스트할 때에도 불편함이 있다.
- private 생성자를 사용하여 자식 클래스를 만들기 어렵다.
- 속성을 공유하게 되어 멀티쓰레드 환경에서 문제가 생길 수 있다.
    - 가급적 무상태, 읽기만 가능하게 구현해야 한다.
- 애플리케이션 초기 구동 시 인스턴스를 생성하게 되어 여러 싱글턴 클래스가 있는 경우 구동 시간이 오래걸릴 수 있다.
    - Lazy initialization을 구현하면 해결할 수 있다.

### *References*

- [Singleton pattern](https://en.wikipedia.org/wiki/Singleton_pattern)
- [What are drawbacks or disadvantages of singleton pattern?](https://stackoverflow.com/questions/137975/what-are-drawbacks-or-disadvantages-of-singleton-pattern)

### *Further Reading*

- [Initialization-on-demand holder idiom - Wikipedia](https://en.wikipedia.org/wiki/Initialization-on-demand_holder_idiom)

## Front controller

- [Front Controller](https://en.wikipedia.org/wiki/Front_controller)
