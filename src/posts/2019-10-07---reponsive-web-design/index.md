---
title: "Tìm hiểu Responsive Web Design từ sách giáo khoa đến trải nghiệm thực tế"
date: 2019-10-07 18:41:20 +0700
categories: ["CSS"]
tags: ["frontend"]
image: './img/blog14.jpg'
author: "Trần Đức Lĩnh"
---

Trong những năm gầy đây, sự phát triển nhanh chóng của các thiết bị điện tử với các tích cỡ màng hình khác nhau như (smartphone, tablet,...). Chúng ta cần phát triển các trang web, tối ưu theo chuẩn responsive giúp hiển thị phù hợp trên các thiết bị.

<!-- ![image-title-here](/assets/img/img-post/responsive-web/responsiveweb.jpg) -->

**(RWD)** viết tắt của cụm từ `Responsive Web Design`, một xu hướng thiết kế và phát triển trang web phù hợp, đáp ứng mọi thiết bị và tích thước **[width]** X **[height]**.

<hr/>{:width="50%"}

#### Lợi ích của Responsive Web Design.
* Giúp tiết kiệm khá nhiều thời gian và chi phí duy trì từng phiên bản cho từng thiết bị khác nhau bao gồm điện thoại và máy tính.
* **SEO** (search ranking) được cải thiện, mọi luồn đều dẫn đến 1 **URL** duy nhất thay vì nhiều **URL** khác nhau...
* Dễ dàng bảo trì trang web mà không liên quan đến phía máy chủ (**server**), đơn giản chỉ việc thay đổi **HTML** và **CSS** để thay đổi bố cục.

#### Các thành phần tạo nên Responsive Web Design
1. Flexible Grid based layout
1. Media Queries
1. Flexible Media

##### 1. <kbd>Flexible Grid Based Layouts</kbd>
* **Viewport** là khung hình người dùng nhìn thấy trên các thiết bị của họ khi vào một trang web bất kì, mỗi thiết bị khác nhau lại có một viewport khác nhau. Nếu trang web cố định khích thước thì trình duyệt sẽ tự động thu nhỏ nội dung từ dạng máy tính -> smartphone, người dùng sẽ không có được sự trải nghiệm tốt nhất.

**HTML5** cung cấp phương pháp kiểm soát view thông qua thẻ `<meta>`.

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Trong đó:**<br/> 
    - `width=device-width` thiết lập chiều rộng trang web theo chiều rộng của thiết bị. <br/>
    - `initial-scale=1.0` thiết lập mức độ zoom ban đầu của trang web được load bởi trình duyệt.

<hr/>{:width="50%"}


* **GridView** là gì?
GridView là trang web được chia thành các cột đều nhau, một gridview có 12 cột tương ứng với 100% độ rộng, và sẽ thu nhỏ hoặc mở rộng khi thay đổi kích thước trình duyệt.

<div class="jxgbox jxgControll_embed">
    <div style="
        margin: 0 auto;
        display: block;
        width: 100%;
        height: 60px;
        position: relative;
        top: 45%;
        padding: 0 10px;
    ">
        <div style="
            width: 40%;
            float: left;
            height: 60px;
            background: linear-gradient(to right top, #0a0cc3, #ffddaa);
            border-radius: 8px;
        "></div>
        <div style="
            width: 60%;
            float: left;
            height: 60px;
            background: linear-gradient(to right bottom, #0ff0b3, #0363d9);
            border-radius: 8px;
        "></div>
    </div>
</div>

##### 2. <kbd>Media Queries</kbd>

**Media Queries** là một kỹ thuật CSS3, sử dụng `@media` để bao bọc một khối các thuộc tính CSS nhất định phải là *đúng*, (định nghĩa riêng cho từng nhóm thiết bị có tích thước màng hình giống nhau).
```html
    <link href="styles.css" rel="stylesheet" media="all and (max-width: 945px)">
```

```css
    // @media rule
    @media all and (max-width: 945px) {...}

    // @import rule
    @import url(styles.css) all and (max-width: 945px) {...}
```

<hr/>{:width="50%"}

- Mỗi `@media` có nhiều biểu thức theo sau nó bao gồm **all**, **screen**, **tv**, **print**, **3d-glasses**. Mặc định sẽ là **screen** nếu `@media type` không được khai báo.

<hr/>{:width="50%"}

* **Các biểu thức bên trong `Media Queries`**
    - Bao gồm toán tử logic `and`, `not` và `only`.

        - <kbd>and</kbd> cho phép thêm điều kiện bổ sung (chọn tất cả các màng hình có chiều rộng từ 450px - 945px).

        ```css
            @media all and (min-width: 450px) and (max-width: 945px) {...}
        ```

        - <kbd>not</kbd> phủ định các truy vấn được xác định (các thiết bị màng hình không màu).

        ```css
            @media not screen and (color) {...}
        ```

        - <kbd>only</kbd> áp dụng cho truy vấn thoả điều kiện (chọn các màng hình chỉ theo chiều dọc).

        ```css
            @media only screen and (orientation: portrait) {...}
        ```

<hr/>{:width="50%"}

* **`Media Features` trong Media Queries**
    - **Media Features** xác định các loại thuộc tính thành phần nằm bên trong `Media Queries`

    - **Height & Width** là những lựa chọn phổ biến của `Media Features`, bao gồm xác định ***width*** X ***height*** của ViewPort trong các thiết bị hoặc browser, ***width*** và ***height*** có thể được xác định đơn vị tuyệt đối hoặc tương đối và đi kèm theo các tiền tố `min` hoặc `max` để giới hạn chiều dài hoặc chiều rộng muốn truy vấn.

```css
    @media all and (min-width: 320px) and (max-width: 945px) {...}
```

<hr/>{:width="50%"}

- **Orientation: Portrait / Landscape** có trong `Media queries` dùng để xác định hướng của *trình duyệt*, sử dụng từ khoá **orientation** cho phép xác định hướng ngang(portrait) hay dọc(landscape). Sử dụng chủ yếu trên cách thiết bị di động.

```css
    @media all and (orientation: landscape) {...}
```

<hr/>{:width="50%"}

- **Aspect Ratio** xác định tỷ lệ khung hình có trong `Media queries`, cho phép chỉ định tỉ lệ chiều rộng hoặc chiều caocủa thiết bị mà bạn muốn truy vấn chúng, có thể kèm theo tiền tố `max` hoặc `min`.

```css
    @media all and (min-device-aspect-ratio: 16/9) {...}
```

<hr/>{:width="50%"}

- **Resolution** sẽ xác định độ phân giải của thiết bị đầu ratheo mật độ `pixel` (mật đổ điểm ảnh trên mỗi inch). Không có tiền tố `max` hoặc `min`, thay vào đó sẽ là số điểm ảnh trên mỗi pixel `dppx` và số điểm ảnh trên cm `dpcm`

```css
    @media print and (min-resolution: 300dpi) {...}
```

<hr/>{:width="50%"}

* **Nguyên tắc Mobile First**

<!-- ![image-title-here](/assets/img/img-post/responsive-web/mobile_first.jpg){:width="100%"} -->


- Luôn thiết kế layout cho mobile trước rồi đếm các thiết bị màng hình lớn.


```css
    /*Smartphone nhỏ*/
    @media screen and (min-width: 240px){
        
    }
    /*Smartphone lớn (480 x 640)*/
    @media screen and (min-width: 320px){
        
    }
    /*Tablet nhỏ(480 x 640)*/
    @media screen and (min-width: 480px){
        
    }
    /*Tablet dọc(768 x 1024)*/
    @media screen and (min-width: 768px){
        
    }
    /*Tablet ngang(1024 x 768)*/
    @media screen and (min-width: 1024px){
    
    }
```

##### 3. <kbd>Flexible Media</kbd>
(Ảnh, video...) cũng có khả năng thay đổi kích thước đấy.<br/>

- **width** đạt tích cỡ tương đối so với màng hình, **height** sẽ tự động điều chỉnh chiều cao sao cho phù hợp với tích cỡ màng hình.

```css
    img {
        width: 100%;
        height: auto;
    }
```

- Nếu muốn thay đổi viewport không vượt quá kích thước gốc thì chỉ cần sưr dụng `max-width`.

```css
    img {
        max-width: 100%;
        height: auto;
    }
```

<hr/>

Những kiến thức này sẽ giúp bản thân nâng cao khả năng xử lý phần CSS. Cải thiện khả năng xây dựng responsive cho trang web phù hợp nhất.