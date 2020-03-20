---
title: "Thao tác Terminal trên Linux"
date: 2020-03-20 08:43:02 +0700
categories: ["Linux"]
tags: ["command"]
image: './img/blog23.jpg'
author: "Trần Đức Lĩnh"
---

<!-- Khi sử dụng Linux, không thể không nhắc đến `terminal`. -->

### Thao tác liên quan đến hệ thống.

* `exit` : Thoát khỏi cửa sổ Terminal.
* `logout` : Thoát phiên bản làm việc.
* `halt` : Tắt máy nhưng nguồn vẫn hoạt động.
* `shutdown -h now` / `telinit 0` hoặc `init 0`: Tắt máy ngay bây giờ.
* `shutdown -r now` hoặc `reboot` :  Khởi động lại hệ thống.
* `shutdown -c` : Hủy bỏ cách lệnh tắt máy nếu gán thời gian.


### Thao tác trên tập tin.

* `ls` : Liệt kê các danh sách và file trong thư mục hiện tại.
* `ls -l` : Liệt kê tất cả các danh sách và file (bao gồm đã ẩn). 
* `pwd` : Xuất đường dẫn của thư mục hiện tại.
* `cd` : Chọn thư mục làm việc.
* `mv` : Di chuyển tập tin / thư mục.
* `mv <old-name> <new-name>` : Đổi tên tập tin / thư mục.
* `cp` : Sao chép file từ vị trí nguồn đến vị trí đích.
* `cp -r` : Sao chép toàn bộ dữ liệu bên trong.
* `mkdir` : Tạo thư mục mới.
* `rmdir` : Xóa thư mục rỗng.
* `rm -r` : Xóa toàn bộ thư mục và dữ liệu bên trong nó.
* `find \! -name <file-name>` : Tìm kiếm tất cả các tên, không phân biệt HOA/thường. 

* `tar -cvf <file-name>` : Tạo file nén (.tar) từ file có sẵn.
* `tar -tvf <file-name>` : Xem nội dung bên trong file nén (.tar).
* `tar -xvf <file-name>` : Giải nén file (.tar).

* `gzip <file-name>` : Tạo file nén (.gz) từu file có sẵn.
* `gzip -d <file-name>` hoặc `gunzip <file-name>` : Giải nén file (.gz).

<!-- * `zip -r` :  -->

* `wc` : Đếm string / line trong tập tin.
* `touch` : Tạo tập tin mới.
* `cat` : Xem nội dung tập tin.
* `df` : Kiểm tra dung lượng đĩa, phân vùng.

### Thao tác làm việc trên terminal.

* `clear` : Xóa lệnh.
* `date` : Xem ngày giờ hệ thống.
* `cal` : Xem lịch hệ thống.

### Thao tác quản lý hệ thống.

* `rpm` : Kiểm tra gói, cài đặt hoặc gỡ bỏ.
* `ps` : Kiểm tra tiến trình đang chạy.
* `kill` : Dừng các tiến trình bị treo.
* `top` : Hiển thị các hoạt động của tiến trình, bao gồm thông tin và sử dụng tài nguyên.
* `pstree` : Hiển thị các tiến trình hoạt động dưới dạng cây.
* `sleep` : Hệ thống đưa về chế độ ngủ.

* `useradd` : Thêm người dùng mới.
* `groupadd` : Tạo nhóm người dùng mới.
* `passwd` : Thay đổi mật khẩu người dùng.
* `gpasswd` : Thay đổi mật khẩu của nhóm người dùng.
* `userdel` : Xóa bỏ người dùng đã tạo.
* `su` : Cho phép đăng nhập với tư cách người dùng khác.
* `groups` : Hiển thị nhóm người dùng hiện tại.
* `who` hoặc `w` : Hiển thị người dùng hiện tại.
* `id` : Hiển thị ID người dùng.

### Thao tác kiểm tra thông tin hệ thống.

* `cat /proc/cpuinfo` : Kiểm tra thông tin CPU.
* `cat /proc/meminfo` : Kiểm tra thông tin RAM.
* `cat /proc/version` : Kiểm tra thông tin Kernel Linux.
* `cat /proc/ioport` : Kiểm tra thông tin port I/O.
* `hostname` : Xem tên máy.
* `last reboot` :  Xem lịch sử reboot máy.

### Thao tác tinh chỉnh Network.

* `ifconfig -a` : Xem tất cả giao diện và trạng thái.
* `iwconfig` : Tương tự như `ifconfing` nhưng được dùng thiết lập cho mạng không dây.
* `host <DNS>` : Tìm kiếm IP của tên miền.
* `whois <DNS>` : Kiểm tra thông tin người đăng ký và sỡ hữu DNS.
* `ip <options>` :
    * `<addpress>`
    * `<add>`
    * `<route>`
    * `<link>`
    * `<-4 addpress>`
* `ping` : Kiểm tra kết nối giữa 2 nodes.