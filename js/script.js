let elArr = [];

for(let i = 1; i<=8; i++ ){
  for(let j = 1; j <= 8; j++){
    elArr.push({ x: j, y: i })
  }
};

let chessList = document.querySelector('.chess__list');

elArr.forEach((item)=>{
  let li = document.createElement('li');
  li.classList.add('chess__item');
  if( (item.x + item.y) % 2 != 0){
    li.classList.add('itemWhite');
  }else{
    li.classList.add('itemBlack');
  };
  li.innerHTML = `
    <span class="span2 d-none">${item.x}</span>
    <span class="span1 d-none">${item.y}</span>
  `;
  chessList.appendChild(li);
});

let items = document.querySelectorAll('.chess__item');
let xNum = document.querySelector('.x-num');
let yNum = document.querySelector('.y-num');

items.forEach((item)=>{
  item.addEventListener('mouseover', ()=>{
    item.classList.add("movitem");
    xNum.textContent = item.childNodes[1].textContent;
    yNum.textContent = item.childNodes[3].textContent;
  });
  item.addEventListener('mouseout', ()=>{
    item.classList.remove("movitem");
  })
});

let elBtns = document.querySelectorAll('.ches__forms-btns');
let chessBtn1 = document.querySelector('#chess__btn1');
let chessBtn2 = document.querySelector('#chess__btn2');
let chessBtn3 = document.querySelector('#chess__btn3');
let chessBtn4 = document.querySelector('#chess__btn4');
let chessBtn5 = document.querySelector('#chess__btn5');
let chessBtn6 = document.querySelector('#chess__btn6');


elBtns.forEach((item)=>{
  item.addEventListener('click', ()=>{
    elBtns.forEach((e)=>{
      e.classList.remove('orange')
    });
    item.classList.add('orange')
  })
});


chessBtn1.addEventListener('click', ()=>{
  items.forEach((item)=>{       
    item.addEventListener('mouseover', ()=>{
      item.classList.add('backWhite');
      item.classList.add('chess1');
      item.classList.remove('chess2');
      item.classList.remove('chess3');
      item.classList.remove('chess4');
      item.classList.remove('chess5');
      item.classList.remove('chess6');
      x = item.childNodes[1].textContent;
      y = item.childNodes[3].textContent;
      ghostFunc(  x, y );
    })
    item.addEventListener( 'mouseout', ()=>{
      item.classList.remove('chess1');
      item.classList.remove('backWhite');
    } )
  })
})
function ghostFunc( x, y ){
  items.forEach((item)=>{
    if( item.childNodes[1].textContent == x || item.childNodes[3].textContent == y ){
      item.classList.add('green');
    }else{
      item.classList.remove('green');
    }
  })
};

chessBtn2.addEventListener('click', ()=>{
  items.forEach((item)=>{
    item.addEventListener('mouseover', ()=>{
      item.classList.add('chess2');
      item.classList.remove('chess1');
      item.classList.remove('chess3');
      item.classList.remove('chess4');
      item.classList.remove('chess5');
      item.classList.remove('chess6');
      item.classList.add('bavkWhite');
      x = item.childNodes[1].textContent;
      y = item.childNodes[3].textContent;
      horseFunc(  x, y );
    })
    item.addEventListener('mouseout', ()=>{
      item.classList.remove('chess2');
      item.classList.remove('bavkWhite');
    })
  })
})
function horseFunc(  x, y ){
  items.forEach((item)=>{
    if(item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) - 2||
       item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) - 2||
       item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) + 2||
       item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) + 2||
       item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) + 1||
       item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) - 1||
       item.childNodes[1].textContent == eval(x) - 2 && item.childNodes[3].textContent == eval(y) + 1||
       item.childNodes[1].textContent == eval(x) - 2 && item.childNodes[3].textContent == eval(y) - 1
    ){
      item.classList.add('green')
    }else{
      item.classList.remove('green')
    }
  })
}

chessBtn3.addEventListener('click', ()=>{
  items.forEach((item)=>{
    item.addEventListener('mouseover', ()=>{
      item.classList.add('chess3')
      item.classList.remove('chess2');
      item.classList.remove('chess1');
      item.classList.remove('chess4');
      item.classList.remove('chess5');
      item.classList.remove('chess6');
      item.classList.add('backWhite')
      x = item.childNodes[1].textContent;
      y = item.childNodes[3].textContent;
      bishopFunc(x, y)
    })
    item.addEventListener('mouseout', ()=>{
      item.classList.remove('chess3')
      item.classList.remove('backWhite')
    })
  })
})
function bishopFunc(x, y){
  items.forEach((item)=>{
    if( 
      item.childNodes[1].textContent == eval(x)+1 && item.childNodes[3].textContent == eval(y)-1||
      item.childNodes[1].textContent == eval(x)+2 && item.childNodes[3].textContent == eval(y)-2||
      item.childNodes[1].textContent == eval(x)+3 && item.childNodes[3].textContent == eval(y)-3||
      item.childNodes[1].textContent == eval(x)+4 && item.childNodes[3].textContent == eval(y)-4||
      item.childNodes[1].textContent == eval(x)+5 && item.childNodes[3].textContent == eval(y)-5||
      item.childNodes[1].textContent == eval(x)+6 && item.childNodes[3].textContent == eval(y)-6||
      item.childNodes[1].textContent == eval(x)+7 && item.childNodes[3].textContent == eval(y)-7||
      item.childNodes[1].textContent == eval(x)-1 && item.childNodes[3].textContent == eval(y)+1||
      item.childNodes[1].textContent == eval(x)-2 && item.childNodes[3].textContent == eval(y)+2||
      item.childNodes[1].textContent == eval(x)-3 && item.childNodes[3].textContent == eval(y)+3||
      item.childNodes[1].textContent == eval(x)-4 && item.childNodes[3].textContent == eval(y)+4||
      item.childNodes[1].textContent == eval(x)-5 && item.childNodes[3].textContent == eval(y)+5||
      item.childNodes[1].textContent == eval(x)-6 && item.childNodes[3].textContent == eval(y)+6||
      item.childNodes[1].textContent == eval(x)-7 && item.childNodes[3].textContent == eval(y)+7||
      item.childNodes[1].textContent == eval(x)+1 && item.childNodes[3].textContent == eval(y)+1||
      item.childNodes[1].textContent == eval(x)+2 && item.childNodes[3].textContent == eval(y)+2||
      item.childNodes[1].textContent == eval(x)+3 && item.childNodes[3].textContent == eval(y)+3||
      item.childNodes[1].textContent == eval(x)+4 && item.childNodes[3].textContent == eval(y)+4||
      item.childNodes[1].textContent == eval(x)+5 && item.childNodes[3].textContent == eval(y)+5||
      item.childNodes[1].textContent == eval(x)+6 && item.childNodes[3].textContent == eval(y)+6||
      item.childNodes[1].textContent == eval(x)+7 && item.childNodes[3].textContent == eval(y)+7||
      item.childNodes[1].textContent == eval(x)-1 && item.childNodes[3].textContent == eval(y)-1||
      item.childNodes[1].textContent == eval(x)-2 && item.childNodes[3].textContent == eval(y)-2||
      item.childNodes[1].textContent == eval(x)-3 && item.childNodes[3].textContent == eval(y)-3||
      item.childNodes[1].textContent == eval(x)-4 && item.childNodes[3].textContent == eval(y)-4||
      item.childNodes[1].textContent == eval(x)-5 && item.childNodes[3].textContent == eval(y)-5||
      item.childNodes[1].textContent == eval(x)-6 && item.childNodes[3].textContent == eval(y)-6||
      item.childNodes[1].textContent == eval(x)-7 && item.childNodes[3].textContent == eval(y)-7
     ){    
      item.classList.add('green')
    }else{
      item.classList.remove('green')
    }
  })
}

chessBtn4.addEventListener('click', ()=>{
  items.forEach((item)=>{
    item.addEventListener('mouseover', ()=>{
      item.classList.add('chess4');
      item.classList.remove('chess1');
      item.classList.remove('chess2');
      item.classList.remove('chess3');
      item.classList.remove('chess5');
      item.classList.remove('chess6');
      item.classList.add('backWhite');

      x = item.childNodes[1].textContent;
      y = item.childNodes[3].textContent;
      quennFunc(x, y);
    })
    item.addEventListener('mouseout', ()=>{
      item.classList.remove('backWhite');
      item.classList.remove('chess4')
    })
  })
})
function quennFunc(x, y){
  items.forEach((item)=>{
    if( 
        item.childNodes[1].textContent == x || item.childNodes[3].textContent == y ||
        item.childNodes[1].textContent == eval(x)+1 && item.childNodes[3].textContent == eval(y)-1||
        item.childNodes[1].textContent == eval(x)+2 && item.childNodes[3].textContent == eval(y)-2||
        item.childNodes[1].textContent == eval(x)+3 && item.childNodes[3].textContent == eval(y)-3||
        item.childNodes[1].textContent == eval(x)+4 && item.childNodes[3].textContent == eval(y)-4||
        item.childNodes[1].textContent == eval(x)+5 && item.childNodes[3].textContent == eval(y)-5||
        item.childNodes[1].textContent == eval(x)+6 && item.childNodes[3].textContent == eval(y)-6||
        item.childNodes[1].textContent == eval(x)+7 && item.childNodes[3].textContent == eval(y)-7||
        item.childNodes[1].textContent == eval(x)-1 && item.childNodes[3].textContent == eval(y)+1||
        item.childNodes[1].textContent == eval(x)-2 && item.childNodes[3].textContent == eval(y)+2||
        item.childNodes[1].textContent == eval(x)-3 && item.childNodes[3].textContent == eval(y)+3||
        item.childNodes[1].textContent == eval(x)-4 && item.childNodes[3].textContent == eval(y)+4||
        item.childNodes[1].textContent == eval(x)-5 && item.childNodes[3].textContent == eval(y)+5||
        item.childNodes[1].textContent == eval(x)-6 && item.childNodes[3].textContent == eval(y)+6||
        item.childNodes[1].textContent == eval(x)-7 && item.childNodes[3].textContent == eval(y)+7||
        item.childNodes[1].textContent == eval(x)+1 && item.childNodes[3].textContent == eval(y)+1||
        item.childNodes[1].textContent == eval(x)+2 && item.childNodes[3].textContent == eval(y)+2||
        item.childNodes[1].textContent == eval(x)+3 && item.childNodes[3].textContent == eval(y)+3||
        item.childNodes[1].textContent == eval(x)+4 && item.childNodes[3].textContent == eval(y)+4||
        item.childNodes[1].textContent == eval(x)+5 && item.childNodes[3].textContent == eval(y)+5||
        item.childNodes[1].textContent == eval(x)+6 && item.childNodes[3].textContent == eval(y)+6||
        item.childNodes[1].textContent == eval(x)+7 && item.childNodes[3].textContent == eval(y)+7||
        item.childNodes[1].textContent == eval(x)-1 && item.childNodes[3].textContent == eval(y)-1||
        item.childNodes[1].textContent == eval(x)-2 && item.childNodes[3].textContent == eval(y)-2||
        item.childNodes[1].textContent == eval(x)-3 && item.childNodes[3].textContent == eval(y)-3||
        item.childNodes[1].textContent == eval(x)-4 && item.childNodes[3].textContent == eval(y)-4||
        item.childNodes[1].textContent == eval(x)-5 && item.childNodes[3].textContent == eval(y)-5||
        item.childNodes[1].textContent == eval(x)-6 && item.childNodes[3].textContent == eval(y)-6||
        item.childNodes[1].textContent == eval(x)-7 && item.childNodes[3].textContent == eval(y)-7
      ){
      item.classList.add('green')
    }else{
      item.classList.remove('green')
    }
  })
}

chessBtn5.addEventListener('click', ()=>{
  items.forEach((item)=>{
    item.addEventListener('mouseover', ()=>{
      item.classList.add('chess5');
      item.classList.remove('chess1');
      item.classList.remove('chess2');
      item.classList.remove('chess3');
      item.classList.remove('chess4');
      item.classList.remove('chess6');
      item.classList.add('backWhite');

      x = item.childNodes[1].textContent;
      y = item.childNodes[3].textContent;
      kingFunc(x, y)
    })
    item.addEventListener('mouseout', ()=>{
      item.classList.remove('backWhite');
      item.classList.remove('chess5');
    })
  })
})
function kingFunc(x, y){
  items.forEach((item)=>{
    if( 
      item.childNodes[1].textContent == eval(x)-1 && item.childNodes[3].textContent == eval(y)+1||
      item.childNodes[1].textContent == eval(x)-1 && item.childNodes[3].textContent == eval(y)-1||
      item.childNodes[1].textContent == eval(x)+1 && item.childNodes[3].textContent == eval(y)+1||
      item.childNodes[1].textContent == eval(x)+1 && item.childNodes[3].textContent == eval(y)-1||
      item.childNodes[1].textContent == eval(x) && item.childNodes[3].textContent == eval(y)-1||
      item.childNodes[1].textContent == eval(x) && item.childNodes[3].textContent == eval(y)+1||
      item.childNodes[1].textContent == eval(x)+1 && item.childNodes[3].textContent == eval(y)||
      item.childNodes[1].textContent == eval(x)-1 && item.childNodes[3].textContent == eval(y)
     ){
      item.classList.add('green')
    }else{
      item.classList.remove('green')
    }
  })
}

chessBtn6.addEventListener('click', ()=>{
  items.forEach((item)=>{
    item.addEventListener('mouseover', ()=>{
      item.classList.add('chess6');
      item.classList.remove('chess1');
      item.classList.remove('chess2');
      item.classList.remove('chess3');
      item.classList.remove('chess4');
      item.classList.remove('chess5');
      item.classList.add('backWhite');

      x = item.childNodes[1].textContent;
      y = item.childNodes[3].textContent;

      piyodaFun(x, y)
    })
    item.addEventListener('mouseout', ()=>{
      item.classList.remove('chess6');
      item.classList.remove('backWhite');
    })
  })
})
function piyodaFun(x, y) {
  items.forEach((item) => {
    if (item.childNodes[3].textContent == eval(y)- 1 && item.childNodes[1].textContent == x && y != 8 ||
      y == 7 && item.childNodes[3].textContent == eval(y) - 2 && item.childNodes[1].textContent == x) {
      item.classList.add('green')
    }
    else {
      item.classList.remove('green')
    }
  })
}

chessList.addEventListener('mouseout', ()=>{
  items.forEach((item)=>{
    item.classList.remove('green');
  })
  xNum.textContent = 0;
  yNum.textContent = 0;
})

let chess3d = document.querySelector('.chess__3d');
let container = document.querySelector('.container');
let count = 1;
chess3d.addEventListener('click', (e)=>{
  if( count == 1 ){
    e.target.textContent = "2D";
    count = 2
  }else{
    e.target.textContent = "3D";
    count = 1
  }
  container.classList.toggle('anim3D');
})
