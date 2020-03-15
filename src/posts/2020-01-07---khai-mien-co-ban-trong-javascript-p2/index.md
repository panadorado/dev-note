---
title: "Ôn lại khái niệm cơ bản trong JavaScript (P2)"
date: 2020-01-07 21:20:56 +0700
categories: ["Khái niệm trong JavaScript"]
tags: ["frontend"]
image: './img/blog21.jpg'
author: "Trần Đức Lĩnh"
---

Trong phần [trước](/on-lai-khai-niem-co-ban-trong-javascript-p1) mình đã giới thiệu các khái niệm cơ bản nhất bao gồm *biến, vòng lặp, điều kiện, hàm,...* và nó được minh hoạ bằng ngôn ngữ **JavaScript**. Trong bài tiếp theo, mình muốn tìm hiểu sâu hơn để nắm bắt các khái niệm nền tảng.

<kbd>⇊</kbd>

<small>You don’t know JS</small>

Có vài kiến thức mới mẻ và hữu ích mà trước đây chưa được nhắc đến. Và đây là những kiến thức nền giúp cho những **DEV** có thể tiến xa hơn.

### Values & Types

Có một số *type* có sẵn trong JS:
- string
- number
- boolean
- null
- underfined
- NaN
- object
- symbol (ES6) 

JS cung cấp cho chúng ta một hàm để kiểm tra kiểu dữ liệu thông qua cú pháp **typeof**.

```js
    var val = 0;
    typeof val;
    // "number"
```

**Thú vị**<br/>
Giá trị *null* sẽ trả về kiểu dữ liệu *object* trong khi bạn mong muốn nó trả về kiểu dữ liệu **null** như các kiểu dữ liệu khác.

```js
    var nu_obj = null;
    typeof nu_obj;
    // "object"
```

Cũng lưu ý rằng nếu bạn gán biến là **undefined** và khai báo biến **không có giá trị** đều cho ra kết quả là ***undefined***.

```js
    var un_1;
    typeof un_1;
    // "undefined"
    var un_2 = undefined;
    typeof un_2;
    // "undefined"
```

#### Object

Một object (đối tượng) trong JS là một kiểu dữ liệu phức tạp, nó cho phép chúng ta cài đặt nhiều giá trị thông qua **PROPERTIES**.

```js
    var obj = {
        a: "hello world",
        b: 197,
    };

    console.log(obj.a);
    // "hello world"
    console.log(obj["b"]);
    // 197
```

**PROPERTIES** được truy xuất bằng cách *not notation {console.log(obj.a);}* hoặc *bracket notation {console.log(obj["b"]);}*. Cách dùng thứ nhất có vẻ ngắn gọn hơn nhưng trong một số trương hợp cách dùng thứ hai lại tiện lợi hơn rất nhiều.

```js
    var obj = {
        a: "hello world",
        b: 197
    };

    var b = "a";

    console.log(obj[b]);
    // <. obj[b]
    // .> "hello world
    console.log(obj["b"]);
    // <. obj["b"]
    // .> 197
```

Có một số kiểu dữ liệu thường dùng trong **JS** bao gồm *Array* và *Function*. Chúng là những kiểu dữ liệu con của **Object**.

#### Array

Một *mảng* là một đối tượng chứa các giá trị không dùng đến *key/values*, mà chỉ dùng đến chỉ số *index* để truy cập đến các phân tử.

```js
    var arr = [
        "hello wolrd",
        197
    ];

    console.log(arr[0]);
    // "hello world"
    console.log(arr[1]);
    // 197
    typeof arr;
    // "object"
```

Lưu ý rằng **chỉ số index được bắt đầu từ 0**.

#### Functions

Là một dạng đặc biệt của **object**.

```js
    function func() {
        return 197;
    };

    func.bar = "hello world";

    typeof func;
    // "function"
    typeof func();
    // "number"
    typeof func.bar;
    // "string"
```

#### Built-in Type Methods

Những kiểu dữ liệu đã đề cập phía trên thông thường có (**properties & methods).

Mỗi một kiểu dữ liệu trong **JS** đều thừa kế một *object* nào đó. *Cùng xem ví dụ cụ thể*.

```js
    var buil = "hello world";
    console.log(buil.length);
    // 11
    console.log(buil.toUpperCase());
    // "HELLO WORLD"
```

- Biến **a** là chuỗi, nó sẽ thừa hưởng những phương thức (`methods`) từ cha của nó là **String**.<br/>
Với *string* JS hỗ trợ nhiều thuộc tính (`properties`) như: `.length; .toUpperCase();...`

Tương tự với *Number, Array* JS cũng hỗ trợ nhiều dạng thuộc tính có thể sử dụng bao gồm: *.push(); .pop(); .map(); .filter(); .reduce();*

#### Comparing Values

Có hai dạng so sánh bằng nhau và không bằng nhau. Giá trị trả về luôn là **true** hoặc **false**.

```js
    var comp = 5;
    console.log(comp === 5);
    // true
    console.log(comp != 5);
    // false
```

#### Coercion

Ở bài trước có nhắc sơ qua 2 dạng ép kiểu gồm: **explicit** và **implicit**.

**Explicit** là dạng ép kiểu một giá trị theo cách mình muốn, khi ép kiểu ở dạng này ta dễ dàng nhận biết và chủ động được điều này.

```js
    var expl = "11";
    console.log(Number(expl) + 1);
    // 12
```

**Implicit** là dạng ép kiểu ngầm định bên trong JS, chúng tự giúp chúng ta chuyển đổi kiểu dữ liệu và không thể kiểm soát được những sự thay đổi đó.

```js
    var imp_1 = null;
    var imp_2 = null;
    console.log(ipm_1 + imp_2);
    // 0
    // "number"
```

Đôi lúc chính dạng ép kiểu **Implicit** trả về kết quả không mong muốn.

#### Trutly & Falsy

Trước đó đã đề cập sơ lượt về *Boolean*. Có 2 dạng giá trị gồm **true** và **false**. Ở một số trường hợp JS sẽ ép kiểu một số dữ liệu khác kiểu Boolean, một số ví dụ sẽ trả về `false`.

```js
    // "" (empty string)
    // 0; -0; NaN
    // null; undefined
    //  false
```

Nhưng một số kiểu dữ liệu lại trả về `true`.

```js
    // "text";
    // 197;
    // []; [1,"text",]; (array)
    // {}; {a: 197}; (object)
    // function opp() { // code here }; (function)
```

#### Equality

Có một số toán tử so sánh như: `==; ===; !=; !==` trong đó `!` mang ý nghĩa phủ định (not).

Sự khác nhau giữa `==` và `===` thường được hiểu là:
- **==** so sánh về giá trị.
- **===** so sánh giá trị và kiểu dữ liệu.

Nhưng thực chất vẫn không đúng khi *JS* sẽ tự động ép kiểu dữ liệu để so sánh.

```js
    var str = "197"
    var num = 197;
    str == num;
    // true
    str === num;
    // false
```

Ví dụ trên, JS sẽ ép kiểu dữ liệu khi so sánh giá trị (==) từ dạng ***string == number*** -> ***number == number*** để so sánh. Và kết quả sẽ là *true*.<br/>
Trong khi so sánh (===) sẽ khắc khe hơn khi không cho ép kiểu dữ liệu, khác kiểu dữ liệu nên kết quae sẽ là *false*.

### Variables

Trong các ngôn ngữ lập trình, việc đặt tên biến bao gồm cã tên hàm đều phải theo chuẩn. Phải bắt đầu bằng (**a-z, A-Z, $, _**). Sau đó có thể bao gồm các ký tự bất kỳ hay chữ số từ (**0-9**).

Lưu ý rằng việc đặt tên không được trùng với các từ khoá như: *if; else; case; do; break;...*

#### Functions scopes

Mỗi *function* đều có một tầm vực riêng biệt. Khi ra khỏi tầm vực thì không thể truy cập được nhưng biến bên trong.

*Function scopes* sẽ qui định một phạm vi truy cập và thực thi một hàm.

Có thể sử dụng ***var*** để khai báo một biến thuộc về một *function* hoặc nếu khai báo một biến nằm ngoài tất cả các hàm thì nó sẽ là **global scope**.

#### Hoisting

Hoisting là một hành động mặc định của JS, nó sẽ đưa các khai báo biến lên phần đầu tiên của phạm vi mà biến được sử dụng.

Phần này khá dài dòng, nên mình xin tách ra ở phần riêng, hãy click vào [đây](/){:target="_blank"} để xem kỹ hơn.

Nhưng hãy lưu ý rằng, nếu dựa vào *hoisting* để triển khai là một ý tưởng tồi. Nó có thể dẫn đến nhầm lẫn và không tường minh. Trong bài viết ([Tìm hiểu ES6](/es6){:target="_blank"}) có nói về việc **từ bỏ việc sử dụng `var` và nên dùng `let` và `const`*.

Riêng trong trường hợp với *function* có thể phổ biến hơn và chúng có thể sử dụng **hoisting**.

### Conditionals

Điều kiện trong JS có thể hiểu khái quát là (*if-else*). Bên cạnh đó có thể sử dụng các cú pháp tương tự để làm việc.

- Sử dụng **if-else**.

```js
    if(num == 2) {
        // code here
    }
    else if (num == 4) {
        // code here
    }
    else {
        // code here
    }
```

- Sử dụng **switch-case**.

```js
    switch(num) {
        case 2: 
            // code here 
            break;
        case 4:
            // code here
            break;
        default:
    };
```

- Trong một số trường hợp có thể sử dụng [toán tử 3 ngôi](/ky-thuat-rut-gon-code-trong-javascript){:target="_blank"} để rút gọn code.

```js
    const num = 2;
    (num < 4) ? console.log("true") : console.log("false");
    // true
```

### Strict mode

**Strict mode** được thêm vào ở phiên bản ***ES5***, có chức năng kiểm tra cú pháp, giảm lỗi và tăng tính năng bảo mật.

JS cung cấp và sử dụng *strict mode* với cú pháp

```js
    "use strict";
```

**Lưu ý** khi sử dụng *Strict mode*.
- Không được dùng với biến "undefined".
- Không đặt tên trùng với từ khoá.
- Không đặt 2 thuộc tính trùng nhau trong 1 object.
- Không truyền 2 tham số cùng tên nhau trong 1 function.
- Không định nghĩa trên [cơ số 8](https://developer.mozilla.org/vi/docs/Learn/JavaScript/First_steps/Math){:target="_blank"}.
- Không được dùng câu lênh `with`.
Gán giá trị trong một thuộc tính `read-only` trong đối tượng.
- Thay đổi đối số trong object.
- [EVAL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval){:target="_blank"} không được phép tạo biến.

### Function As Values

Khi khai báo một *Functions* trong JS, kiểu khai báo như thế này đã đề cập đến phần [trước](/on-lai-khai-niem-co-ban-trong-javascript-p1).

Những kiểu khai báo một hàm thông thường được gọi là ***Function Declaration***. Những hàm kiểu như thế này có thể được gọi trước khi khai báo hoặc sau khia khai báo đều được,

```js
    function opp() {
        // code here
    };
```

Trước khi đi sau vào 2 phần dưới, bao gồm hàm có dạng *Anomymous Funtions* và *Named Function Expressions* đều có dạng là ***Functions Expressions***. Khác với những kiểu khai báo thông thường, việc gọi hàm khi được sử dụng phải theo trình tự rõ ràng.

##### Anonymous Functions

Function có dạng ***Anonymous Functions*** hay được gọi là một *hàm ẩn danh*. Thông thường khi khai báo một hàm thì chương trình biên dịch sẽ lưu lại trong bộ nhớ, vì thế có thể gọi phía trên hay ngay phía dưới vị trí khai báo hàm đều được. Nhưng đối với *Anonymous functions* thì được sinh ra khi biên dịch và xử lý tới vị trí của nó.

```js
    var foo = function() {
        // code here
    };
```

- Thông thường *anonymous functions* thường được sử dụng để thực hiện một [callback function](/)

##### Named Function Expressions

Kiểu khai báo có tên và được gán cho biến là một điển hình của ***Functions Expressions***.

```js
    var foo = function opp() {
        // code here
    };
```

### Immediately Invoked Function Expressions (IIFEs)

**IIFEs** này cũng là một *functions*, khi chúng ta khai báo hàm nó sẽ thực thi ngay tức khắc. Cú pháp rất lạ và cũng khó nhớ.

```js
    (function opp() {
        console.log(0.1 + 0.2 == 0.3);
        // false
    })();
```

Trong dấu ngoặc **(...)** bao quanh hàm chỉ là cú pháp để phân biệt với những *functions* thông thường khác.<br/>
Hai kiểu functions bên dưới đều tương tự nhau.

```js
    function foo(){
        // code here
    }
    foo();

    // -------

    (function IIFE() {
        // code here
    })();
```

Lý do tạo ra ***IIFEs*** bởi vì nó sẽ tạo ra một **scope** riêng cho nó. Khi bạn vô tình khai báo một biến trùng với tên khai báo biến bên ngoài thì cũng không ảnh hưởng gì.

```js
    var efi = 10;

    (function IIFE() {
        var efi = 100;
        console.log(efi);
        // 100
    })();

    console.log(efi);
    // 10
```

Và tất nhiên cũng có thể `return` về một giá trị trong **IIFEs**.

```js
    const efi = (function IIFE() {
        return 100;
    })();

    efi;
    // 100
```

### Closure

Phần này là những phần quan trọng và đặc biệt nhất trong *JavaScript*. Tuy vậy nhưng vẫn có nhiều người bỏ qua phần này nhất.<br/>
Trong bài viết [Closures trong JS hoạt động như thế nào](https://viblo.asia/p/closures-trong-javascript-hoat-dong-nhu-the-nao-lA7GKnWWMKZQ){:target="_blank"} sẽ nói rõ hơn về cơ chế của nó. Trong bài viết này, mình chỉ điểm sơ qua những nét cơ bản để có cái nhìn tổng quát và toàn diện hơn.

**Closure** là một cách để nhớ và 