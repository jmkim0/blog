---
tags:
  - RDB
  - MySQL
---
# Relational Databases

## [데이터베이스]

[데이터베이스]: https://en.wikipedia.org/wiki/Database

### [RDB]

[RDB]: https://en.wikipedia.org/wiki/Relational_database

#### 데이터 저장 (Storage)

- SQL을 사용하여 데이터를 테이블에 저장

#### 스키마 (Schema)

- 고정된 형식의 스키마 데이터 속성별로 열(column)에 대한 정보를 미리 정해두어야 함
- 스키마를 수정하려면 데이터베이스 전체를 수정하거나 down-time이 필요

#### 쿼리 (Querying)

- 테이블의 형식, 테이블 간의 관계에 맞춰서 SQL과 같이 구조화된 쿼리 언어로 요청

#### 확장성 (Scalability)

- 수직적 확장
- 높은 메모리, CPU 사용
- 상대적 고비용
- 여러 서버에 걸쳐서 구성하기 복잡함

#### 사용 분야

- ACID 성질을 준수해야 하는 경우 (e.g. 전자상거래 등 금융서비스)
- 사용되는 데이터가 구조적이고 일관적인 경우

### [NoSQL]

[NoSQL]: https://en.wikipedia.org/wiki/NoSQL

#### 데이터 저장 (Storage)

- Key-value, document, wide-column, graph 등의 방식으로 저장

#### 스키마 (Schema)

- 동적으로 스키마의 형태를 관리 행을 추가할 때 새로운 열을 추가할 수 있고 개별 속성에 대해서 모든 열에 대한 데이터를 반드시 입력할 필요가 없음

#### 쿼리 (Querying)

- 데이터 그룹 자체를 조회
- 구조화되지 않은 쿼리 언어로도 요청 가능

#### 확장성 (Scalability)

- 수평적 확장
- 클라우드 서비스, 범용 하드웨어 사용
- 상대적 저비용
- 여러 서버에 걸쳐서 구성이 가능

#### 사용 분야

- 구조가 거의 또는 전혀 없는 대용량 데이터를 저장하는 경우
- 클라우드 컴퓨팅, 스토리지를 활용하는 경우
- 데이터 구조를 자주 업데이트하는 경우

## [SQL]

[SQL]: https://en.wikipedia.org/wiki/SQL

### [SQL syntax]

[SQL syntax]: https://en.wikipedia.org/wiki/SQL_syntax

### 분류

- [DML](https://en.wikipedia.org/wiki/Data_manipulation_language)
- [DQL](https://en.wikipedia.org/wiki/Data_query_language)
- [DDL](https://en.wikipedia.org/wiki/Data_definition_language)
- [DCL](https://en.wikipedia.org/wiki/Data_control_language)
- [TCL](https://en.wikipedia.org/wiki/SQL_syntax#Transaction_controls)

## [ACID]

[ACID]: https://en.wikipedia.org/wiki/ACID

데이터베이스 내에서 [트랜잭션(transaction)]의 안전성을 보장하기 위해 필요한 성질들

[트랜잭션(transaction)]: https://en.wikipedia.org/wiki/Database_transaction

- Atomicity
- Consistency
- Isolation
- Durability

### *Further Reading*

- [CAP theorem - Wikipedia](https://en.wikipedia.org/wiki/CAP_theorem)

## [데이터베이스 정규화 (Database normalization)]

[데이터베이스 정규화 (Database normalization)]: https://en.wikipedia.org/wiki/Database_normalization

- Data redundancy를 줄이고 data integrity를 강화시키도록 데이터베이스를 설계
- 데이터를 변경시키는 경우 발생할 수 있는 anomaly를 방지

## MySQL

### MySQL on Mac

```sh
# 설치
brew install mysql

# 서비스 시작
brew services start mysql

# 접속 (로컬)
mysql -u root
```

#### *References*

- [mysql](https://formulae.brew.sh/formula/mysql)

### MySQL documentation

- [MySQL 8.0 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)
