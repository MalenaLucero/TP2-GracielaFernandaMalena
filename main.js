var counterPending //contador de tareas pendientes
var counterComplete//contador de tareas completas
var allTasks = [] //Array de las tasks como objects
var secondTitle = []
var listPending //lista de tareas pendientes
var listComplete //lista de tareas completadas
var textPending //texto "no hay tareas pendientes"
var textComplete //texto "no hay tareas completadas"
var deleteBtn //anchor que contiene al icono removeSimple
var completeBtn //anchor que contiene al check de completado
var checkBtn //anchor que contiene al icono checkSimple
var removeSimple //icono del tacho de basura sin hover
var checkSimple //icono del tick sin checkear
var numberPending //para mostrar la cantidad de tareas pendientes
var numberComplete
var spanPending
var spanComplete
var anchorContainer //div que contiene los iconos de cada lista
var titleBtn

var loadedPage = function(){
    listPending = document.getElementById('listPending')
    listPending.innerHTML = ''
    listComplete = document.getElementById('listComplete')
    listComplete.innerHTML = ''
    textPending = document.getElementById('textPending')
    textComplete = document.getElementById('textComplete')
    counterPending = 0
    counterComplete = 0
    spanPending = document.getElementById('counterPending')
    spanComplete = document.getElementById('counterComplete')
    allTasks.map(function(item, index){
        var newTask = document.createElement('li')
        newTask.innerText = item.text
        newTask.classList.add('itemPending')
        anchorContainer = document.createElement('div')
        anchorContainer.classList.add('anchorContainer')
        newTask.appendChild(anchorContainer)

        deleteBtn = document.createElement('a')
        deleteBtn.classList.add('deleteBtn')
        removeSimple = document.createElement('img')
        removeSimple.classList.add('removeSimple')
        removeSimple.src = 'assets/delete_purple.png'
        removeSimple.classList.add('removeIcon')
        anchorContainer.appendChild(deleteBtn)
        deleteBtn.appendChild(removeSimple)
        deleteBtn.id = index
        deleteBtn.onclick = function(){ deleteItem(this) }

        checkBtn = document.createElement('a')
        checkBtn.classList.add('checkBtn')
        checkSimple = document.createElement('img')
        checkSimple.src = 'assets/checkmark_purple.png'
        checkSimple.classList.add('checkIcon')
        checkBtn.id = index
        checkBtn.onclick = function(){toggle(this.id)}
        anchorContainer.appendChild(checkBtn)
        checkBtn.appendChild(checkSimple)
        
        arrangeList(item.isPending, newTask)
    })
    
    showInstructions(textPending, counterPending)
    showInstructions(textComplete, counterComplete)
    showData(spanPending, counterPending)
    showData(spanComplete, counterComplete)
}

//toma el input y lo pone adentro del array
var printTask = function(){
    var textInput = document.getElementById('textInput')
    //no entra si el input esta vacio
    if(textInput.value !== ''){
        allTasks.unshift({
        text: textInput.value,
        isPending: true,
        isDeleted: false,
        })
        textInput.value = ''
        loadedPage()
    }
}

var sendTitle = function(){
     var titleInput =document.getElementById("titleInput");
     titleInput.innerHTML = ''
     var commentItem = document.createElement ("p")
     commentItem.innerText = titleInput.value
     demo = document.getElementById("demo")
     demo.appendChild(commentItem)
     commentItem.classList.add('inputTclass')
     commentItem.id = (0)

     //var anchorContainerT = document.createElement('div')
     //anchorContainerT.classList.add('anchorContainerT')
     //commentItem.appendChild(anchorContainerT)

     var titleBtn = document.createElement('a')
     //titleBtn.innerText = 'borrame'
     titleBtn.classList.add('titleBtn')
     commentItem.appendChild(titleBtn)

    var imgTitleBtn = document.createElement('img')
    imgTitleBtn.classList.add('imgTitleBtn')
    imgTitleBtn.src = 'assets/delete_purple.png'
    
    titleBtn.appendChild(imgTitleBtn)

     titleBtn.onclick = function(){deleteTBtn()}
     
    }




var deleteTBtn = function(){
  var titleItem =document.getElementById("0")

  if(titleItem.hasChildNodes()) {
  titleItem.removeChild (titleItem.childNodes[0]);
  }

  
}

//deleteTitle.classList.add('deleteTitle')
//removeSimple = document.createElement('img')
//removeSimple.classList.add('removeSimple')
//removeSimple.src = 'assets/delete_purple.png'
//removeSimple.classList.add('removeIcon')
//anchorContainer.appendChild(deleteTitle)
//deleteTitle.appendChild(removeSimple)
//deleteTitle.id = index


var deleteItem = function(btn){
    allTasks.splice(btn.id, 1)
    loadedPage()
}

var handleKeyPress = function(event){
    if(event.code === 'Enter'){
        printTask()
    }
}
var handleKeyPressTitle = function(event){
    if(event.code === 'Enter'){
        sendTitle()
    }
}


var toggle = function(id){
    allTasks[id].isPending = !allTasks[id].isPending
    loadedPage()
}

var deleteItem = function(btn){
    allTasks.splice(btn.id, 1)
    loadedPage()
}

//organiza las listas, los contadores de cada lista y los estilos de los elementos de cada lista
var arrangeList = function(pending, task){
    if(pending){
        listPending.appendChild(task)
        counterPending ++
        task.classList.replace('itemComplete', 'itemPending')
    }else{
        listComplete.appendChild(task)
        counterComplete ++
        checkSimple.src = 'assets/checkmark_circle_purple.png'
        task.classList.replace('itemPending', 'itemComplete')
    }
}

//muestra y esconde texto segun un contador
var showInstructions = function(text, counter){
    if(counter !== 0){
        text.classList.add('hide')
    }else{
        text.classList.remove('hide')
    }
}

//muestra datos en un elemento previamente definido
var showData = function(element, data){
    element.innerText = data
}