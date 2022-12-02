/*let myHeading = document.querySelector('h3');
myHeading.textContent = 'Hello World!';*/

/*let iceCream = 'chocolate';
if (iceCream === 'chocolate'){
    alert('我最喜欢巧克力冰激凌了！！');
}else{
    alert('但是巧克力才是我的最爱呀...');
}*/

//onclick是匿名函数，还有另一种写法
/*document.querySelector('h3').onclick = function(){
    alert('你点标题干嘛--！');
};
document.querySelector('img').addEventListener('click',()=>{
    alert('你又点击图片干嘛~');
});
*/

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-img.jpg'){
        myImage.setAttribute('src','images/cat.jpg');
    }else{
        myImage.setAttribute('src','images/test-img.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

myButton.onclick = function() {
    setUserName();
 }
 
 
  
  