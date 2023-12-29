---
tags: [Java, OOP]
---

# Object-Oriented Prgramming (OOP)

## 클래스와 객체

### [클래스 (Class)](https://en.wikipedia.org/wiki/Class_(computer_programming))

객체 지향 프로그래밍에서 클래스는 객체를 생성하기 위해 초기 속성(필드)과 기능(메서드)을 정의해 놓은 틀을 의미한다.

```java
public class ExampleClass {
    int exampleField;

    void exampleMethod() {
        ...
    }
}
```

### [객체 (Object)](https://en.wikipedia.org/wiki/Object_(computer_science))

클래스 기반의 객체지향 프로그래밍에서 클래스로부터 생성되어 메모리(힙)에 할당된 실체(인스턴스)를 객체라고 한다.  
인스턴스라는 표현이 사실상 객체와 같은 의미로 쓰인다.

```java
ExampleClass exampleInstance = new ExampleClass();
```

:::note[references]

- [Object-oriented programming - Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)
- [What is the difference between an Instance and an Object?](https://stackoverflow.com/questions/2885385/what-is-the-difference-between-an-instance-and-an-object)

:::

## 필드와 메서드

### 필드 (Field)

객체의 속성, 상태 (state)를 표현할 때 사용할 수 있는 변수를 의미한다.

#### 필드와 지역 변수의 초기화

필드의 경우 따로 초기화를 하지 않아도 정해져 있는 기본값으로 초기화가 된다.  
반면에, 지역 변수의 경우 초기화를 하지 않고 사용하는 경우 compile-time error가 발생한다.

:::note[references]

- [Variables](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html)
- [Declaring Member Variables](https://docs.oracle.com/javase/tutorial/java/javaOO/variables.html)
- [8.3. Field Declarations](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.3)

:::

### 메서드 (Method)

객체의 기능, 동작 (behavior)를 표현할 때 사용할 수 있는 명령문의 집합을 의미한다.

#### 메서드 오버로딩 (Overloading)

메서드의 이름이 같더라도 매개변수의 개수, 타입의 차이에 따라 메서드 시그니처 (method signature)가 다른 것으로 인식하여 따로 선언이 가능하다.  
같은 메서드 이름으로 여러 경우의 수를 해결할 수 있는 장점이 있다.

:::note[references]

- [Defining Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)
- [8.4. Method Declarations](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.4)

:::

### `static` 키워드

`static` 키워드를 포함하여 선언한 필드, 메서드는 클래스 변수, 클래스 메서드라고 부르며 각각의 인스턴스와 상관 없이 클래스 자체에 종속이 된다.  
인스턴스가 생성되지 않은 상태에서 사용 가능해야 하기 때문에 클래스 메서드에서는 인스턴스 변수와 메서드를 별도의 객체 참조없이 접근할 수 없고 `this` 키워드도 사용할 수 없다.  
`static` 키워드를 내부 클래스에도 사용할 수 있는데 이 경우 해당 내부 클래스는 클래스 메서드와 비슷하게 인스턴스 변수와 메서드에 접근할 수 없게 되어 외부에 있는 클래스처럼 동작한다.

:::note[references]

- [Understanding Class Members](https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html)
- [Nested Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html)

:::

## 생성자 (Constructor)

### 생성자 정의

생성자는 객체를 생성할 때 초기화를 담당하는 메서드로 클래스명과 같은 이름을 가지고 있으며 리턴값, 리턴 타입이 없다.  
다른 메서드와 마찬가지로 오버로딩이 가능하다.  
생성자를 정의하지 않으면 매개변수가 없는 기본 생성자가 적용된다.

```java
class Example {
    int a;

    Example() {
        System.out.println("매개변수가 없는 생성자");
    }
    
    Example(int a) {
        this.a = a;
        System.out.println("매개변수가 있는 생성자");
    }
}
```

:::note[references]

- [Providing Constructors for Your Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)
- [8.8. Constructor Declarations](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.8)

:::

### `this`, `this()`

- `this`는 현재 인스턴스를 가리키는 키워드로 `.`와 같이 사용하여 현재 인스턴스의 필드나 메서드로 접근할 수 있다.
필드의 이름과 지역 변수의 이름이 겹치는 경우 `this`를 사용하여 구분할 수 있다.
- `this()`는 클래스의 생성자를 호출할 때 사용한다.
반드시 다른 생성자 내부에서 맨 첫 줄에만 사용할 수 있다.

```java
class Example {
    int a;

    Example() {
        this(0);
    }

    Example(int a) {
        this.a = a;
    }
```

:::note[references]

- [Using the this Keyword](https://docs.oracle.com/javase/tutorial/java/javaOO/thiskey.html)
- [15.8.3. `this`](https://docs.oracle.com/javase/specs/jls/se11/html/jls-15.html#jls-15.8.3)

:::

## Nested class

클래스 내부에서 선언된 클래스를 통틀어 nested class라고 부른다.  
그 중 static이 아닌 멤버 클래스는 inner class라고 부른다.  
멤버는 아니지만 클래스 내부에 있는 블록에서 선언된 클래스는 local class라고 부른다.

```java
class Outer {
    class Inner {
        ...
    }
    
    static class StaticNested {
        ...
    }
    
    {
        class Local {
            ...
        }
    }
}
```

### 이너 클래스의 장점

- 클래스를 정의할 때 이 클래스가 어떤 한 클래스에서만 사용된다면 바깥에서 선언할 필요 없이 내부에서 선언해서 사용하는 것이 패키징에 도움이 된다.
- 서로 연관된 작은 클래스를 이너 클래스로 가지고 있으면 코드의 위치가 가까워 코드의 가독성, 유지보수성 측면에서서도 도움이 된다.
- 캡슐화에 도움이 된다. 이너 클래스 자신을 멤버로 가지는 클래스의 `private` 멤버에 접근할 수 있으면서 그 외부의 클래스에서는 이너 클래스에 접근할 수 없게 할 수 있다.

:::note[references]

- [Nested Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html)
- [8.1.3. Inner Classes and Enclosing Instances](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.1.3)
- [Java Inner Class | DigitalOcean](https://www.digitalocean.com/community/tutorials/java-inner-class)

:::

## [상속 (Inheritance)](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming))

상속은 기존의 클래스를 재활용하여 새로운 클래스를 선언하는 방법이다.  
상위 클래스를 상속받은 하위 클래스는 상위 클래스의 멤버를 공유하게 된다.  
Java의 경우 단일 상속만을 허용한다.

```java
class Vehicle {
    ...
}

class Car extends Vehicle {
    ...
}
```

### 포함 관계 (Composition)

상속 관계와 다른 포함 관계도 존재할 수 있다.  
클래스의 멤버로 다른 클래스의 타입을 가진 필드를 선언하는 경우 포함관계라고 볼 수 있다.  
상속 관계는 IS-A 관계, 포함 관계는 HAS-A 관계로 구분할 수 있다.

```java
class Car {
    Engine engine;
    ...
}

class Engine {
    ...
}
```

:::tip[further reading]

- [What is the difference between association, aggregation and composition?](https://stackoverflow.com/questions/885937/what-is-the-difference-between-association-aggregation-and-composition)

:::

### 메서드 오버라이딩 (Overriding)

상위 클래스로부터 상속받은 메서드를 재정의하는 것을 메서드 오버라이딩이라고 한다.  
메서드 오버라이딩의 기본적인 조건은 다음과 같다.

1. 메서드의 반환 타입, 시그니처가 상위 클래스와 일치해야 한다.  
제네릭, covariant 반환 등을 사용하는 경우에는 타입과 관련된 부분이 완전히 일치할 필요는 없고 종속적인 관계가 성립하면 된다.
2. 접근 제어자의 범위가 상위 클래스와 같거나 넓어야한다.
3. 상위 클래스보다 예외 선언이 적어야 한다.

```java
class Person {
    void said() {
        System.out.println("I'm a person.");
    }
}

class Developer extends Person{
    void said() {
        System.out.println("I'm a developer.");
    }
}
```

#### 오버라이딩과 오버로딩의 차이

| 오버라이딩 (Overriding) | 오버로딩 (Overloading) |
| --- | --- |
| 상위 클래스로부터 상속받은 메서드를 재정의하는 것 | 같은 클래스 내에서 이름은 같지만 매개변수의 개수, 타입이 다른 메서드를 선언하는 것 |
| 메서드의 시그니처가 같음 | 메서드의 시그니처가 다름 |
| 런타임 다형성을 구현, 어떤 메서드를 호출할 지 런타임에 결정됨 | 컴파일타임 다형성을 구현, 어떤 메서드를 호출할 지 컴파일타임에 결정됨 |

:::note[references]

- [8.4.5. Method Result](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.4.5)
- [8.4.8. Inheritance, Overriding, and Hiding](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.4.8)
- [Can overridden methods differ in return type?](https://stackoverflow.com/questions/14694852/can-overridden-methods-differ-in-return-type)
- [Overriding vs Overloading in Java | DigitalOcean](https://www.digitalocean.com/community/tutorials/overriding-vs-overloading-in-java)
- [메서드 오버로딩 (Overloading)](#메서드-오버로딩-overloading)

:::

### `super`, `super()`

- `super`는 상위 클래스의 인스턴스를 가리키는 키워드로 상위 클래스의 멤버와 자신의 멤버를 구분할 필요가 있을 때 사용가능하다.
`this`와 동일한 방법으로 사용할 수 있다.
- `super()`는 상위 클래스의 생성자를 호출할 때 사용한다.  
`this()`와 마찬가지로 생성자의 맨 첫 줄에만 사용할 수 있다.  
`super()`를 따로 작성하지 않는 경우 컴파일러가 생성자의 맨 첫 줄에 매개변수가 없는 `super()`를 추가한다.

```java
class Person {
    int level;
}

class Developer extends Person{
    int level;
    
    Developer() {
        super(); // 따로 작성하지 않아도 컴파일러가 추가해준다.
        super.level = 10;
        this.level = 0;
    }
}
```

:::note[references]

- [8.8.7. Constructor Body](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.8.7)
- [8.8.9. Default Constructor](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.8.9)
- [15.11.2. Accessing Superclass Members using `super`](https://docs.oracle.com/javase/specs/jls/se11/html/jls-15.html#jls-15.11.2)

:::

### `Object` 클래스

모든 클래스의 최상위에 존재하는 클래스이다.  
컴파일러는 아무 상속이 없는 모든 클래스에 `extends Object`를 추가하여 `Object` 클래스를 상속받게 한다.  
그렇기 때문에 모든 클래스는 `Object` 클래스가 가진 멤버 메서드를 상속받아 사용 가능하다.

:::note[references]

- [Object (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html)
- [4.3.2. The Class `Object`](https://docs.oracle.com/javase/specs/jls/se11/html/jls-4.html#jls-4.3.2)

:::

:::tip[further reading]

- [Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)

:::

## [캡슐화 (Encapsulation)](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming))

객체의 속성과 기능을 하나의 캡슐로 만들어 데이터를 보호하고 불필요한 데이터 노출을 방지하는 것을 캡슐화라고 한다.

### 패키지

특정한 목적을 공유하는 클래스와 인터페이스를 묶어서 패키지로 만들 수 있다.  
보통 디렉토리 단위로 패키지를 구분하여 사용한다.  
`package`문을 사용하여 패키지를 만들고 소스 파일들을 하나의 패키지로 묶을 수 있다.  
다른 패키지의 클래스를 사용할 때는 `import`문을 사용하여 패키지명을 쓰지 않고 바로 클래스로 접근할 수 있다.

```java
package example.pkg1;

public class ExampleClass {
    ...
}
```

```java
package example.pkg2;

import example.pkg1.ExampleClass;

public class ImportingExample {
    public static void main(String[] args) {
        // 패키지명을 명시하여 클래스에 접근 가능
        example.pkg1.ExampleClass example1 = new example.pkg1.ExampleClass();

        // import했기 때문에 클래스명만으로도 접근 가능
        ExampleClass example2 = new ExampleClass();
    }
}
```

:::note[references]

- [Lesson: Packages](https://docs.oracle.com/javase/tutorial/java/package/index.html)
- [Chapter 7. Packages and Modules](https://docs.oracle.com/javase/specs/jls/se11/html/jls-7.html)

:::

### 접근 제어자 (Access modifiers)

다른 클래스, 패키지에서 클래스의 멤버를 접근 가능한지의 여부를 결정할 때 접근 제어자를 사용한다.  
멤버를 선언할 때 맨 앞에 접근 제어자를 붙여서 사용한다.  
최상위 레벨 클래스의 경우 `public`만 사용 가능하다.

| Modifier | Class | Package | Subclass | World |
| --- | --- | --- | --- | --- |
| `public` | Y | Y | Y | Y |
| `protected` | Y | Y | Y | N |
| *no modifier* | Y | Y | N | N |
| `private` | Y | N | N | N |

```java
public class Example [
    private int a;
    int b;
    protected int c;
    public int d;
}
```

:::note[references]

- [6.6. Access Control](https://docs.oracle.com/javase/specs/jls/se11/html/jls-6.html#jls-6.6)
- [Controlling Access to Members of a Class](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

:::

### [getter, setter 메서드](https://en.wikipedia.org/wiki/Mutator_method)

`private` 필드와 getter, setter 메서드를 사용하여 데이터를 변경하면서도 캡슐화를 유지할 수 있다.  
setter 메서드에 validation 등의 기능을 추가할 수도 있다.

```java
class Example {
    private int positiveNum;

    public int getPositiveNum() {
        return positiveNum;
    }
    
    public void setPositiveNum(int num) {
        if (num > 0) positiveNum = num;
    }
}
```

:::tip[further reading]

- [Why use getters and setters/accessors?](https://stackoverflow.com/questions/1568091/why-use-getters-and-setters-accessors)
- [Are getters and setters poor design? Contradictory advice seen](https://stackoverflow.com/questions/565095/are-getters-and-setters-poor-design-contradictory-advice-seen)
- [JavaBeans - Wikipedia](https://en.wikipedia.org/wiki/JavaBeans)

:::

## [다형성 (Polymorphism)](https://en.wikipedia.org/wiki/Polymorphism_(computer_science))

Java에서는 상위 클래스나 인터페이스 타입의 참조 변수가 하위 클래스 인스턴스를 참조할 수 있다.  
따라서 상위 클래스나 인터페이스 타입의 참조 변수로 여러 종류의 하위 클래스를 다룰 수 있고 이를 다형성이라고 부른다.

### 참조 변수의 타입 변환

클래스나 인터페이스 타입의 참조 변수의 경우에도 타입 변환이 가능하다.  
이 때 기본적인 규칙이 3가지 있다.

1. 서로 상속관계에 있는 클래스나 인터페이스끼리만 타입 변환이 가능하다.
2. 하위 클래스 타입에서 상위 클래스 타입으로 (업캐스팅) 대입되는 경우에는 괄호를 생략해도 알아서 타입이 변환된다.
3. 상위 클래스 타입에서 하위 클래스 타입으로 (다운캐스팅) 변환하는 경우에는 괄호를 꼭 포함해야 하며 참조 변수가 담고 있는 클래스 자체가 변환 대상 클래스와 같거나 그 하위 클래스여야 한다.

클래스나 인터페이스의 타입이 변환된다는 것은 멤버의 수의 변화를 의미한다.  
상위 클래스로 변환될 수록 멤버의 수가 줄어들 수 있다.

```java
public class Example {
    public static void main(String[] args) {
        Developer dev = new Developer();
        Person man = dev; // 업캐스팅의 경우 괄호를 생략해도 타입이 변환된다.
        Developer dev2 = (Developer) man; // 다운캐스팅의 경우 괄호를 포함해야 한다.
    }
}

class Person {
    ...
}

class Developer extends Person {
    ...
}  
```

:::note[references]

- [15.16. Cast Expressions](https://docs.oracle.com/javase/specs/jls/se11/html/jls-15.html#jls-15.16)
- [5.5. Casting Contexts](https://docs.oracle.com/javase/specs/jls/se11/html/jls-5.html#jls-5.5)
- [5.1.6. Narrowing Reference Conversion](https://docs.oracle.com/javase/specs/jls/se11/html/jls-5.html#jls-5.1.6)

:::

### `instanceof` 연산자

`instanceof`는 참조 변수가 가진 값의 타입이 대상 타입으로 캐스팅이 가능한지 확인할 수 있는 연산자이다.

```java
public class Example {
    public static void main(String[] args) {
        Person man = new Person();
        Developer dev = new Developer();

        System.out.println(man instanceof Object); // true
        System.out.println(man instanceof Person); // true
        System.out.println(man instanceof Developer); // false

        System.out.println(dev instanceof Object); // true
        System.out.println(dev instanceof Person); // true
        System.out.println(dev instanceof Developer); // true
        System.out.println(dev instanceof Student); // false

    }
}

class Person {
    ...
}

class Developer extends Person {
    ...
}

class Student extends Person {
    ...
}
```

:::note[references]

- [Equality, Relational, and Conditional Operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)
- [15.20.2. Type Comparison Operator `instanceof`](https://docs.oracle.com/javase/specs/jls/se11/html/jls-15.html#jls-15.20.2)

:::

## [추상화 (Abstraction)](https://en.wikipedia.org/wiki/Abstraction_(computer_science))

여러 클래스들의 공통적인 부분을 추출하여 상위 클래스나 인터페이스로 만드는 것을 추상화라고 부른다.

### `abstract` 제어자

메서드를 선언할 때 `abstract`를 사용하면 추상 메서드가 되며 메서드 바디를 따로 가지지 않는다.  
클래스를 선언할 때 `abstract`를 사용하면 추상 클래스가 되며 그 자체로 인스턴스를 생성할 수가 없다.  
추상 메서드를 하나라도 가진 클래스는 추상 클래스로 선언되어야 한다.  
추상 클래스를 상속받은 클래스가 추상 클래스가 아닌 인스턴스화 가능한 클래스가 되려면 추상 메서드를 모두 구현해야 한다.

```java
abstract class Example {
    abstract void exampleMethod();
}
```

:::note[references]

- [Abstract Methods and Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)
- [8.1.1.1. `abstract` Classes](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.1.1.1)
- [8.4.3.1. `abstract` Methods](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.4.3.1)

:::

### `final` 키워드

`final`을 사용하면 해당 변수, 메서드, 클래스는 변경 또는 확장이 불가하다.

| 위치 | 의미 |
| --- | --- |
| 클래스 | 변경 또는 확장 불가능한 클래스, 상속 불가 |
| 메서드 | 오버라이딩 불가 |
| 변수 | 값 변경이 불가한 상수 |

```java
final class Example {
    final int CONSTANT_FIELD = 0;
    
    final void exampleMethod() {
        ...
    }
```

:::note[references]

- [4.12.4. `final` Variables](https://docs.oracle.com/javase/specs/jls/se11/html/jls-4.html#jls-4.12.4)
- [8.1.1.2. `final` Classes](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.1.1.2)
- [8.3.1.2. `final` Fields](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.3.1.2)
- [8.4.3.3. `final` Methods](https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.4.3.3)

:::

### 인터페이스 (Interfaces)

인터페이스는 상수와 추상 메서드로 이루어져있어 클래스를 만드는 틀이 되는 요소이다.  
추상 클래스보다 추상화의 정도가 높으며 하나의 클래스가 여러 개의 인터페이스를 구현할 수 있다. (다중 상속)  
멤버 필드로는 `public static final` 상수만 존재할 수 있다.  
멤버 메서드로 추상 메서드 (`public abstract`) 외에도 `default`, `static` 메서드가 존재할 수 있다.  
멤버의 접근 제어자는 기본적으로 `public`이며 `static` 메서드에 한해서 `private`로 선언할 수 있다.

```java
interface Interface1 {
    int num; // public static final로 선언됨

    void exampleAbstract(); // public abstract로 선언됨

    default void exampleDefault() { // public default로 선언됨
        ...
    }

    private static void exampleStatic() { // static의 경우 private로 선언 가능
        ...
    }
}

interface Interface2 [
    ...
}

class ExampleClass implements Interface1, Interface2 { // 다중 구현 가능
    void exampleAbstract() { // 인터페이스에서 정의한 추상 메서드들을 모두 구현해야 함
        ...
    }
    ...
}
```

:::note[references]

- [Interfaces](https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html)
- [Chapter 9. Interfaces](https://docs.oracle.com/javase/specs/jls/se11/html/jls-9.html)

:::
