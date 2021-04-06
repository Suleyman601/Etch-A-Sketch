function makeGrid(gridSize){
   const container = document.getElementById('container');
  let gridColumnsString = "";
  for(let i = 0; i < gridSize; ++i){
    gridColumnsString +='1fr ';
  }
  container.style.gridTemplateColumns = gridColumnsString;

  for(let i = 0; i < gridSize; ++i){
    for(let j = 0; j < gridSize; ++j){
      let div = document.createElement('div');
      div.classList.add('box')
      container.appendChild(div);
    }
  }


}
function onHover(e){
  
 if(e.target.style.backgroundColor === ''){
    let rgbValue1 = Math.floor(Math.random() * 255);
    let rgbValue2 = Math.floor(Math.random() * 255);
    let rgbValue3 = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
 }
 
}

function clear(){
  const container = document.getElementById('container');
  const boxes = document.querySelectorAll('.box');
  
  for(let i = 0; i< boxes.length; i++){
    container.removeChild(boxes.item(i));
  }
  
  let number = 0;
  while(true){
    let numberStr = prompt("Enter grid dimension");
    number = parseInt(numberStr);
    if(number <= 100)
      break;
    alert('Number has to be less than or equal to 100');
  }

  makeGrid(number);
  addEventToBoxes();
}

function addEventToBoxes(){
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box) =>{
    box.addEventListener('mouseover', onHover);
  })
}


makeGrid(10);
addEventToBoxes();

const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', clear);

