---
title: "Một số thủ thuật CSS mà Front.End không ngờ tới (P1)"
date: 2019-09-26 10:31:04 +0700
categories: ["CSS"]
tags: ["frontend"]
image: './img/blog13.jpg'
author: "Trần Đức Lĩnh"
---

CSS có thể học trong vòng 2-3 tháng, nhưng muốn giỏi thì đó là một chặng đường.<br/>

<!-- ![image-title-here](/assets/img/img-post/know-css/know-css.jpg) -->

<small>Tổng hợp lại từ các trang *viblo.asia* - *kipalog* của tác giả (Hà Hữu Tín).<br/></small>

### 1) style="border-radius:...;"

Nếu để ý kỹ thì trên các trang *Facebook* có những *button* được bo tròn 2 bên, vậy làm như thế nào để được như vậy? <br/>
Bạn muốn dùng **border-radius:50%???.**<br/>
Không được đâu, trừ khi *width = height* may ra nó là hình tròn, số còn lại là dạng ellipse mà thôi.

<!-- max-width and max-height == 450px -->
<div class="jxgbox jxgControll_embed">
    <div style="
    display: block;
    margin: 0 auto;
    position: relative;
    top: 30%;
    width: 250px;
    height: 40px;
    background: linear-gradient(to right top, #9618f7, #00b7ff);
    border: 1px solid #c1c1c1;
    border-radius: 50% 50%;
    box-shadow: 2px 2px 20px #a8a8a8;
    "></div>
    <div style="
    display: block;
    margin: 0 auto;
    position: relative;
    top: 60%;
    width: 250px;
    height: 40px;
    background: linear-gradient(to right bottom, #e65758, #f7d345);    
    border: 1px solid #c1c1c1;
    border-radius: 999px;
    box-shadow: 20px 20px 30px #a8a8a8;
    "></div>
</div>

Như trên, nếu chiều dài (height) = 40px thì thiết lập giá trị bằng **height/2 = 20px** hoặc **height = 40px** có lẽ tạm thời sẽ đúng.<br/>
Nhưng tăng lên 100px mọi lập luận phía trên đều sai.<br/>

Theo [nguồn](https://stackoverflow.com/questions/29966499/border-radius-in-percentage-and-pixels-px-or-em) stackoverflow có giải thích thì **border-radius** có 2 giá trị X và Y nằm trên trục tạo nên hình ellipse và xác định hình dạng của góc.<br/>
Nếu bặn đặt 1 giá trị duy nhất thì được áp dụng cho tất cả các góc **border-radius: x** == **border-radius: x/x**.<br/>
Thay vì sử dụng giá trị tương đối **%**, ta nên dùng giá trị tuyệt đối **px** để làm điều này.<br/>
Khi sử dụng *999px* bán kính đường tròn chắc chắn là 999px, quy tắc đặt ra được áp dụng sẽ là **các đường cong chồng lên nhau sẽ làm giảm bán kính của vòng tròn xuống 1/2 kích thước của cạnh nhỏ nhất**. Bạn có thể xem hình ảnh bên dưới.

<div class="jxgbox jxgControll_embed">
    <div style="
    display: block;
    margin: 0 auto;
    position: relative;
    top: 35%;
    width: 260px;
    height: 110px;
    background: linear-gradient(to right, #00b7ff, #a890fe);
    box-shadow: 20px 20px 30px #a8a8a8;    
    border-radius: 999px;
    ">
        <div style="
        display: inline-block;
        width: 110px;
        height: 110px;
        border: 2px solid yellow;
        border-radius: 50%;
        float: left;
        "></div>
        <div style="
        display: inline-block;
        width: 110px;
        height: 110px;
        border: 2px solid yellow;
        border-radius: 50%;
        float: right;"></div>
    </div>
</div>

Code mẫu.

```css
.br-radius{
    display: block;
    margin: 0 auto;
    position: relative;
    top: 35%;
    width: 300px;
    height: 120px;
    background: linear-gradient(to right, #00b7ff, #a890fe);
    box-shadow: 20px 20px 30px #a8a8a8;    
    border-radius: 999px;
}
```

### 2) Image background reponsive

Muốn dùng *background-img* ở dạng reponsive thường thì sẽ rất khó khăn. Thường thì sẽ dùng thuộc tính CSS cho *<img>* như sau.

```css
img {
    max-width: 100%;
    height: auto;
}
```

Nếu muốn height được scale tự động thì chúng ta cần dùng đến kỹ thuật được nhắc đến trong *Bootstrap* có tên là **embed video**, họ áp dụng nó để làm reponsive cho video.

```html
    .wrap-image
        .image
```

```css
    .wrap-image {
        border: 1px solid #000;
    }
    .image {
        max-width: 100%;
        width: 500px;
        height: 350px;
        background: url("http://via.placeholder.com/500x350") no-repeat 0 0;
        background-size: contain;
    }
    /* .image{width} == @media(max-width) */
    @media (max-width: 500px) {
        .image {
            height: 0;
            /* - (.image{height}/.image{width})*100%  = padding-bottom - */
            padding-bottom: 70%; 
        }
    }
```

### 3) Tối ưu code thông qua Selector:not()

Nếu bạn không muốn *item* cuối cùng không ảnh hưởng đến các *item* phía trên, bạn có thể làm như sau.

```html
    <div class="controll item">A</div>
    <div class="controll item">AB</div>
    <div class="controll item">ABC</div>
```

```css
    .controll {
        margin-bottom: 2px; 
        width: 200px;
        height: 20px;
    }
    .item {
        background: #ff0000;
        border-right: 1px solid black;
    }
    .item:last-child {
        border-right: 0;
        background: #ffffff;
    }
```

Nếu dùng Selector:not() thì sẽ như thế này

```css
    .controll {
        margin-bottom: 2px; 
        width: 200px;
        height: 20px;
    }
    .item:not(:last-child) {
        background: #ff0000;
        border-right: 1px solid black;
    }
```

Đã giảm được 4 dòng code lại còn sạch đẹp.

### 4) Select Items Using Negative nth-child

Chọn các phần tử ở các vị trí bao gồm cố định 1 vị trí, các vị trí chẵn, lẽ, 1 khoảng nào đó, loại trừ 1 khoảng nào đó...

```css
    /* Chọn 1 phần tử cố định */
    :nth-child(2) {};
```

```css
    /* Chọn các phần tử chia hết cho 2 */
    :nth-child(2n) {};
    /* hoặc */
    :nth-child(even) {};
```

```css
    /* Chọn các phần tử không chia hết cho 2 */
    :nth-child(2n+1) {};
    /* hoặc */
    :nth-child(odd) {};
```

```css
    /* Chọn các phần tử trong khoảng từ 1 - 10 */
    :nth-child(-n+10) {};
```

```css
    /* Không chọn các phần tử trong khoảng từ 1 -10 */
    :not:nth-child(-n+10) {};
```

```css
    /* Chọn các phần tử từ 8 - 16 */
    :nth-child(n+8):nth-child(-n+16)
```

### 5) Các ô trong table có chiều rộng bằng nhau
Các cột trong *table* đều bằng nhau chỉ với 1 dòng code.

```css
    table {
        table-layout: fixed;
    }
```

### 6) Tránh nhầm lẫn khoảng cách giữa 2 Component liền kề

Các trình duyệt sẽ tính khoảng cách giữa 2 *component* như thế nào khi **khối A** được đặt `margin-bottom: 30px` và **khối B** được đặt với `margin-top: 20px`???<br/>
Có phải khoảng cách sẽ bằng *50px*???

* Đáp án sẽ là tổng khoảng cách chỉ bằng 30px của **khối A**.<br/>

Mình cố ý cho **khối B** `margin-bottom: 60px` thì tổng khoảng cách sẽ bằng 60px.<br/>
Vậy nếu khoảng cách giữa 2 component với nhau, khoảng cách nào *lớn hơn* sẽ được ưu tiên làm giá trị chung, nếu 2 khoảng cách đều bằng nhau, thì sẽ ưu tiên cho giá trị đã được khai báo trước đó.
<div class="jxgbox jxgControll_embed">
    <div style="
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 180px;
    height: 180px;
    background: linear-gradient(to right bottom, #ff0078, #f6efa7);
    border-radius: 8px;
    ">
    </div>
    <div style="
    display: block;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: 180px;
    background: linear-gradient(to right bottom, #4b086d, #acc0fe);
    border-radius: 8px;
    ">
    </div>
</div>

**Lưu ý:** Trong các dự án, nên sử dụng 1 hướng duy nhất (top) hoặc (bottom), giúp bạn dể kiểm soát được khoảng cách giữa các component với nhau.

### 7) Xuất hiện khoảng trắng dưới image

Sử dụng `vertical-align: middle;` cho img, giúp mất khoảng trắng không cần thiết.<br/>
Chi tiết [vertical-align](https://codepen.io/CodePen_higithub97_Linhz/pen/qBWGbxB)

### 8) Ôi!!! <kbd>pointer-events</kbd> tuyệt cú mèo

<div class="jxgbox jxgControll_embed">
    <div class="pointerEvents">
        <div style="
        display: block;
        margin: 50px auto;
        background: linear-gradient(to right top, #0ff0b3, #0363d9);
        width: 250px;
        height: 250px;
        border-radius: 8px;
        box-shadow: 20px 20px 20px #c1c1c1;
        ">
            <div></div>
        </div>
        <button class="btn btn-link" style="
            display: block;
            margin: 0 auto;
            pointer-events:auto
        ">Hover...</button>
    </div>
</div>

Bạn có thể kham khảo mã nguồn tại đây.

```html
<div class="container">
    <p>Hello</p>
    <button>Hover</button>
</div>
```
```css
    button {
        pointer-events: auto;
    }

    .container {
        pointer-events: none;
    }
    .container:hover p {
        color: red;
    }
```

### 9) Flexbox với margin-left: auto

Sử dụng `margin-left: auto` trong trường hợp **user** ở bên phải.

<!-- ![image-title-here](/assets/img/img-post/know-css/flex.png){:width="100%"} -->

```html
    <header>
        <div class="logo"></div>
        <div class="menu"></div>
        <div class="user"></div>
    </header>
```
```css
    div {
        width: 30px;
        height: 30px;
        background: red;
    }
    header {
        display: flex;
    }
    .user {
        margin-left: auto;
    }
```

### 10) Giá trị <kbd>initial</kbd>

Giá trị thuộc tính **width** có mỗi giá trị mặc định khác nhau.<br/>

* **width** = *auto*
* **min-width** = *0*
* **max-width** = *none*

Với mọi thuộc tính trong *CSS*, chỉ cần set giá trị mặc định về dạng <kbd>initial</kbd> cho từng thuộc tính mà không cần phải nhớ quá nhiều thứ.<br/>
( IE11 không hỗ trợ )

### 11) Sử dụng **placeholder** với *input*

<div class="jxgbox jxgControll_embed placeholder_11">
    <form>
        <input type="text" style="
            font-size: 1.5rem;
            margin-top: 160px;
            padding: 10px 20px 10px 20px;
            width: 65%;
            display: block;
            border-radius: 999px;
        " placeholder="Nhập ngẫu nhiên...">
    </form>
</div>

* **::placeholder** sẽ tác động vào phần bên trong của style **input** như `font-size`, `color`.<br/>
* **:placeholder-shown** sẽ tác động tới bề ngoài style của **input** kể cã `border`...

### 12) Cách mà **border** thừa kế trong thuộc tính từ **color** 

<div class="jxgbox jxgControll_embed class_12">
    <button>Hover...</button>
</div>

Với thuộc tính **border** màu của nó chính là **inherit**, khi bạn khai báo **border: 1px solid** thì màu **border-color** được lấy từ thuộc tính **color**, nếu không tự định nghĩa **color** thì màu mặc định sẽ là `black`.<br/>
Vì lý do này, code sẽ được ngắn gọn hơn. 

```html
    <button>Hover...</button>
```
```css
    button {
        color: rgb(82, 198, 236); //blue
        border: 1px solid;
    }
    button:hover {
        color: rgb(243, 196, 108); //orange
    }
```

### 13) <kbd>display: flex</kbd> làm méo **icon** khi `text` quá dài.

<div class="jxgbox jxgControll_embed placeholder_11">
    <div style="
        width: 400px;
        display: flex;
        margin: 0 auto;
        position: relative;
        top: 40%;
    ">
        <img src="/assets/img/img-post/know-css/chrome.png" alt="..." style="
            width: 50px;
            height: 50px;
        ">
        <div style="
            flex: 1;
        ">Nàng công chúa bong bóng.
            Yêu chàng mưa lơ đãng.
            Dường như bên nhau quên giận hờn.
            Dù có những lúc mưa vô tình.
            Làm buồn công chúa bong bóng nhiều lần.</div>
    </div>
</div>

Cách khắc phục đơn giản là định danh **{flex: 1;}** cho phần tử chứa đoạn `text` đó.

```html
    <div class="flex_icon">
          <img src="/icon.png" alt="">
          <div class="text">Nàng công chúa bong bóng. Yêu chàng mưa lơ đãng.
            Dường như bên nhau quên giận hờn. Dù có những lúc mưa vô tình.
            Làm buồn công chúa bong bóng nhiều lần.</div>
    </div>
```

```css
    .flex_icon {
        width: 400px;
        display: flex;
    }
    img {
        width: 50px;
        height: 50px;
    }
    .text {
        flex: 1;
    }
```

<hr/>

<h4 class="text-center">Phần 1 tới đây là kết thúc.</h4>