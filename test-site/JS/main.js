let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');    
} else {
  alert('但是巧克力才是我的最爱呀……'); // alert() 函数在浏览器窗口内弹出警告框
}

document.querySelector('h2').onclick = function() {
    alert('别戳我，我怕疼。');
}//鼠标的点击操作会触发该事件。 这里是html整体。
//这里的匿名函数包含单击鼠标时要运行的代码）赋值给了 html 的 onclick 属性。
//等价于let myHTML = document.querySelector('html');
//myHTML.onclick = function() {};


let myImage = document.querySelector('img');

myImage.onclick = function() //点击图片切换
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute('src', 'images/18000.jpg');
    } else {
      myImage.setAttribute('src', 'images/1.jpg');
    }
}
/*这里首先把 <img> 元素的引用存放在 myImage 变量里。
然后将这个变量的 onclick 事件与一个匿名函数绑定。
每次点击图片时：获取这张图片的 src 属性值。
用一个条件句来判断 src 的值是否等于原始图像的路径:
    如果是，则将 src 的值改为第二张图片的路径，并在 <img> 内加载该图片。
    如果不是（意味着它已经修改过）, 则把 src 的值重新设置为原始图片的路径，即原始状态。
*/ 

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName();
  /*第 1 - 4 行的 setHeading 函数将根据 name 参数将页面标题设置为个性化的欢迎信息。比如传入的 name 参数为“李雷”，那么调用该函数后页面标题将变为“Mozilla 酷毙了，李雷！”。函数的实现中首先将 h1 元素的引用保存在 myHeading 变量中，然后设置 myHeading 的 textContent 属性。

第 6 - 10 行的 setUserName 函数将为页面设置用户名信息。该函数首先调用了 prompt() 函数， 与 alert() 类似会弹出一个对话框。但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。接下来将调用 localStorage API ，它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。 最后调用上述的 setHeading 函数来个性化欢迎信息。

第 12 行尝试取得浏览器中保存的 'name' 数据项。第 13 - 17 行的 if ... else 块是初始化代码，因为它在页面初次读取时进行构造工作。条件 !storedName 在 storedName 不存在时值为真，将调用 setUserName 函数，若条件为假时以 storedName 为参数调用 setHeading 函数。此条件语句块可描述为：若 'name' 数据项不存在，则由用户输入用户名，若存在则直接将 'name' 中保存的用户名显示到个性化欢迎信息中。

第 19 行将页面中 button 元素的引用保存在 myButton 中，第 20 行将这个按钮的 onclick 事件处理器设为 setUserName 函数。

第一次访问网页时，将询问用户名并发出一段个性化的信息。并可随时点击按钮来改变用户名 。告诉你一个额外的福利，因为用户名是保存在 localStorage 里的，网站关闭后也不会丢失，所以重新打开浏览器时所设置的名字信息将依然存在！ */