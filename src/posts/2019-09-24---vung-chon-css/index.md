---
title: "Tổng hợp vùng chọn CSS"
date: 2019-09-24 07:12:56 +0700
categories: ["CSS"]
tags: ["frontend"]
image: './img/blog12.jpg'
author: "Trần Đức Lĩnh"
---

Bạn cần nắm vững các loại vùng chọn CSS này cho thật kỹ, vì những thủ thuật CSS được dựa vào những gì cơ bản nhất.

<!-- ![image-title-here](/assets/img/img-post/selector-css/selector-css.jpg){:width="100%"} -->

Trong CSS được chia ra 2 loại vùng chọn bao gồm.
* 1) Alone
    * type
    * id
    * class
    * attribute
    * pseudo element
    * preudo class selector
* 2) Combinator
    * descendant
    * child
    * sibling
        * general
        * adjacent

***

### 1) Alone

#### Universal

```css
    /* Vùng chọn (*) được bao gồm cho tất cả */
    * {}
```

#### Type / element selector

```css
    /* Vùng chọn bao hàm các thẻ có cùng h1, hoặc p */
    h1 {};
    p {};
    /* Grouping */
    /* Vùng chọn h1 và p được chỉ định dùng chung */
    h1, p {};
```

#### ID

```css
    /* Chỉ có một và chỉ một id */
    /* div id="id_name" */
    #id_name {};
```

#### CLASS

```css
    /* Tên class được tái sử dụng ở nhiều nơi */
    /* div class="class_name" */
    .class_name{};
```

#### ATTRIBUTE

```css
    a[target="_top"] {};
```

#### Pseudo element

```css
    p::first-line {};
    p::selection {};

    #first::before {};
    #secon::after {};
```

#### Pseudo class

```css
    :link {};
    :hover {};
```

### 2) Combinator

#### Descendant

```css
    /* descandant */
    div ul {};
```

```css
    /* descandant class selector */
    div .ulist {};
```

```css
    /* type class selector */
    ul.ulist {};
```

```css
    /* type type.class selector */
    div ul.ulist {};
```

#### Child

```css
    /* child - tổ hợp con */
    p > li {};

    /* --(o)
      |   |---(o)
      |   |    |---(x) (not)
      |        |---(x) (not)
      |   |---(o)
    */
```

#### Sibling

* ##### General

```css
    /* general - chung */
    p ~ li {};

    /*|---(o)
      |---(o)
      |---(o)
    */
```

* ##### Adjacent

```css
    /* adjacent - liên kề */
    p + li {};

    /*|---(o)
      |---(o)
      |---(x) (not)
    */
```