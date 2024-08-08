//day night variables :
const nightMode = document.querySelector('.icon')

const moonIcon = document.querySelector('#moon')

//day night part :
nightMode.addEventListener('click',()=>{

 if(moonIcon.classList == 'fa-solid fa-moon'){
  
  moonIcon.classList = "fa-regular fa-sun"
  moonIcon.style.color = 'orange'
  document.body.style.background = `url('./images/earthy\ image\ night\ 1.png')`
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundRepeat = 'no-repeat'
  nightMode.style.backgroundColor = 'white'
  saveBG()
 }else{

  moonIcon.classList = 'fa-solid fa-moon'
  moonIcon.style.color = 'white'
  document.body.style.background = `url('./images/earthy\ image\ 3.png')`
  nightMode.style.backgroundColor = 'black'
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundRepeat = 'no-repeat'
  saveBG()
 }
})

//date time variables :

const day = document.querySelector('.day')

const date = new Date()

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec']

day.innerHTML = `${days[date.getDay()]}<br>${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`

//time function :
function startTime() {

 const date1 = new Date();

 document.querySelector('.time').innerHTML = date1.toLocaleTimeString();

 setTimeout(function () {startTime()}, 1000)
}

startTime()

const mainTaskContainer = document.querySelector('.tasks')

const addBtn = document.querySelector('.addTask')

const mainContainer = document.querySelector('.mainContainer')

const addTaskContainer = document.querySelector('.addTaskContainer')

const addTaskBtn = document.querySelector('.addTaskBtn')

// showing add-task page and removing main-container :

const addTask = document.querySelector('.addTask')

const cancel = document.querySelector('#X')

addTask.addEventListener('click',()=>{

 addTaskContainer.style.display = 'flex'
 mainContainer.style.display = 'none'

})

cancel.addEventListener('click',()=>{
 addTaskContainer.style.display = 'none'
 mainContainer.style.display = 'flex'

})

//adding task to the main Container :

addTaskBtn.addEventListener('click',()=>{

 //main Container :
 const taskContainer = document.createElement('div')

 taskContainer.className = 'task'

 // first child Container :
 const span = document.createElement('span')

 //span's child :

 const iThumb = document.createElement('i')
 
 iThumb.classList = "fa-regular fa-thumbs-up"

 iThumb.setAttribute("onclick","if(this.classList == 'fa-regular fa-thumbs-up'){this.classList = 'fa-solid fa-thumbs-up';this.parentElement.parentElement.childNodes[1].style.textDecoration = 'line-through';this.parentElement.parentElement.childNodes[2].style.textDecoration = 'line-through';saveData()}else{this.classList = 'fa-regular fa-thumbs-up';this.parentElement.parentElement.childNodes[1].style.textDecoration = 'none';this.parentElement.parentElement.childNodes[2].style.textDecoration = 'none';saveData()}")  
 //adding iThumb in span tag :

 span.appendChild(iThumb)

 //creating time tag :

 const timeTag = document.createElement('div')

 timeTag.className = "timeTag"

 timeTag.innerHTML = timeInput.value

 //creating taskname Container :

 const taskNameContainer = document.createElement('div')

 taskNameContainer.className = "taskName"

 taskNameContainer.innerHTML = textInput.value

 //creating icons tag :

 const iconsTag = document.createElement('div')

 iconsTag.className = "icons"

 //creating x icon :

 const xIcon = document.createElement('i')

 xIcon.classList = "fa-solid fa-x"

 xIcon.setAttribute('onclick',"this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);saveData()")
 //appending xIcon in iconsTag :

 iconsTag.appendChild(xIcon)

 //adding all child tags into taskContainer :

 taskContainer.appendChild(span)
 taskContainer.appendChild(timeTag)
 taskContainer.appendChild(taskNameContainer)
 taskContainer.appendChild(iconsTag)

 //appending task in mainContainer :

 mainTaskContainer.append(taskContainer)

 //changing pages :
 addTaskContainer.style.display = 'none'
 mainContainer.style.display = 'flex'

 //saving into localstorage :

 saveData()
})

// localStorage.clear()
function saveData(){
 localStorage.setItem('data1',mainTaskContainer.innerHTML)
}

function saveBG(){
 localStorage.setItem('bg1',document.body.style.backgroundImage)
}

function showBG(){
 document.body.style.backgroundImage = localStorage.getItem('bg1')
}

function showData(){
 mainTaskContainer.innerHTML = localStorage.getItem('data1')
}

if(localStorage.getItem('data1')){
 showData()
 showBG()
}