---
title: "Tìm hiểu đồ hoạ Website"
date: 2019-09-22 21:02:17 +0700
categories: ["Đồ họa website"]
tags: ["frontend"]
image: './img/blog11.jpg'
author: "Trần Đức Lĩnh"
---

<!-- * <small>Cập nhật ngày 20-03-2020</small> -->

**HTML5** hỗ trợ 2 dạng đồ hoạ gồm *Canvas* và *SVG*, những công nghệ này giải quyết các kịch bản đồ hoạ phức tạp, đưới đây là những đặc điểm khác biệt của chúng.

![image-title-here](/assets/img/img-post/graphic-website/pic-01.jpg)

***

### Canvas
***Element Canvas*** được xác định trong *HTML* bởi thuộc tính *width* & *height*, cần *JavaScript* để có thể thông qua *Canvas API* truy cập đến *canvas* đã được tạo trước đó.

**Lý do tiếp xúc**
* -`Tính tương tác`- bao gồm phản hồi các hành vi người dùng qua việc lắng nghe các sự kiện bàn phím, chuột, và chạm. Nhà phát triển sẽ thoải mái hơn.
* -`Hiệu ứng`- của đối tượng được vẽ bằng *canvas* đều có thể được chuyển động thông qua JavaScript.
* -`Tính linh hoạt`- bao gồm thể hiện các đường thằng, chữ cái, hoặc ảnh,... kèo theo các hiệu ứng bắt mắt. Có thể chèn thêm *video, audio* vào bên trong *canvas*.
* -`Mức độ phổ biến`- được thể hiện qua việc hỗ trợ các trình duyệt có nhiều người dùng nhất...
* -`Chuẩn web`- bởi vì *canvas* là 1 công nghệ mở và là 1 phần của *HTML*.

**Mục đích sử dụng**
* -`Gaming`- được hướng tới khi sử dụng *canvas*, từ game *2D-3D*.
* -`Quảng cáo`- là sự thay thế tuyệt vời cho *Banner* hoặc *Quảng cáo* dựa vào *flash* để thu hút người mua.
* -`Biểu diễn dữ liệu`- khách quan hơn khi sử dụng *canvas*
* -`Hỗ trợ giáo dục & giải trí`- bao gồm game và tạo web học tập.

***

### SVG

**S**calable **V**ector **G**raphic
 -Ra mắt ngày 14-1-2003

 Có thể nói nó là một ngôn ngữ mô phỏng đồ hoạ `2D` và các ứng dụng đồ hoạ trong **XML**, sau đó `xml` được trả lại bởi `SVG Viewer`.


**Ưu điểm của SVG**
* Phóng to nhưng không vỡ ảnh
* Có thể in ấn với chất lượng cao nhất
* Tìm kiếm, đánh dấu, nén từ SVG...
* Chuyển động được khi sử dụng animation đã dựng trước đó
* Có thể được chỉnh sửa bằng JavaScrpit như Canvas
* Chứa các liên kết đến bất kỳ tài liệu nào
* Hầu như được hỗ trợ trên tất cả các trình duyệt

***

##### <center>So sách tổng quan giữa Canvas và SVG</center>

<table class="table table-bordered">
  <thead>
    <tr class="text-center">
      <th scope="col">Canvas</th>
      <th scope="col">SVG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>
            - Phụ thuộc vào độ phân giải<br/>
            - Không hỗ trợ xử lý sự kiện<br/> 
            - Thành phần đơn, tương tự thẻ HTML<br/> 
            - Chỉ chỉnh sửa qua JavaScipt<br/> 
            - Kéo giãn vỡ nét, mất chất lượng<br/> 
            - Dựa hoàn toàn vào `pixel`<br/>
        </td>
        <td>
            - Không phụ thuộc vào độ phân giải<br/>
            - Hỗ trợ xử lý sự kiện<br/>
            - Có nhiều thành phần đồ học, trở thành 1 phần trong DOM<br/>
            - Chỉnh sửa qua `CSS` và `JavaScript`<br/>
            - Sự kéo giãn không ảnh hưởng đến chất lượng<br/>
            - Dựa hoàn toàn vào `vector`<br/>
        </td>
    </tr>
  </tbody>
</table>

***

Những phần sau mình sẽ hướng dẫn áp dụng `hình học cơ bản` và `đồ hoạ vector` vẽ các hình đơn giản.