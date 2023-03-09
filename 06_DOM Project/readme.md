# **DOM Assignment 06**
>**Note**: To complete all the given task.

## **Initial Output**

![](./Output/initialOutput.png)

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## **Task 1**

To change the source of image element in the header section from **equalizer** logo to **ineuron** logo.

### **After Update**

![](./Output/DOM%20P3%20SS-1.png)

### **Project Solution**

```
const ineuronLogo = document.querySelector("header img");
ineuronLogo.src = "./assets/ineuron-logo.png"
```

---

## **Task 2**

To append a new element in the footer section of **"linkedin logo" after the twitter logo**.

### **After Update**

![](./Output/DOM%20P3%20SS-2.png)

### **Project Solution**

```
const parent = document.createElement("div");
parent.className = "footer_social_ico";
const child = document.createElement("i");
child.className = "fa-brands fa-linkedin";
const element = document.querySelector(".footer_social");
element.appendChild(parent).appendChild(child);
```

---