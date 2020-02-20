---
title: "Tìm hiểu về ES6"
date: 2019-09-16 21:00:43 +0700
categories: ["JavaScript"]
tags: ["frontend"]
image: './img/blog7.jpg'
author: "Trần Đức Lĩnh"
---

**(ES6)** viết tắt cho ***E***uropean ***C***omputer ***M***anufacturer's ***A***ssociation **Script (6)**, sau đó đổi thành `ECMAScript 20xx (ES20xx)`. Là một tập hợp kỹ thuật nâng cao của JavaScript, và nó cũng là chuẩn mực, quy định, đồng nhất 1 kiểu mà mọi người phải làm theo.

<!-- ![image-title-here](/assets/img/img-post/es6/es6.jpg){:width="100%"} -->

***

**9/10 Tính năng quan trọng trong** *ECMAScript6*
1. let-const
2. Arrow Function
3. Template Strings
4. Object literals
5. Destructuring
6. Rest Spread
7. Default value in parameter
8. Class
9. Promise
10. Multi-line String in ES6 (**Không đề cập đến**)

***
### 1. let-const

#### ***- let***

* `let` có nghĩ là 1 phạm vi nhất định (block-scope), `const` cũng vậy.
* Còn `var` có nghĩa là 1 hàm (function-scope).

```js
    // Tran Duc Linh
    for (let i = 0; i < eXample.length; i++) {
        //block
    }
```

* Tầm vực của biến `let` chỉ có hiệu lực bên trong chứa nó.

### ***- const***

* Không thể gán giá trị mới cho `const` sau khi khai báo trong khi điều kiện này lại có thể với `let`.

* Biến `const` mang ý nghĩa là `"constant" ~ "không thay đổi"` không phải là `"immutability" ~ "bất biến"`. Vì vậy các biến có kiểu là `object` hay `array` vẫn có thể biến đổi bên trong chúng.

```js
    // Tran Duc Linh
    const eXample = [1, 2, 3];
    eXample[0] = 7;
    console.log(eXample[0]); // 7
```

* ***NHƯNG*** muốn `const` mang ý nghĩa là `"bất biến"` thì xem ví dụ bên dưới.

```js
    // Tran Duc Linh
    const eXample = [1, 2, 3];
    Object.freeze(eXample);
    eXample[0] = 7;
    console.log(eXample[0]); // 1
```

* Hãy sử dụng `Object.freeze()` để có được tính bất biến.

*  **Dùng `const` cho tất cả khai báo biến vì giúp hạn chế các trường hợp `VÔ TÌNH` thay đổi giá trị của biến. Chỉ dùng `let` trong trường hợp bất khả kháng ``(for, while, do-while)``, tránh xa `var`.**

***

### 2. Arrow Function

* Nếu dùng *`this.`* thì `Arrow Function` sẽ rất hữu dụng.
* Ngoài ra giúp mã nguồn dể đọc hơn.

```js
        //Tran Duc Linh
        const fn = (a, b) => {
            console.log(a + b); // 10
        }
        fn(5, 5);
```

***

### 3. Template String

* Thông thường `Template String` dùng để ghép nối `chuỗi` trong JavaScript.
* Thay thế cho toán tử `+` hoặc phương thức `.concat`.

```js
         //Tran Duc Linh
        const name = 'Linh';
        let day = new Date();
        console.log(`${name}, ${day.getFullYear()}`);
        // Linh, 2019
```

### 4. Object literals

* Cho phép khai báo tắt các thuộc tính của object với biến cùng tên, khai báo phương thức cho object.
* **Nếu dùng** ***Arrow Function***, `this` sẽ không trỏ đến `var`. Trong khi `this` chỉ trỏ trong tầm vực gần với nó nhất.

```js
        //Tran Duc Linh
        var year = new Date();
        var People = {
            name : 'Linh',
            age : 1997,
            getYear() {
                return year.getFullYear() - this.age;
            }
        }
        console.log(People.getYear()); // 22
```

### 5. Destructuring

* Tách biến từ thuộc tính của đối tựng hoặc mảng, chuỗi.
* Có thể sử dụng `for` để duyệt.

```js
        //Tran Duc Linh
        var user = {name : 'Linh', age : 22};
        var {name} = user;
        var {age} = user;
        console.log(name, age); // Linh 22
```

```js
        // Tran Duc Linh
        var nick = ['Hello', 'Cat'];
        var[a, b, c] = nick;
        var[char_1, char_2] = a;
        console.log(a, b, c, char_1, char_2);
        //Hello Cat underfined H e
```

### 6. Rest-Spread

#### ***- rest***

* `Rest` được bổ sung trong `Destructuring`, dùng (`...`) để hiển thị.
* Có thể nhận nhiều tham số `Object` .

```js
        //Tran Duc Linh
        var [first, second, ...others] = [1, 2, 3, 4, 5];
        console.log(first, second, others);
        //first =  1;
        //second = 2;
        //others = [3, 4, 5];
```

#### ***- spread***

* Thao tác ngược lại với `REST`, giúp gọp lại thành mảng mới.
* Hữu dụng khi thay thế các `thao tác` đối với mảng.

* Ví dụ hàm ***`.concat()`*** 

```js
        //Tran Duc Linh
        var a = [1, 2, 3];
        var b = [4, 5, 6];
        console.log(...a, ...b);
        // 1 2 3 4 5 6
```

* Ví dụ thực tế khi sử dụng `SPREAD`

```js
        //Tran Duc Linh
        var Op = (x, y, z) => {
            return x + y + z;
        }
        var arr = [1, 2, 3];
        console.log(Op(...arr));
        // 6
```

### 7. Default value in parameter
Tham số mặt định khi không truyền vào một giá trị nào.

```js
        //Tran Duc Linh
        var Fn = (a = 5, b = 5) => {
            return a + b;
        }
        console.log(Fn());
        // 10
```

### 8. Class
[Class](https://www.google.com/search?q=class+trong+javascript+es6&rlz=1C1CHBF_enVN850VN850&oq=class+trong+ja&aqs=chrome.3.69i57j0l5.13113j0j7&sourceid=chrome&ie=UTF-8)

```js
           //Tran Duc Linh
        const year = new Date();
        class People {
            constructor(_name, _age, _address) {
                this.name = _name;
                this.age = _age;
                this.address = _address;
            }
            showAll() {
                return `${this.name}, ${this.age}, ${this.address}`;
            }
            testAge() {
                return year.getFullYear() - this.age;
            }
        }
        class MALE extends People {
            constructor(_name, _age, _address, _height) {
                super(_name, _age, _address);
                this.height = _height;
            }
            get HEIGHT() {
                return this.height;
            }
            set HEIGHT(setHEIGHT) {
                this.height = setHEIGHT;
            }
            showMALE() {
                return `${this.name}, ${this.age}, ${this.address}, ${this.height}`;
            }
        }
        const Me = new MALE ('Linh', 1997, 'N_T', 160);
        Me.HEIGHT = 165;
        console.log(Me);
        //name: 'Linh', age: 1997, address: 'N_T', height: 165;
    
```

### 9. Promise
* Xử lý bất dồng bộ
* **Tình huống giả định:** Khi xử lý 1 công việc đòi hỏi nhiều thời gian `(file lớn, gửi yêu cầu lên Server...)`, thay vì chờ đợi, `Promise` trong ES6 sẽ giải quyết các vấn đề tiếp theo ngay sau đó.
    * `=>` **Tối ưu code, tiết kiệm thời gian hơn.**

```js
        //Tran Duc Linh
        var time = function(lenght) {
            return new Promise(function(resolve, reject) {
                setTimeout(function () {
                    if(length>10000) {
                        reject(`Quá lâu!`);}
                    else {
                        resolve(`Thời gian thực hiện là ${lenght/1000}s`);
                    }
                }, lenght);
            });
        }
        time(5000).then(
            function(val){
                console.log(val);
            }
        ).catch(
            function(val){
                console.log(val);
            }
        )
```

***

Những kỹ thuật nâng cao này có thể giúp bạn tiết kiệm được 1 khoảng thời gian khi làm việc với `javascript`. Code của bạn sẽ dễ nhìn cũng như dễ sửa lỗi hơn.