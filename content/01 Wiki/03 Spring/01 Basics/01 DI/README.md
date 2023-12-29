---
tags: [Spring, DI]
---

# Dependency Injection in Spring

## Spring IoC Container

![The Spring IoC container](container-magic.png)

```java
// create and configure beans
ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");

// retrieve configured instance
PetStoreService service = context.getBean("petStore", PetStoreService.class);

// use configured instance
List<String> userList = service.getUsernameList();
```

[`ApplicationContext`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/ApplicationContext.html)가 컨테이너고 서비스 클래스를 Bean으로 정의하면 `getBean` 메서드로 인스턴스를 불러올 수 있게 된다.  
실제 애플리케이션 코드 내에서는 IoC 원칙을 지키기 위해 Spring API의 일부인 `getBean` 사용을 지양해야 한다. 대신 autowiring을 활용한다.

:::note[references]

- [Using the Container](https://docs.spring.io/spring-framework/reference/core/beans/basics.html#beans-factory-client)

:::

## Beans

스프링 컨테이너가 관리하는 자바 객체를 Bean이라고 부른다.  
[`@Bean`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Bean.html) 어노테이션을 메서드에 사용하면 해당 메서드가 반환하는 객체가 Bean으로 컨테이너에 등록된다.

:::tip[further reading]

- [JavaBeans - Wikipedia](https://en.wikipedia.org/wiki/JavaBeans)

:::

## Bean scopes

- [Bean Scopes](https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html)
- [The Singleton Scope](https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html#beans-factory-scopes-singleton)

:::tip[See Also]

- [Singleton Pattern](../../../99%20Misc/Design%20Patterns.md#singleton-pattern)

:::

## Annotation 기반 설정 사용 시 주의점

### `@Bean`과 `@Configuration` 사용

`@Bean` 메서드 자체가 dependency injection을 나타내고 있어서 별도로 `@Autowired`가 필요없다.

### `@Component`와 `@ComponentScan` 사용

`@Autowired`가 필요할 수 있다.  
생성자가 하나인 경우 알아서 autowiring이 가능해서 `@Autowired`가 필요 없다.

:::note[references]

- [Classpath Scanning and Managed Components](https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html)
- [Java-based Container Configuration](https://docs.spring.io/spring-framework/reference/core/beans/java.html)

:::
