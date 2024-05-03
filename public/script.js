const addtask = document.querySelector('#addtask');
const newtask = document.querySelector('#newtask');
const taskList = document.querySelector('.taskList');
// app.post('/deletetodos',(req,res)=>{
//   const {id}=req.body;
//   todos = todos.filter((d)=>{
//       if(d.id == id)return false;
//       return true;
//   })
//   res.redirect('/gettodos');
// })


function addToDom(todos) {
    taskList.innerText = ''
    // console.log(todos);
    todos.forEach(element => {
        // 1. Create the Element
        let li = document.createElement('li');
        // 2. Update the Text
        li.innerHTML = `
        <span class="taskname">${element.name}</span>
            <button atrid=${element._id} class="upBtn">↑</button>
            <button atrid=${element._id} class="downBtn">↓</button>
            <button atrid=${element._id} class="deleteBtn">❌</button>
        `
        // 3. Simply Append This to Tasklist
        taskList.appendChild(li);

    })
}

axios.get('/gettodos')
  .then((res) =>{
    let todos = res.data;
    addToDom(todos);
  })
  .catch((err) => {
    console.log(err);
  })
 

addtask.addEventListener('click',(ev) => {
    ev.preventDefault();
    axios.post('/addtodos', {
        name:newtask.value
    })
         .then((res)=>{
            let todos =res.data;
            newtask.value = ''
            console.log(todos);
            addToDom(todos);
         })
         .catch ((err)=> {
          console.log(err);
    })
})

function deleteTodo(atrid){
  console.log("delete Success");
  axios.post('/deletetodos',{id:atrid})
      .then((res)=>{
           let todos = res.data;
           addToDom(todos);
      })
      .catch(err=>{
        console.log(err);
      })
}


taskList.addEventListener('click',async (ev)=>{
    // console.log(ev);
    // console.log(ev.target);
    let atrid = ev.target.getAttribute('atrid');
    let btnName = ev.target.className;
    console.log(atrid);
    if(btnName === 'deleteBtn'){
       deleteTodo(atrid);

    }
}
 )
// taskList.addEventListener('click',async (ev)=>{
//     let item = ev.target;
//     if(item.classList.contains('upBtn')){
//         let taskName =  item.parentElement.previousElementSibling.innerText;
//         console.log(taskName);
//         let {data} = await axios.get(`/increase?name=${taskName}`);
//         addToTaskList(data);
//     }
//     else if(item.classList.contains('downBtn')){
//         let taskName = item.parentElement.previousElementSibling.innerText;
//         console.log(taskName);
//         let {data} = await axios.get(`/decrease?name=${taskName}`);
//         addToTaskList(data);
//     }
//     else if(item.classList.contains('deleteBtn')){
//         let taskName = item.parentElement.previousElementSibling.innerText;
//         console.log(taskName);
//         let {data} = await axios.get(`/deletetask?name=${taskName}`);
//         addToTaskList(data);
//     }
// })


// async function bootTodo(){
//     try{
//         let {data} = await axios.get('/gettodos');
//         addToDom(data);
//     }catch(err){
//         alert(`Unable to add current task, ${err.message}`)
//     }
// }

// bootTodo();