---
title: "Các lệnh GIT cơ bản (P1)"
date: 2019-09-15 09:22:04 +0700
categories: ["Thao tác Git"]
tags: ["command"]
image: './img/blog5.jpg'
author: "Trần Đức Lĩnh"
---

Khi đã là một lập trình viên thì GIT là một công cụ không thể thiếu, nếu bạn không biết GIT là gì?, vì sao sử dụng GIT trong project? thì mình sẽ giải thích ngắn gọn như sau.<br/>

`GIT` là một hệ thông quản lý phiên bản phân tán `(VCS - distributed Version Control System)`, là một công cụ lập trình hỗ trợ quản lý code, ghi lại lịch sử thay đổi cũng như phân nhánh (branch), chia nhiệm vụ, và tổng hợp code một cách dễ dàng hơn.

<!-- ![image-title-here](/assets/img/img-post/GIT-p1/GIT.jpg) -->

### <kbd>GIT</kbd>
**Sau đây là những lệnh `GIT` cơ bản.**
##### GIT GUI
* `gitk` : Thao tác git dưới dạng giao diện trực quan

##### Cấu hình GIT
* `git config --global user.name = " <Your name> "`
* `git config --global user.email = " <Mail@g.c> "`

##### Thời gian đăng nhập và bảo mật
* `git config --global credential.helper store` : Tạo một file ~/.git-credentials và lưu tài khoảng dưới dạng text, bảo mật không an toàn
* `git config --global credential.helper "cache --timeout=18000"` : Tự động đăng xuất sau 5 tiếng
* [Sử dụng git ssh](https://inchoo.net/dev-talk/how-to-generate-ssh-keys-for-git-authorization/)

##### Thao tác đẩy lần đầu
* `git init` : Tạo 1 file .git
* `git status` : Xem trạng thái thay đổi
* `git add " <file.name> "` : Chỉ định từng file sẽ được thêm
* `git add .` : Chỉ định tất cả các file sẽ được thêm
* `git commit -m" <comment code> "` : Ghi chú trước khi push lên
* `git remote add origin https://github.com/...` : Tạo liên kết tới Repository github
* `git remote -v` : Xem lại và đỉnh đốn đường dẫn nếu remote sai
* `git push -u origin master` : Đẩy lên github

##### Thao tác theo dõi tiến trình

`Ấn 'Q' để thoát tiến trình command`

* `git log` : Xem lại lịch sử quá trình commit, xuất mã [id.commit]
* `git show <id.commit>` : Xem chi tiết tất cả thay đổi từ [git log]
* `git diff` : Xem lại các thay đổi từ [git status], chưa [git add]

##### Thao tác xử lý vấn đề
* `->` `git remote` : Hiển thị tên remote chỉ định
* `git checkout -- <file.name>` : Xoá bỏ tất cả những thay đổi trước đó khi chưa [git add] | {*RED}
* `git reset HEAD <file.name>` : Quay lại quá trình khi lỡ [git add .] 1 file nào đó | {*GREEN}
* `git remote set-url origin <name.branch>` : Sửa đổi liên kết Repository github

##### Thao tác nhánh
* `git branch` : Kiểm tra nhánh
* `git checkout -b <name>` : Tạo nhánh
* `git checkout <name>` : Chuyển nhánh
* `B -> A` `:>>` `git checkout <A>` `:>>` `git merge <B>` : Gộp nhánh
* `git branch -D <name>` : Xoá 1 nhánh

##### Thao tác hoàn trả commit
* `git reset --soft <id.commit>` : Quay về commit chỉ định đã [git add] và chỉnh sửa commit | {*GREEN}
* `git reset --mixed <id.commit` : Quay về commit chỉ định chưa [git add] và thay đổi commit sau khi add | {*RED}
* `git reset --hard <id.commit>` : Xoá hẵn tiến trình commit đã chỉ định (NGUY HIỂM)
* `git revert <id.commit>` : Chỉ định 1 commit chỉ định và xoá đi những mã nguồn trước đó của một commit, không ảnh hưởng đến các commit nằm trước đó, ảnh hưởng các commit phía dưới (NGUY HIỂM, hạn chế dùng)

##### Thao tác từ chối
* `copy nul <.gitignore>` : Tạo 1 file .gitignore, từ chối push lên github khi chỉ định 1 folder hoặc file


##### Thao tác kéo về
* `git clone <Clone with HTTPS/SSH>` : Lấy Repositories về từ github
* `git pull` : Cập nhật thay đổi trên Repositories
* `git pull <name.remote> <name.branch>` : Cập nhật thay đổi từ các nhánh khác về nhánh chỉ định và merge các sự thay đổi
* `git fetch <name.remote> <name.branch>` : Giống như (git pull <n.r> <n.b>) chỉ khác nhau là không merge

#### Thao tác lỗi
* `git push origin master -f` : Quên pull về, khi push lên thông báo lỗi, nếu pull về sẽ mất đi thay đổi trước đó trên local, nhưng push lên thì sẽ mất đi thay đổi trên server. Lệnh này ép pull đi và push tahy đổi lên. (NGUY HIỂM, nên kiểm tra lại project trước khi bắt đầu công việc)
* `git add -A` : (**error: failed to push some refs to**) xuất hiện khi nhập lệnh `git push` thất bại. Nên bắt đầu lại từ đoạn *git add .* => *git add -A*

***
***

### <center>Các câu hỏi trong GIT</center>

* ##### **Câu hỏi:** `git add *` và `git add .` khác nhau như thế nào?
    **Trả lời:**
    * -Thực sự  `git add *` được quy định bên trong *SELL* của hệ điều hành, ý nghĩa bao hàm tất cả thư mục hiện tại đều chuyển tới *.git*, dấu `*` mang ý nghĩa là **bao gồm**, ( lưu ý rằng các file bắt đầu bởi dấu **.** đều không thêm vào).
    *   -`git add .` được sử dụng bao gồm tất cả các file bao gồm file bắt đầu bằng dấu **.** hiện tại đều chuyển tới *.git*

***

* ##### **Câu hỏi:** Sự khác nhau giữa `git add .`, `git add -u` và `git add -A`, ?
    **Trả lời:** 
    * -`git add .` : Chỉ thêm các file mới và những file đã sửa đổi bao gồm cả thuộc tính file, không theo dõi các file đã bị xoá.
    * -`git add -u` : Sẽ không thêm bất kỳ file mới nào, chỉ thêm các file đã sửa đổi khi được theo dõi trước đó bao gồm cã thuộc tính và loại bỏ những file đã bị xoá.
    * -`git add -A` : Là sự kết hợp giữa `git add .` và `git add -u`, bao gồm thêm file mới, thuộc tính file và loại bỏ những file đã xoá.

*<small>Cập nhật lần thứ (5)...</small>*