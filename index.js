


   
    let tbody=document.getElementById("tbody");
  
let i=0;

let insert=function(){
        let inputText=document.getElementById("input-text");
        var text =inputText.value;
        i++;
        if(text !=''){
         tbody.innerHTML+=`<tr class="delete" id="${i}">
         <td> <input type="checkbox" name="check" id="check"></td>
         <td> ${text} </td>
         <td><button onclick="removing('${i}')"><i class="fa-solid fa-trash-can"></i></button></td>
         </tr>
         `;
         
         if (i%2 == 0) {
            document.getElementById(`${i}`).style.backgroundColor = "rgb(160, 155, 155)";
        }
       

    
         
    }
    }
    
function removing(i) {
    let erase =document.getElementById(`${i}`).remove();    
}

