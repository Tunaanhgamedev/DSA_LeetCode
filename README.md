<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:f7971e,100:ffd200&height=200&section=header&text=LeetCode%20Journey&fontSize=40&fontColor=ffffff"/>
</p>

<h1 align="center">📚 LeetCode Journey</h1>
<p align="center">
  <b>Hành trình luyện thuật toán & cấu trúc dữ liệu mỗi ngày 🚀</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Progress-Daily%20Practice-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Focus-DSA-blue?style=for-the-badge"/>
</p>

---

## 📊 Stats

![Total](https://img.shields.io/badge/Total-0-blue?style=for-the-badge)
![Easy](https://img.shields.io/badge/Easy-0-green?style=for-the-badge)
![Medium](https://img.shields.io/badge/Medium-0-orange?style=for-the-badge)
![Hard](https://img.shields.io/badge/Hard-0-red?style=for-the-badge)

## 🚀 Overview

Đây là repository ghi lại quá trình học **Data Structures & Algorithms (DSA)** thông qua các bài tập trên LeetCode.

🎯 Mục tiêu:

* Rèn luyện tư duy giải thuật
* Chuẩn bị cho phỏng vấn lập trình
* Xây dựng thói quen học mỗi ngày

---

## 📌 Goals

* 📅 Giải ít nhất **1 bài/ngày**
* 🧠 Hiểu bản chất, không chỉ code
* 🔁 Review lại các bài đã làm
* 📝 Ghi chú cách tiếp cận & tối ưu

---

## 📁 Structure

```bash id="r4nx9y"
leetcode/
 ├── c++/
 ├── c#/
 ├── js/
 ├── scripts/        # auto tracker
 ├── notes/          # ghi chú & patterns
 └── README.md
```

---

## 🤖 Automation

Repository sử dụng script Node.js để:
- Tự động đếm số bài đã giải
- Cập nhật bảng Progress trong README

Chạy:
```bash
node scripts/tracker.js
```

---

## 🧠 Topics Covered

* Arrays
* Strings
* Hash Table
* Two Pointers
* Sliding Window
* Stack / Queue
* Recursion
* Dynamic Programming
* Graph / Tree

---

## 📊 Progress

| Level  | Solved |
| ------ | ------ |
| Easy   | 0      |
| Medium | 0      |
| Hard   | 0      |

> 🔄 (Cập nhật số lượng bài mỗi ngày)

---

## ✍️ Example Solution

```javascript id="4a8q4r"
// Two Sum
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
};
```

---

## 🎯 Learning Strategy

* 🔹 Hiểu brute-force trước
* 🔹 Tối ưu dần (O(n²) → O(n))
* 🔹 Ghi chú lại pattern
* 🔹 Ôn lại sau 1–3 ngày

---

## 📅 Daily Log

| Day | Problem | Level | Note     |
| --- | ------- | ----- | -------- |
| 1   | Two Sum | Easy  | Hash Map |
| 2   | ...     | ...   | ...      |

---

## 💡 Highlights

* Xây dựng thói quen học liên tục
* Tập trung vào tư duy hơn là số lượng
* Áp dụng pattern để giải bài nhanh hơn

---

## 🚀 Future Plan

* 📌 Hoàn thành 150+ bài
* 📌 Tập trung Medium / Hard
* 📌 Học sâu Dynamic Programming
* 📌 Mock interview

---

## 📸 Motivation

<p align="center">
  <img src="https://media.giphy.com/media/26gsspfbt1HfVQ9va/giphy.gif" width="400"/>
</p>

---

## 📄 License

This repository is for learning purposes.
