---
tags: [Spring, Transaction]
---

# Transactions in Spring

## [트랜잭션](https://en.wikipedia.org/wiki/Database_transaction)

### [ACID](https://en.wikipedia.org/wiki/ACID)

데이터베이스 내에서 트랜잭션의 안전성을 보장하기 위해 필요한 성질들

- Atomicity
- Consistency
- Isolation
- Durability

### Transactions in H2

#### Commit

- [`COMMIT`](https://www.h2database.com/html/commands.html?highlight=rollback&search=rollback#commit)
- [`JdbcConnection.commit()`](https://www.h2database.com/javadoc/org/h2/jdbc/JdbcConnection.html#commit--)

#### Rollback

- [`ROLLBACK`](https://www.h2database.com/html/commands.html?highlight=rollback&search=rollback#rollback)
- [`JdbcConnection.rollback()`](https://www.h2database.com/javadoc/org/h2/jdbc/JdbcConnection.html#rollback--)

## 선언형 트랜잭션 관리

- [Using `@Transactional`](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)
- [`@Transactional`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/annotation/Transactional.html)
- [Transaction Propagation](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html)

### AOP

[`TransactionInterceptor`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/interceptor/TransactionInterceptor.html)

[`TransactionManager`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/TransactionManager.html)

[`NameMatchTransactionAttributeSource`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/interceptor/NameMatchTransactionAttributeSource.html)

## Event handling

- [Standard and Custom Events](https://docs.spring.io/spring-framework/reference/core/beans/context-introduction.html#context-functionality-events)
- [Transaction-bound Events](https://docs.spring.io/spring-framework/reference/data-access/transaction/event.html)
- [The `@Async` annotation](https://docs.spring.io/spring-framework/reference/integration/scheduling.html#scheduling-annotation-support)
- [Scheduling Tasks](https://spring.io/guides/gs/scheduling-tasks/)

## JTA를 이용한 분산 트랜잭션

- [MySQL :: MySQL 8.0 Reference Manual :: 17 Replication](https://dev.mysql.com/doc/refman/8.0/en/replication.html)
- [Java Transaction API](https://www.oracle.com/java/technologies/jta.html)
- [X/Open XA - Wikipedia](https://en.wikipedia.org/wiki/X/Open_XA)
- [Atomikos Documentation wiki](https://www.atomikos.com/Documentation/WebHome)
- [Setting up JPA with JTA Transaction Management](https://docs.spring.io/spring-framework/reference/data-access/orm/jpa.html#orm-jpa-jta)

:::tip[further reading]

- [Apache NiFi Documentation](https://nifi.apache.org/docs.html)

:::
