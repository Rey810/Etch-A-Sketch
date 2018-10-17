 const container = document.querySelector('.container');

//unique id generator
 var id = function () {
   return '_' + Math.random().toString(36).substr(2, 9);
  };

 for(i = 0; i < 2500; i++){
   var row = document.createElement('div');
   row.classList.add('row');
   row.setAttribute("id", i);
   row.style.cssText = 'border: 1px solid black;'
   container.appendChild(row);
   for(i2 = 1; i2 < 16; i2++){
     var col = document.createElement('div');
     col.classList.add('col');
     var new_id = id();
     col.setAttribute("id", new_id);
     new_id.addEventListener('mouseover', addColour);
     col.style.cssText = 'border: 1px dashed blue; color: blue;'
     row.appendChild(col);
   }
 }

function addColour(e){
  e.target.style.backgroundColor = "red";
}
