var input
var task
var listPending

var itemsList = [
    {task:'', isInicial:true}
]

var sendTask = function(){
    input = document.getElementById('textInput')
    task = input.value

    var taskItem= document.createElement('li')
    taskItem.classList.add('task')
    taskItem.innerText= task

    listPending = document.getElementById('listPending')
    listPending.appendChild (taskItem)
}

var toggleItem = function(btn){
    itemsList[btn.id].isInitial = !itemsList[btn.id].isInicial
    printItems()
}

var delteItem = function(btn){
    itemsList.splice(btn.id, 1)
    printItems()
}

var printItems = function(){
    var listPending = document.getElementById('listPending')
    listPending.innerHTML = ''
    var listComplete = document.getElementById('listComplete')
    listComplete.innerHTML = ''

    itemsList.map (function (task, index){

        var taskItem= document.createElement('li')
          taskItem.classList.add('task')
          taskItem.innerText= task

        var toggleBtn = document.createElement ('button')
        toggleBtn.innerText = 'check-circle'
        toggleBtn.id = index
        toggleBtn.onclick = function(){toggleItem(this)}
        
        var deleteBtn = document.createElement ('button')
        deleteBtn.innerText = 'trash'
        deleteBtn.id = index
        deleteBtn.onclick = function(){deleteItem(this)} 

            taskItem.appendChild (toggleBtn)
            taskItem.appendChild (deleteBtn)

        if (task.isInicial) {
            listPending.appendChild (taskItem)
        }else {listComplete.appendChild (taskItem)    
        }
    }
        )
}