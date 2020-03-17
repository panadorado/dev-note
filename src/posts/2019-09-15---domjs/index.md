---
title: "Thao tác DOM"
date: 2019-09-15 11:12:33 +0700
categories: ["Thao tác DOM"]
tags: ["frontend"]
image: './img/blog6.jpg'
author: "Trần Đức Lĩnh"
---

DOM viết tắt của từ <strong>Document Object Model</strong>, trong mỗi thẻ `(tag)` HTML có những thuột tính `(properties)` và được phân cấp cha-con, sự phân cấp cha-con này được gọi là `selector`, và DOM có nhiệm vụ thay đổi thuộc tính thẻ, thay đổi cấu trúc HTML đó.

![image-title-here](/assets/img/img-post/dom/dom.jpg)

##### Mục lục:
*   console.log()
*   Selectors
*   Parents
*   Children
*   Siblings
*   Create Elements `+` Insert Elements

***
### 1. console.log()

 * `console.dir(document);`
    // Hiển thị toàn bộ thông tin DOM.
 * `console.log(document.domain);`
    // Hiển thị domain.
 * `console.log(document.URL);`
    // Hiển thị URL.
 * `console.log(document.title);`
    // Hiển thị tiêu đề.
 * `console.log(document.head);`
    // Hiển thị nội dung trong thẻ <head></head>.
 * `console.log(document.body); `
    // Hiển thị nội dung trong thẻ <body></body>.
 * `console.log(document.all);`
    // Hiển thị toàn bộ nội dung.
 * `console.log(document.all[1]);`
    // Hiển thị nội dung phần tử thứ [1].
 * `console.log(document.forms);`
    // Hiển thị nội dung trong <form></form>.
 * `console.log(document.scripts);`
    // Hiển thị nội dung bên trong thẻ <script></script>.
 * `console.log(document.links);`
    // Hiển thị các liên kết.
 * `console.log(document.images);`
    // Hiển thị tất cả ảnh.


### 2. Selectors


* `document.getElementById('id');`
    // Trả về 1 id duy nhất.
* `document.getElementsByClass('class');`
    // Tìm các element có class tương ứng.
* `document.getElementsByTagName('div');`
    // Tìm các element có <tag> tương ứng, như <div></div>.


* `document.querySelector('./#/tag');`
    // Tìm các element nhưng sẽ chỉ trả về element đầu tiên;
* `document.querySelectorAll('./#/tag');`
    // Tìm tất cả các element và trả về một danh sách [index].


### 3. Parents


* `x.parentNode`<br/>
    // Tham chiếu ngược lên tới nút cha của nút hiện tại.<br/>
    // Nối thuộc tính nhiều lần để tham chiếu tới nút ***ông cố nội***.

**Ví dụ về `.parentNode`:**
```html
    <body>
        <div class="all">
            <h3>abcDef</h3> <!--red-->
            <h3>abcDef</h3>
            <h3>abcDef</h3>
            <h3>abcDef</h3>
            <h3>abcDef</h3>
            <h3>abcDef</h3>
        </div>
        <script>
```
```javascript
            var x = document.querySelectorAll('.all>h3');
            x[0].parentNode.parentNode.style.backgroundColor = ('red');
```
```html
        </script>
    </body>
```
 
### 4. Children

**Chỉ định tất cả các 'node' trước/sau của 1 element**

* `x.childNodes`<br/>
    // Chỉ tham chiếu dưới các nút con của nút hiện tại (không liên quan tới cháu chắc).<br/>
    // Chỉ định mỗi hàng (không viết liền mạch) sẽ là một 'node' rỗng dạng (text).
* `x.firstChild = x.childNodes[0]`
    // Lấy nút đầu tiên, tương đương với phần tử [0].
* `x.lastChild = x.childNodes[x.childNodes.length-1]`<br/>
    // Lấy nút cuối cùng, tương đương với chiều dài mảng - 1.<br/>
    // (Chỉ định từng 'node' trước/sau của 1 element)
* `x.children`<br/>
    // Giống như .childNodes, chỉ tham chiếu dưới các nút con của nút hiện tại.<br/>
    // Không chỉ định mỗi hàng và phát sinh 'note' rỗng dạng (text).
* `x.firstElementChild = x.children[0]`
    // Lấy nút đầu tiên tương đương với phần tử [0].
* `x.lastElementChild = x.children[cNs.children.length-1]`
    // Lấy nút cuối cùng, tương đương với chiều dài  mảng -1.

**Ví dụ về `.childNodes`:**

```html
    <body>
        <div class="all">
            <h4>Title h4</h4>
            <p>P</p>
        </div>
        <script>
```
```javascript
            var x = document.querySelector('div.all');
            console.log(x.childNodes);
            // NodeList(5) [text, h4, text, p, text].
            x.childNodes[1].style.color = ('red');
```
```html
        </script>
    </body>
```

**Ví dụ về `.children`:**

```html
    <body>
        <div class="all">
            <h4>Title h4</h4>
            <p>P</p>
            <p>C</p>
            <p>E</p> <!--red-->
            <p>F</p>
        </div>
        <script>
```
```javascript
            var x = document.querySelector('body>div.all');
            console.log(x.children);
            //HTMLCollection(5) [h4, p, p, p, p]
            x.children[3].style.color = ('red');
```
```html
        </script>
    </body>
```

### 5. Siblings


**Chỉ định tất cả các 'node' trước/sau của 1 element**
* `x.nextSibling `
    // Tham chiếu tới nút anh em nằm SAU nút hiện tại.
* `x.previousSibling`<br/>
    // Tham chiếu tới nút anh em nằm TRƯỚC nút hiện tại.<br/>
    // (Chỉ định từng 'node' trước/sau của 1 element)
* `x.nextElementSibling `
    // Tham chiếu tới nút anh em nằm SAU nút hiện tại.
* `x.previousElementSibling`
    // Tham chiếu tới nút anh em nằm TRƯỚC nút hiện tại.

**Ví dụ về `.nextSibling`:**

```html
    <body>
        <div class="all">
            <p>P</p>
            <p>C</p>
            <p>E</p>
            <p>F</p>
        </div>
        <script>
```
```javascript
            var dance;
            dance = document.querySelector('div.all');
            console.log(dance.childNodes);
            // NodeList(13) [text, p, text, comment, text, p, text, comment, text, p, text, p, text]
            dance = document.querySelector('div.all>p');
            console.log(dance.nextSibling);
            // [...P, { "text" }, C...].
            console.log(dance.previousSibling);
            // [null, { "text" }, P...].
```
```html
        </script>
    </body>
```

**Ví dụ về `.nextSibling`:**

```html
    <body>
        <div class="all">
            <p>P</p>
            <p>C</p>
            <p>E</p>
            <p>F</p>
        </div>
        <script>
```
```javascript
            var dance;
            dance = document.querySelector('div.all');
            console.log(dance.children);
            // HTMLCollection(4) [p, p, p, p]
            dance = document.querySelector('div.all>p');
            console.log(dance.nextElementSibling);
            // [...P, { <p>C</p> }, E...].
            console.log(dance.previousElementSibling);
            // [null, { "null" }, P...].
```
```html
        </script>
    </body>
```

### 6. Create Elements + Insert Elements

* `document.createElement();`
    // Tạo mới 1 element.
* `document.createTextNode('');`
    // Tạo nội dung văn bản và gán cho một 'node' nào đó.
* `.appendChild();`
    // Thêm một nút con vào phía cuối cùng của nút hiện tại.
* `.setAttribute('', ''); `
    // Sửa giá trị của thuộc tính.
* `.getAttribute('');`
    // Lấy giá trị của thuộc tính.
* `x.insertBefore('', '');`
    // Thêm 'node' hiện tại vào trước vị trí 'node' anh chị cùng cấp.

**Ví dụ về `.create... + .insert...`:**

```html
    <body>
        <div id="root">
            <!-- cloneNode/insertBefore
            <div class="son">div-4--</div> -->
            <div class="son">div-1--</div>
            <!-- <div id="newId" class="newClassName">Create TEXT</div> -->
            <div class="son">div-2--</div>
            <div class="son">div-3--</div> <!--Delete node-->
            <div class="son">div-4--</div>
        </div>
        <script>
```
```javascript
            const newDiv = document.createElement('div'); 
            // Tạo 1 phần tử <div> </div>
            newDiv.id = "newId"; 
            // Tạo id: <div id="newId"></div>
            newDiv.className = "newClass"; 
            // Tạo class: <div id="newId" class="newClassName"></div>
            
            newDiv.setAttribute('class', 'newClassName'); 
            // Sửa giá trị của một thuộc tính.
            console.log(newDiv.getAttribute('class')); 
            // Lấy giá trị của một thuộc tính.

            const newText = document.createTextNode('Create TEXT'); 
            // Thêm text vào biến mới.
            newDiv.appendChild(newText); 
            // Thêm nút con vào nút hiện tại.

            const root = document.getElementById('root');
            // Xác định 'node' cha.
            
            const son = document.getElementsByClassName('son');
            // Xác định 'node' anh chị.
            
            root.insertBefore(newDiv, son[1]);
            // Từ 'node' cha, thêm 'node' con vào TRƯỚC 'node' anh chị ở vị trí [1].
            
            root.removeChild(son[2]); 
            // Xóa bỏ 1 'node' ở vị trí [2].
            // Xóa bỏ <div class="son">div-3--</div>

            const cloneSon = son[2].cloneNode(true);
            // Nhân bản thêm một 'node' nới.
            // <div class="son">div-4--</div>

            root.insertBefore(cloneSon, son[0]);
            // Thêm 'node' mới vào vị trí [0].
            // HTMLCollection { 0: div.son, 1: div.son,
            // 2: div#newId.newClassName, 3: div.son,
            // 4: div.son, length: 5, … }

 ```
 ```html
        </script>
    </body>
 ```

<hr/>

**DOM** thực sự rất tuyệt vời, nó giúp thay đổi tất cả các thuộc tính của `HTML` cũng như thay đổi `CSS` thông qua `JS`, trang web sẽ tuyệt vời hơn khi bạn hiểu rõ hơn về bản chất của DOM thông qua bài viết này.