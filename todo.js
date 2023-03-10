let id = 0;

document.getElementById('add').addEventListener('click'), () => {
  let createDate = new Date();
  let table = document.getElementById('list');
  let row = table.insertRow(1);
  row.setAttritbute("id", 'item-${id}');
  row.insertCell(0).innerHTML = document.getElementById('new-task').value;
  row.insertCell(1).innerHTML = '${createdDate.getFullYear()}-${createdDate.getMonth() + 1)-${createdDate.getDate()}';
  row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
  row.insertCell(3).innerHTML = document.getElementById('new-and-date').value;
  let actions = row.insertCell(4);
  actions.appendChild(createdDeleteButton(id++));
  document.getElementById('new-task').value = '';
});

function creatDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log('Deleting row with id: item-${id}');
        let elementToDelete = document.getElementById('item-${id}');
        elementToDelete.parentMode.removeChild(elementToDelete);
    };
    return btn;    
}

  
