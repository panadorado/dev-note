---
layout: post
title:  "Regular Expression là gì?"
date:   2019-09-21 13:41:27 +0700
categories: frontend
author: Trần Đức Lĩnh
tag: frontend
img-title: /assets/img/blog10.jpg
permalink: /regular-expression-la-gi
---
*Regular Expression* được viết gọn thành **Regex**, là một công cụ mạnh mẽ được áp dụng rất nhiều trong lập trình.<br/>
Mọi chuyện trở nên bớt khổ hơn khi có *Regex*, có thể dùng công cụ này để kiểm tra số điên thoại, email có hợp lệ hay không, kiểm tra số lượng kí tự, vị trí kí tự, kí tự hoa-thường và nhiều hơn thế nữa.

![image-title-here](/assets/img/img-post/regex/regex.jpg){:width="100%"}

Regex được sử dụng hầu hết trong các ngôn ngữ lập trình, nó khá đơn giản, chỉ cần tìm hiểu **30 phút ➹** là có thể dùng được rồi.<br/>
Truy cập [regexr.com](https://regexr.com/) để tìm hiểu kỹ hơn hơn.

***
#### Bảng kí tự trong Regex
***
* `/abc/` : Chữ.
* `/[abc]/` : Chỉ có `a, b, c`.
* `/[^abc]/` : Không có `a, b, c`.
* `/[0-9]/` : Số.
* `/\d/` : Bất cứ số nào.
* `/x+/` : Tối thiểu `x` xuất hiện 1 lần.
* `/x*/` : Có thể `x` xuất hiện hoặc không (không giới hạn số lần).
* `/x?/` : Có thể `x` xuất hiện cũng được, không thì thôi.
* `/x{3}/` : `x` lặp lại 3 lần.
* `/x{2, 4}/` : Lặp lại tối thiểu `2` lần, tối đa `4` lần.
* `/(abc)/` : Nhóm các ký tự `abc` lại.
* `/a|b|c/` : Một trong 3 `a`, `b` hoặc `c`.
* `/\w/` : Bất cứ ký tự chữ nào.
* `/\W/` : Gì cũng được, chữ thì bỏ đi.
* `/\s/` : kí tự trắng ` ` (dấu cách, tab, dòng mới,…).
* `/./` : bất kỳ kí tự nào trừ dòng mới.
* `/\b/` : ranh giới từ.
* `/^/` : bắt đầu chuỗi.
* `/$/` : kết thúc chuỗi.

***

**Number Phone Vietnam**

```javascript
    const numberPhone = /\s(0|o|O|\+84)(\s|\.)?((3[2-9])|(7[0oO6-9])|(8[1-5])|(9[oO0-9]))([oO0-9]{1})(\s|\.)?([oO0-9]{3})(\s|\.)?([oO0-9]{3})\b/;
    console.log(numberPhone.test("+84 0764 513 613"));
```

**a-zA-Z**

```javascript
    const isAlpha = /^[a-zA-Z]+$/;
    console.log(isAlpha.test("javaScript"));
```

**0-9**

```javascript
    const isNumeric = /^\d+$/;
    console.log(isNumeric.test("2019"));
```

**a-zA-Z và 0-9**

```javascript
    const isNumeric = /^[a-zA-Z0-9]+$/;
    console.log(isNumeric.test("javascript2019"));
```

**base64**

```javascript
    const isBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    console.log(isBase64.test("U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ="));
```

**boolean**

```javascript
    const isBoolean = /^true|false$/;
    console.log(isBoolean.test("false"));
```

**Decimal**

```javascript
    const isDecimal = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;
    console.log(isDecimal.test("23.45"));
```

**Hexadecimal**

```javascript
    const isHexaDecimal = /^[0-9a-fA-F]+$/;
    console.log(isHexaDecimal.test("1a2b4c5D6e7f"));
```

**HEX Color**

```javascript
    const isHexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    console.log(isHexColor.test("#222fff"));
```

**RGB - Red_Green_Blue**

```javascript
    const isRGBColor = /^rgb\(((\s*(\d|[1-9]\d|1\d\d|2[0-4][0-9]|25[0-5])\s*),){2}(\s*(\d|[1-9]\d|1\d\d|2[0-4][0-9]|25[0-5])\s*)\)$/;
    console.log(isRGBColor.test("rgb(255, 255, 255)"));
```

**RGBA - Red_Green_Blue_Alpha**

```javascript
    const isRGBAColor = /^rgba\(((\s*(\d|[1-9]\d|1\d\d|2[0-4][0-9]|25[0-5])\s*),){3}(\s*(1(\.0+)?|0?\.\d+)\s*)\)$/;
    console.log(isRGBAColor.test("rgba(255, 255, 255, .555)")); 
```

**Email**

```javascript
    const isEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    console.log(isEmail.test("duclinh97@gmail.com"));
```

**IPv4**

```javascript
    const isIPv4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    console.log(isIPv4.test("255.255.255.255"));
```

**Address MAC**

```javascript
    const isMACAddress = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    console.log(isMACAddress.test("3D:F2:C9:A6:B3:4F"));
```

**MD5**

```javascript
    const isMD5Format = /^[a-f0-9]{32}$/;
    console.log(isMD5Format.test("00236a2ae558018ed13b5222ef1bd987"));
```

**Dấu phân cách hàng nghìn**

```js
    const number = /\d{1,3}(?=(\d{3})+(?!\d))/g;
    console.log(number.test(100000));
```

**Thêm HTTP vào trước liên kết**

```js
    var s = "google.com";
    if (!s.match(/^[a-zA-Z]+:\/\//))
    {
        s = 'https://' + s;
       console.log(s);
    }
```