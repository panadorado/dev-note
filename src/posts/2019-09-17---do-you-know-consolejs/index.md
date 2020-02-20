---
title: "Ngoài console.log ra thì còn gì khác biệt không?"
date: 2019-09-17 16:20:10 +0700
categories: ["Thủ thuật"]
tags: ["frontend"]
image: './img/blog8.jpg'
author: "Trần Đức Lĩnh"
---

Khi đã dấn thân vào JavaScript, thì `console.log` không còn quá xa lạ gì nữa rồi. Nhưng không ít bạn biết rằng, ngoài <code>`console.log` </code>ra thì có trên 20 phương thức *console* khác nhau.

![image-title-here](/assets/img/img-post/console/console.jpg){:width="100%"}

**Các phương thức console bao gồm**
1. `console.assert()` 
1. `console.clear()`
1. `console.count()`
1. `console.debug()`
1. `console.dir()`
1. `console.dirxml()`
1. `console.error()` <-=
1. `console.exception()`
1. `console.group()`  <-=
1. `console.groupCollapsed()`
1. `console.groupEnd()` <-=
1. `console.info()`
1. `console.log()` <-=
1. `console.profile()`
1. `console.profileEnd()`
1. `console.table()` <-=
1. `console.time()` <-=
1. `console.timeEnd()` <-=
1. `console.timeStamp()`
1. `console.trace()`
1. `console.warn()` <-=

***

### console.log

```js
    //Tran Duc Linh
    console.log('Hello word');
```

> Kết quả

<!-- ![image-title-here](/assets/img/img-post/console/result.js.console.log.png){:width="50%"} -->

***

### console.log + CSS

```js
    // Tran Duc Linh
    console.log('%c Cảnh báo ', 'color: white; background-color: rgba(255,20,14,1);
    font-size:20px; border: 1px solid red;border-radius: 999px; padding: 2px 10px',
    'Lỗi...');
```

> Kết quả

<!-- ![image-title-here](/assets/img/img-post/console/result.js.console.log_css.png){:width="50%"} -->

***

### console.table()

```js
    // Tran Duc Linh
    const hub_1 = { id: "1d4BfD", name: "Duc Linh"};
    const hub_2 = { id: "2CFf0A", name: "Somebody..."};
    console.table({ hub_1, hub_2})
```

> Kết quả

<!-- ![image-title-here](/assets/img/img-post/console/result.js.console.table.png){:width="50%"} -->

***

### console.group()

```js
    // Tran Duc Linh
    console.group('Tổng quan');
    console.log('Tên: Trần Đức Lĩnh');
    console.log('Công việc: Front-End');

    console.group('Thêm');
    console.log('Địa chỉ: Ninh Hoà - Khánh Hoà');
    console.groupEnd();
    console.groupEnd();
```

> Kết quả

<!-- ![image-title-here](/assets/img/img-post/console/result.js.console.group.png){:width="50%"} -->

***

### console.warn() & console.error()

```js
    // Tran Duc Linh
    console.warn("Waring!!!");
```

> Kết quả

<!-- ![image-title-here](/assets/img/img-post/console/result.js.console.warn_err.png){:width="50%"} -->

***
### console.time()

```js
    // Tran Duc Linh
    console.time("for-loop");
    for(let i=0;i<4;i++){
        console.log(i);
    }
    console.timeEnd("for-loop");
```

> Kết quả

<!-- ![image-title-here](/assets/img/img-post/console/result.js.console.time.png){:width="50%"} -->

***

Đó là những phương thức có thể giúp ích cho bạn có cái nhìn trực quan hơn về `console`, bạn cũng có thể tuỳ biến nhiều cách hiển thị hơn, không còn nhàm chán, đơn điệu khi chỉ dùng mỗi `console.log` nữa đúng không nào.