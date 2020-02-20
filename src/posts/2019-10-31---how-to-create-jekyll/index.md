---
title: "Cách tạo trang blog với Jekyll"
date: 2019-10-31 09:00:00 +0700
categories: ["Thủ thuật"]
tags: ["xemnao"]
image: './img/blog16.jpg'
author: "Trần Đức Lĩnh"
---

Bạn muốn làm một website đơn giản, không cầu kỳ về `database`, không nhập xuất dữ liệu thì `Jekyll` là một ứng cử viên sáng giá nhất nhì so với **Gatsby** hoặc **NextJS**.

<!-- ![image-title-here](/assets/img/img-post/setup-jekyll/create-jekyll.jpg){:width="100%"} -->

Một lý do để bạn nên bắt tay làm ngay 1 blog viết bằng `Jekyll` đó là **Github** có hỗ trợ tên miền miễn phí và tạo ngay trên repositories.<br/>
Jekyll sử dụng Liquid template, Markdown, YAML front-matter để hoạt động trên nó.

Trước khi bắt tay vào tạo một trang bằng Jekyll bạn nên cài đặt các phần mềm phát triển.<br/>
<small>(Cài đặt trên Windows OS)

### 1. Việc đầu tiên cần làm là cài [Git](https://git-scm.com/download) trên máy tính.
### 2. Cài [Ruby](https://www.ruby-lang.org/en/downloads/) trước để giảm thiểu quá trình phát sinh lỗi khi chạy, đồng thời quản lý <kbd>Ruby gems dependencies</kbd> cho Jekyll.

<!-- ![image-title-here](/assets/img/img-post/setup-jekyll/install-ruby.jpg){:width="100%"} -->
<small>(Chọn 1-2-3 nhé)</small>

Kiểm tra phiên bản Ruby/Gem đã cài trên máy tính thành công hay chưa.

```js
    ruby -v
```

```js
    gem -v
```

### 3. Cài Bundler ta dùng lệnh

```js
    gem install jekyll bundler
```

Kiểm tra phiên bản Jekyll đã cài đặt trên máy tính chưa.

```js
    jekyll -v
```

<hr/>
<hr/>{:width="80%"}


### <center>Tiến hành tạo Blog với Jekyll nào.</center>

Ta tiến hành tạo project với lệnh nhau sau.

```js
    jekyll new <name-project>
```

Sau khi tạo xong *project* ta chạy server local.

```js
    bundle exec jekyll serve
```

hoặc sợ bị trùng `port` thì có thể dùng lệnh.

```js
    bundle exec jekyll serve --port 1234
```

**Cấu trúc thư mục Jekyll**

* `_config.yml`: File này chứa đựng cấu hình của Jekyll, mọi thông tin về blog của bạn đều lưu bên trong này.
* `index.html`: Đây là file *trang chủ*, bên trong chứa đụng HTML, YAML và Liquid templating.
* `aboutme.md`: Những dữ liệu dưới dạng *text* sẽ được chứa đựng bên trong file Markdown.
* `_posts`: Nơi chứa đựng các bài viết dưới dạng file Markdown.
* `_layouts`: Các cấu trúc từng trang chỉ định đều ở bên trong này.
* `_include`: Nơi chứa các file HTML (Header-Footer).
* `_data`: Các file YAML nơi chứa các thông tin đều được nằm bên trong này.
* `css, js`: Có thể dử dụng CSS, JavaScript để làm trang web sinh động hơn.

**Lưu ý khi tạo bài viết**

Có nhiều cách viết thông qua HTML, Markdown hoặc Liquid Templating nhưng hãy lưu ý các điểm sau.
* Tên file phải ở dưới dạng `yyyy-mm-dd-ten-bai-viet.md`.
* Trước khi viết bài đều có mã YAML, nơi chứa thông tin bài viết đó.

```js
    ---
    YAML
    ---
```

*Ví dụ như:*

```html
    ---
    layout: post
    title: "Cách tạo một trang blog với Jekyll"
    date: 2019-10-31 09:00:00 +0700
    author: Trần Đức Lĩnh
    tag: ["jekyll", "frontend"]
    img-title: /assets/img/blog16.jpg
    permalink: /cach-tao-mot-trang-blog-voi-jekyll
    ---
```

**Giải thích một số mã YAML**

* `title:` Nơi chứa tiêu đề bài viết.
* `subtitle` Nơi chứa tiêu đề phụ (nằm bên dưới tiêu đề chính).
* `bigimg` Đưa ảnh to lên đầu trang hoặc bài viết.
* `comments` Thêm chức năng comment cho bài viết, để kích hoạt bạn dùng *comments: true*.
* `show-avatar` Tuỳ chỉnh Ẩn-Hiện avatar trong trang hoặc bài viết.
* `social-share` Tuỳ chỉnh bật tắt chức năng share bài viết.
* `layout` Nơi bạn tuỳ chỉnh sử dụng layout nào được sử dụng file này.
* `js` Danh sách các file JavaScript local.
* `css` Danh sách các file CSS.
* `ext-js` Danh sách các file JavaScript được nhúng từ bên ngoài.
* `ex` Danh sách các file CSS được nhứng từ bên ngoài.
* `googlefonts` Danh sách các Font Google được sư dụng.

### Một số tài liệu kham khảo.

* Trang chủ Jekyll: [jekyllrb.com](https://jekyllrb.com/)
* Trang chủ Github: [pages.github.com](https://pages.github.com/)
* Blog có nhiều bài viết hay về Jekyll: [blog.webjeda.com](https://blog.webjeda.com/)
