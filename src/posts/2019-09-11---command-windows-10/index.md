---
title: "Thao tác command trên Windows 10"
date: 2019-09-11 11:30:40 +0700
categories: ["Windows 10"]
tags: ["command"]
image: './img/blog2.jpg'
author: "Trần Đức Lĩnh"
---

* <small>Cập nhật ngày 17-03-2020</small>

Nếu bạn là một lập trình viên thì việc thao tác thành thạo các phím tắt, sử dụng `cmd` sẽ rút ngắn 1 khoảng thời gian nhất định và tăng năng suất trong công việc. Còn việc tăng độ ngầu như `hacker` trước mặt những người mù công nghệ cũng là 1 điểm cộng kha khá đấy.

<!-- ![image-title-here](./img/cmd.jpg) -->

## <kbd>Windows</kbd>

### Thao tác dọn sạch, thoát cmd
* `cls` : Xóa lệnh
* `exit` : Thoát khỏi cmd

### Thao tác trên thư mục
* `rd/s /q <folder>` : Xóa rỗng 100%, không cần hỏi
* `cd..` : Trở về
* `cd <folder>` : Chọn
* `dir` : Xem tên thư mục bên trong
* `mkdir` : Tạo folder
* `md` : Tương tự như mkdir
* `copy <file-copy> <file-paste> /y` : Copy từ file này sang file khác không cần phải hỏi
* `copy nul <file>` : Tạo file
* `tree/f` : Xem cây thư mục
* `ren <name> <name new>` : Đổi tên

### Thao tác xử lý thuột tính cho file hoặc thư mục
* `attrib (+/-)a (+/-)s (+/-)h (+/-)r <file/>folder> /s /d`
  * `(+/-)` : Thêm/loại bỏ thuộc tính
  * `a` : (archive) -> lưu trữ
  * `s` : (system) -> hệ thống
  * `h` : (hidden) -> ẩn
  * `r` : (read-only) -> chỉ đọc
  * `/s` : Thực hiện tất cả bên trong nó
  * `/h` : Đặt thuộc tính tất cả bên trong nó

### Thao tác kiểm tra thông tin host, địa chỉ IP, DNS,...
* `tasklist` : Xem tiến trình chương trình
* `driverquery` : Xem các driver đã cài trong máy
* `systeminfo` : Xem thông tin hệ thống
* `ipconfig/all` : Xem thông tin mạng

### Thao tác tắt máy
* `Shutdown -s -t [1200]` : Shutdown -shutdown -time [1200/60]s
* `Shutdown -r -t [1200]` : Shutdown -restart -time [1200/60]s

### Thao tác tắt phần mềm
* `taskkill/f /im <name-application>.exe` : Tắt trong tường hợp khi không thể thoát trực tiếp

***

Tớ đã tổng hợp lại những thao tác trên `cmd` thường dùng nhất trên *Windows*. Sẽ có những lúc bạn sẽ cần, hãy note lại để dùng dần nhé.