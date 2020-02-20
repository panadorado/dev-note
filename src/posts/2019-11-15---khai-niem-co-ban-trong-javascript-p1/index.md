---
title: "Ôn lại khái niệm cơ bản trong JavaScript (P1)"
date: 2019-11-15 11:00:00 +0700
categories: ["Khái niệm trong JavaScript"]
tags: ["frontend"]
image: './img/blog17.jpg'
author: "Trần Đức Lĩnh"
---

Trước khi tiếp tục theo đuổi con đường lập trình website, bạn cần ôn lại các khái niệm cơ bản nhất về JavaScript. Những điều này giúp bạn thoải mái hơn cho việc lập trình, nó còn giúp bạn hạn chế `bug` trong quá trình xây dựng ứng dụng cho riêng mình.

### 1) Code là gì? (Mã?)
Đây là câu hỏi được hỏi nhiều nhất và cũng là cơ bản nhất khi bắt tay vào học một cái gì đó. 

Code bao gồm tập hợp những đoạn mã với nhau, nhiệm vụ chỉ dẫn cách thức làm việc cho máy tính thông qua những câu lệnh mà bạn tạo. Những đoạn `code` này được lưu trữ dưới dạng `text`.

Ngôn ngữ máy được quy định chặc chẽ về định dạng, cú pháp, tính logic và không thể bị phá vỡ. Ai cố tình hoặc vô ý làm trái ngược sẽ tạo ra `bug`.

### 2) Statements? (Câu lệnh?)
Bao gồm một cụm các từ ngữ (text), con số (number), phương thức (method), toán tử (operator)... mà chúng cùng thực hiện một nhiệm vụ nào đó được gọi là `statements`.

```js
    var a = 5;
    console.log(a);
```

### 3) Expressions? (Biểu thức)
Những câu lệnh được cấu thành biểu thức, một biểu thức được kết hợp giữa các `biến`, `giá trị`, `toán tử`,...

```js
    var a = 10;
    var b = 5;
    console.log( a + b );
```

Trong ví dụ trên, một `expression` bao gồm:
*   **var** là một `variables`.
*   **a, b** là một `variable name`.
*   **=** là một `assignment`.
*   **a + b** là một `expression`
*   **console.log()** là một `function `, hàm này được xây dựng sẵn và chỉ gọi ra để thực thi.

### 4) Executing a Program? (Cách thức thực hiện một chương trình?)
Những biểu thức ở ví dụ trên được máy tính mã hoá dưới dạng mã nhị phân. Quá trình đó được gọi là thông dịch (`interpretor`) hay được gọi là biên dịch (`compiler`).

Các mã nhị phân này được máy tính thực thi từng dòng được gọi là thông dịch (`interpret`).

### 5) Try Javascript Code! (Thử đoạn mã JavaScript nào!)
Cách tốt nhất để bắt tay vào code một cái gì đó là bật trình duyệt của bạn lên gõ `about:blank` và nhấn `F12` hoặc `Ctrl + Shift + I`.

```js
    console.log("Hello world!");
```
Muốn xuống dòng bạn dùng tổ hợp phím `Shift + Enter`. Muốn thực thi bạn chỉ cần nhấn `Enter`.

### 6) Output? (Đầu ra)
Muốn xuất kết quả cho người dùng thấy ta có thể sử dụng.

```js
    document.write();
    alert();
    console.log();
    .innerHTML;
    .textContent;
```

### 7) Input? (Đầu vào)
Cách mà máy tính có thể thu thập dữ liệu của người dùng để thực thi bao gồm sử dụng `HTML`, ta tạo một <form>, bên trong chứa các thẻ  `<input>` để lấy thông tin người dùng. Hoặc sử dụng các hàm xây dựng sẵn trong `JavaScript` bao gồm:

```js
    confirm();
    prompt();
```

### 8) Operators? (Toán tử)
Toán tử là những hành động mà máy tính có thể thực hiện dựa trên các biến và các giá trị bao gồm:

* **Phép gán**: `=`.
* **Phép toán**: `+` , `-` , `*` , `/`.
* **Phép gán kết hợp**: `+=` , `-=` , `*=` , `/=`.
* **Phép tính tăng giảm**: `++` , `--`.
* **So sánh bằng**: `==` , `===`, `!=`, `!==`.
* **So sánh khác**: `<`, `>`, `<=`, `>=`.
* **Logic**: `&&`, `||`.
* **Truy cập thuột tính đối tượng**: `objectName.property` hoặc `objectName["property"]`.

### 9) Values & Types (Giá trị & kiểu)
Là những con số, chuỗi, mảng dữ liệu mà chúng ta thao tác.

```js
    "Text";

    45;

    true;
    false;
```
Ngoài những kiểu dữ liệu quen thuộc như *string*, *number*, *boolean* thì có những kểu dữ liệu phức tạp khác như *array*, *object*, *function*,...

##### Cách ép kiểu dữ liệu (Converting type)
Có một số trương hợp ta cần phải ép kiểu dữ liệu (`coercion data types`) từ dạng *string* sang *number* hoặc ngược lại.

```js
    //(String + Number)
    a = "10";
    b = 1;
    console.log( a + b );
    // 101.

    //(Number + Number)
    a = "10";
    b = 1; 
    c = Number(a); 
    console.log( c + b );
    //11
```
Như ví dụ ở trên, kiểu chuyển đổi dữ liệu từ *string* sang *number* là *kiểu chuyển đổi dữ liệu rõ ràng* (`explicit coercion`).

Một số kiểu dữ kiệu sẽ *tự động chuyển đổi không kiểm soát* được gọi là (`implicit coercion`). Bởi vì tính chất không minh bạch của nó mà chúng ta dễ gây hiểu nhầm và dễ gây sai sót trong lập trình.

##### Các kiểu chuyển đổi dữ liệu tự động (implicit corercion) bao gồm:
1. **null - null** => **true**
1. **underfined - underfined** => **true**
1. **Number - (String)** => **Number - Number**
1. **(Boolean) - Number** => **Number - Number**
1. **(Boolean) - (String)** => **Number - Number**
1. **Number - (Object)** <small>`tham chiếu Object`</small> => **Number - Number**
1. **String - (Object)** => **String - String**
1. **Other** => **false**

### 10) Code Comments (Ghi chú mã)
Comments là một cách chúng ta giải thích cách thức code hoạt động như thế nào. Nhưng tránh việc lạm dụng comment quá nhiều trong `project` gây xáo trộn bố cục code.

Khi sử dụng comments chúng ta cần lưu ý vài điều như sau:
*   Code không comments là code tối ưu, quá rõ ràng đến mức người khác đọc hiểu và không nói gì thêm.
*   Có quá nhiều comment cho một đoạn code hoặc một function nào đó. Có lẽ code chưa tối ưu triệt để hoặc quá phức tạp đến mức phải giải thích dài dòng.
*   Comment chỉ để giải thích **bởi vì**, **tại vì**, chứ không để đặt câu hỏi **cái gì**, **tại sao**.

Có 2 dạng comments bao gồm:
```js
    // Single-line comment

    /* Multiline
        comment.*/
```

### 11) Variables (Biến)
Các phần mềm đều cần biến để theo dõi các giá trị bởi vì chúng thường biến đổi những phương pháp *toán tử* hay *phép gán* theo thời gian.

**Hãy lưu ý**
Một số ngôn ngữ lập trình *buộc* chúng ta phải khai báo một biến để lưu lại kiểu dữ liệu cụ thể như *number* hoặc *string*. Đó được gọi là **static-typing**. Buộc chúng ta phải truyền đúng kiểu dữ liệu và ngăn chặn sự sai sót khi truyền dữ liệu lung tung.

Số còn lại sử dụng kiểu *weak typing* (**dynamic-typing**). Nó cho phép một biến có thể lưu nhiều kiểu dữ liệu khác nhau qua từng thời điểm khác nhau.
**JavaScript** được thiết kế như một **dynamic type**, vì thế đừng than phiền và chê bai như một dạng ngôn ngữ *sida*.

### 12) Blocks (Khối)
Một block bao gồm những nhóm lệnh đi cùng nhau thực hiện một câu lệnh nào đó.
Thông thường, một *block* được xác định bên trong dấu ngoặc nhọn `{...}`.

```js
    function op(a) {
        a += 2;
        console.log(a);
        // 17
    };

op(15);
```

Một block thường xuất hiện nhiều trong các từ khoá như *if, for, do-while, function,...*

### 13) Conditionals (Điều kiện)
Có vài cách để thể hiện một số điều kiên trong JavaScript, trong đó có sử dụng câu lệnh *if-else* là cách thông dụng nhất.

```js
    var a = 10;
    if (a <= 10) {
        console.log(" TRUE ");
        // TRUE
    }
    else {
        console.log(" FALSE ");
    }
```

Đoạn code phía trên thực thi theo kiểu nếu **if** đúng (true) thì thực hiện đoạn code bên trong, ngược lại **else** sẽ thực hiện việc đó nếu **if** sai (false).

### 14) Loops (Lặp)
Công việc lặp đi lặp lại nhiều lần khi điều kiện hợp lệ được gọi là **vòng lặp**.

```js
    var a = 1;
    while (a < 10) {
        console.log(a++);
        // 1,2,3,..10
    };

    for( i=1; i<10; i++)
    {
        console.log(i);
        // 1,2,3,..10
    }
```

Theo như ví dụ trên thì hai vòng lặp này đều ra kết quả như nhau, nhưng câu hỏi đặt ra là khi nào dùng **while**, khi nào dùng **if**??

*   Khi ta không biết chính xác số lần lặp lại thì ta dùng **while**.
*   Khi ta biết số lần lặp lại bao nhiêu lần ta dùng **if**.

Ngoài ra còn có **do while**, **for/in**, **for/Each**, **for/of**...

Các phép tính toán phức tạp ta cần dùng **break** và **continue**.
*   **Break** buộc thoát ngay khỏi vòng lặp khi thoả mãn điều kiện nào đó (Hay xuất hiện trong **switch/case**).
*   **Continue** loại bỏ một bước lặp, tất cả các đoạn code bên dưới *continue* sẽ không thực hiện mà nó sẽ nhảy qua lệnh mới luôn.

### 15) Functions (Chức năng)
Khi nhu cầu sử dụng lặp đi lặp lại một chức năng gì đó, ta chỉ cần gọi nó ra và nó sẽ trả về kết quả cuối cùng.

Thông thường một hàm thường có **tham số** và **giá trị trả về**.
```js
    function op(a) {
        a ++;
        return a;
    };

    console.log(op(10));    //11
    console.log(op(20));    //21
    console.log(op(30));    //31
```

<hr>
<h3 class="text-center"><u>Ngoài ra</u></h3>

##### Scope (Phạm vi)

Khái niệm phạm vi truy cập biến trong một hàm.


**Global Scope**

Hiểu đơn giản là khi ta đặt ta đặt một biến bên ngoài, phạm vi này thật rộng lớn.

```js
    const a = 10;
    // global scope
```

**Local Scope**

Phạm vi biến nằm bên trong dấu ngoặc nhọn.

```js
    if (a > 10) {
        // local scope
    }
```

**Function scope**

Mỗi *functions* đều có một phạm vi riêng và chúng ta chỉ truy xuất được những biến bên trong phạm vi đó, khi rời khỏi phạm vi của *functions* đó, những biến bên trong nó sẽ không còn được truy cập nữa.

```js
    function op () {
        // function scope
    }
```

*   *Ta có thể đặt tên biến giống nhau ở hai functions khác nhau.*

**Lexical Scope**

Một function bên trong một function khác.

```js
    function op () {
        // function scope
        function op_1 () {
            // lexical scope
        }
    }
```

**Scope Chain**

Được thiết lập cho mỗi scope một function nhất định, mỗi function lại có một *nested scope* riêng, mỗi function được định nghĩa bên trong một function khác đều là *local scope* được liên kết với function bên ngoài, sau đó tìm kiếm mở rộng ra bên ngoài (variables, objects, functions) cho tới khi nào chúng được tìm thấy.

```js
    function op() {
        var outer = 'Hello World!';
        return function () {
            alert(outer);
        }
    }
    var f = op();
    f();
    // Hello World!
```

**Closures**

Closures có quan hệ rất chặt chẽ với *Lexical Scope*, bên trong scope, chúng ta có thể truy cập bất cứ thứ gì đã khai báo ở scope cha.

```js
    function clos (name) {
	const x = name;	
	return function () {
		return x;
        };
    };

    a = clos("Linh");
    console.log(a());
    //Linh
```

<!-- https://viblo.asia/p/tim-hieu-sau-hon-ve-scope-javascript-Qbq5QrRwKD8 -->

<hr>
##### Tổng quan

Chúng ta vừa ôn lại một nùi kiến thức và vài khái niệm + thuật ngữ trong lập trình. Điều đó rất cần thiết cho chúng ta muốn phát triển bản thân sau này nếu muốn theo nghành IT này.