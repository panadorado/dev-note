---
title: "Ôn lại hình học cơ bản (P1)"
date: 2019-09-13 09:02:04 +0700
categories: ["Toán hình"]
tags: ["math"]
image: './img/blog4.jpg'
author: "Trần Đức Lĩnh"
---

Một điều thú vị là khi bạn muốn tối ưu những `icon` trên website giúp việc load trang trở nên nhanh hơn, bạn phải biết về `SVG` và `<canvas>`.<br/>
Khác biệt lớn nhất khi thiết kế icon theo ý muốn ta phải sử dụng toạ độ để tính toán các điểm. Tất nhiên sẽ có những phần mềm hỗ trợ làm điều đó, nhưng mình khuyên các bạn nên biết chút ít về cách tạo `SVG`, `<canvas>` thủ công.


### Cùng nhau ôn lại 1 chút kiến thức toán hình nào.
*(Hiển thị toạ độ sẽ bị biến dạng khi xem theo <strong>chiều dọc</strong> trên hầu hết thiết bị di động.)*
<hr/>
##### **Hình tam giác**

* Nếu ta có 1 điểm, tất nhiên sẽ vẽ được vô số tia, vô số đường thẳng.

<div id="point" class="jxgbox jxgControll_embed"></div>

* Nếu đi qua 2 điểm chỉ vẽ được duy nhất 1 đường thằng.

<div id="twoPoint" class="jxgbox jxgControll_embed"></div>

* Nếu M nằm giữa A, B thì sẽ có vô số chỗ trên AB.
* M nằm giữa AB là `trung điểm` của AB.
* Đường `trung trực` của AB là đường thẳng đi qua `trung điểm` AB và vuông góc với AB.
* Những điểm nằm trên đường `trung trực luôn luôn` cách đều 2 đầu đoạn thẳng.

<div id="midPoint" class="jxgbox jxgControll_embed"></div>


* 3 điểm **ABC** nằm trên 1 đường thẳng thì 3 điểm đó thẳng hàng.
* 3 điểm **DEF** không nằm trên 1 đường thẳng thì sẽ tạo ra 1 hình `tam giác`.

<div id="threeDot" class="jxgbox jxgControll_embed"></div>

* Các loại tam giác phổ biến

<p class="text-center text-bold">Tam giác tù</p>
<div id="triangle_basic_1" class="jxgbox jxgControll_embed"></div>

***
<p class="text-center text-bold">Tam giác vuông</p>
<div id="triangle_basic_2" class="jxgbox jxgControll_embed"></div>

***
<p class="text-center text-bold">Tam giác đều</p>
<div id="triangle_basic_3" class="jxgbox jxgControll_embed"></div>

***
<p class="text-center text-bold">Tam giác cân</p>
<div id="triangle_basic_4" class="jxgbox jxgControll_embed"></div>

***
<p class="text-center text-bold">Tam giác vuông cân</p>
<div id="triangle_basic_5" class="jxgbox jxgControll_embed"></div>


* Đường cao là đương hạ từ đỉnh vuông góc với cạnh đối diện.

<div id="high_road_1" class="jxgbox jxgControll_embed"></div>
<div id="high_road_2" class="jxgbox jxgControll_embed"></div>


**Pitago**
* *Bình phương cạnh huyền bằng tổng bình phương 2 cạnh gốc vuông* 

<div id="pitago" class="jxgbox jxgControll_embed"></div>


**Hệ thức lượng**
* `sinα = c/b`
* `cosα = a/b`
* `tanα = c/a`
* `cotα = a/c`

* *Bình phương 1 cạnh gốc vuông bằng tích hình chiếu nhân với cạnh huyền*

<div id="trigonometric" class="jxgbox jxgControll_embed"></div>


* **Diện tích tam giác**

<div id="acreage" class="jxgbox jxgControll_embed"></div>

<div id="acreage_2" class="jxgbox jxgControll_embed"></div>

* **Định lý hàm số (sin)**
    * `a/sinA = b/sinB = c/sinC = 2R`

* **Định lý hàm số (cos)**
    * `a^2 = b^2 + c^2 - 2bc . cosA`
    * `b^2 = a^2 + c^2 - 2ac . cosB`
    * `c^2 = a^2 + b^2 - 2ab . cosC`

* **Đường trung tuyến** là đường thẳng hạ từ đỉnh xuống trung điểm cạnh đối diện.
* **Trọng tâm** là giao nhau của 3 đường trung tuyến.

<div id="median_line" class="jxgbox jxgControll_embed"></div>

* => G là trọng tâm.<br/>
    * `AG = 2/3 AM`
    * `GM = 1/3 AM`
    * `AM = 1/3 GM`

* **Trực tâm** là giao nhau của 3 đường cao<br/>
=> H là trọng tâm

<div id="direct" class="jxgbox jxgControll_embed"></div>

* **Tâm đường tròn ngoại tiếp** là giao nhau giữa 3 đường trung trực.<br/>
=> I là đường tròn ngoại tiếp tam giác ABC

<div id="circumcircle_out" class="jxgbox jxgControll_embed"></div>

* **Tâm đường tròn nội tiếp** là giao nhau giữa 3 đường phân giác.<br/>
=> I là đường tròn nội tiếp tam giác ABC

<div id="circumcircle_in" class="jxgbox jxgControll_embed"></div>

***

Kết thúc phần 1 giúp các bạn nhớ lại cấu tạo cơ bản của 1 đường thẳng và 3 điểm không thẳng hàng tạo thành 1 tam giác. Các phần sau mình sẽ ôn lại cơ bản các hình học phức tạp hơn.