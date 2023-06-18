
let serial = 0;

    
document.getElementById('triangle-calculate').addEventListener('click',function(event){
    serial+=1;
    const inputFieldFirst = document.getElementById('triangle-Field-first').value;
    const inputFieldStringFirst = parseInt(inputFieldFirst);
    const inputFieldStringSec = document.getElementById('triangle-Field-second').value;
    const heightTriangleStringSec = parseInt(inputFieldStringSec);

    if(!isNaN(inputFieldStringFirst) && heightTriangleStringSec > 0){
      const triangle = 0.5 * heightTriangleStringSec * inputFieldStringFirst;
      const heading = event.target.parentNode.parentNode.children[0].innerText;
  
      table(serial, heading ,triangle );
    // disabledButton("btn-calculate");
    }
    else{
      alert('Input number')
    }
})
document.getElementById('rectangle-calculate').addEventListener('click',function(event){
    serial = serial +1;
    const inputFieldFirst = event.target.parentNode.parentNode.children[3].children[0].value;
    const inputFieldStringFirst = parseInt(inputFieldFirst);
    const inputFieldStringSec = event.target.parentNode.parentNode.children[3].children[1].value;
    const heightTriangleStringSec = parseInt(inputFieldStringSec);
    
  if(!isNaN(inputFieldStringFirst) && heightTriangleStringSec > 0){
    const triangle = heightTriangleStringSec * inputFieldStringFirst;
    const heading = event.target.parentNode.parentNode.children[0].innerText;
    table(serial, heading ,triangle );
  }
  else{
    alert('Input number')
  }
})
document.getElementById('parallelogram-calculate').addEventListener('click',function(event){
    serial = serial +1;
    const inputFieldFirst = event.target.parentNode.parentNode.children[3].children[0].value;
    const inputFieldStringFirst = parseInt(inputFieldFirst);
    const inputFieldStringSec = event.target.parentNode.parentNode.children[3].children[1].value;
    const heightTriangleStringSec = parseInt(inputFieldStringSec);

  if(!isNaN(inputFieldStringFirst) && heightTriangleStringSec > 0){
    const triangle = heightTriangleStringSec * inputFieldStringFirst;
    const heading = event.target.parentNode.parentNode.children[0].innerText;

    table(serial, heading ,triangle );
  }
  else{
    alert('Input number')
  }
})
document.getElementById('rhombus-calculate').addEventListener('click',function(event){
    serial+=1;
    const inputFieldFirst = event.target.parentNode.parentNode.children[3].children[0].value;
    const inputFieldStringFirst = parseInt(inputFieldFirst);
    const inputFieldStringSec = event.target.parentNode.parentNode.children[3].children[1].value;
    const heightTriangleStringSec = parseInt(inputFieldStringSec);

  if(!isNaN(inputFieldStringFirst) && heightTriangleStringSec > 0){
    const triangle =0.5 * heightTriangleStringSec * inputFieldStringFirst;
    const heading = event.target.parentNode.parentNode.children[0].innerText;

    table(serial, heading ,triangle );
  }
  else{
    alert('Input number')
  }
})
document.getElementById('pentagon-calculate').addEventListener('click',function(event){
    serial+=1;
    const inputFieldFirst = event.target.parentNode.parentNode.children[3].children[0].value;
    const inputFieldStringFirst = parseInt(inputFieldFirst);
    const inputFieldStringSec = event.target.parentNode.parentNode.children[3].children[1].value;
    const heightTriangleStringSec = parseInt(inputFieldStringSec);

  if(!isNaN(inputFieldStringFirst) && heightTriangleStringSec > 0){
    const triangle =0.5 * heightTriangleStringSec * inputFieldStringFirst;
    const heading = event.target.parentNode.parentNode.children[0].innerText;

    table(serial, heading ,triangle );
  }
  else{
    alert('Input number')
  }
})
document.getElementById('ellipse-calculate').addEventListener('click',function(event){
    serial+=1;
    const inputFieldFirst = event.target.parentNode.parentNode.children[3].children[0].value;
    const inputFieldStringFirst = parseInt(inputFieldFirst);
    const inputFieldStringSec = event.target.parentNode.parentNode.children[3].children[1].value;
    const heightTriangleStringSec = parseInt(inputFieldStringSec);

  if(!isNaN(inputFieldStringFirst) && heightTriangleStringSec > 0){
    const triangle =3.14159 * heightTriangleStringSec * inputFieldStringFirst.toFixed(2);
    const heading = event.target.parentNode.parentNode.children[0].innerText;

    table(serial, heading ,triangle.toFixed(2) );
  }
  else{
    alert('Input number')
  }
})



// function set data table 
function table(serial, heading,triangle){
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial}. </td>
      <td>${heading}</td>
      <td>${triangle}m<sup>2</sup></td>
      <td>
      <button class="font-medium bg-blue-400 hover:bg-blue-800 text-white normal-case py-1 px-3 mx-auto rounded-lg my-3"">Covert to m<sup>2</sup></button>
      </td>
`;
container.appendChild(tr);
}

