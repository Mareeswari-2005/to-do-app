
const bt=document.getElementById('add');
const taskli = document.querySelector('.task-list');
const task=document.querySelector('.task')
bt.addEventListener('click', (e) => {
  e.preventDefault();
  const tasks=task.value;
  const newtask=document.createElement('input');
  newtask.type="checkbox";
  newtask.id   = "task-" + Date.now(); 
  newtask.style.width="20px";
  newtask.style.height="20px"

  newtask.addEventListener('change', function() {
    if (this.checked) {
      alert("Task completed");
      const atskcm=document.createElement('p')
      const stskcm=document.querySelector('.task-com');
      atskcm.textContent=label.textContent
      stskcm.appendChild(atskcm);
    } else {
      alert("Task marked incomplete");
    }
  });

  const label=document.createElement('label');
  label.htmlFor= newtask.id;
  label.appendChild(newtask);
  label.appendChild(document.createTextNode(" "+tasks));


  taskli.appendChild(label);
  task.value=" ";
  
  
});