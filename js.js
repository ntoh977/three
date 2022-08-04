function hasClass(element, className) {
  return element.classList.contains(className)
}

function treeView(element) {
  element.addEventListener('click', e => {
    let target = e.target
    if (hasClass(target, 'branch-node')) target.classList.toggle('open')
    else if (hasClass(target, 'branch-title')) { target.parentNode.classList.toggle('open') }
  })
}

var myTreeView = document.getElementById('my-tree-view')

treeView(myTreeView)
/* modal */
// Get the modal
var modal = document.getElementById('myModal')

// Get the button that opens the modal
var btn = document.getElementById('minus')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]
var close = document.getElementsByClassName('close')[1]

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
  timer()
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

close.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

function timer() {
  /* timer */
  var IdealTimeOut = 10 // 10 seconds
  var idleSecondsTimer = null
  var idleSecondsCounter = 0
  // document.onclick = function () { idleSecondsCounter = 0; };
  // document.onmousemove = function () { idleSecondsCounter = 0; };
  // document.onkeypress = function () { idleSecondsCounter = 0; };
  idleSecondsTimer = window.setInterval(CheckIdleTime, 1000)

  function CheckIdleTime() {
    idleSecondsCounter++
    let oPanel = document.getElementById('timeOut')
    if (oPanel) {
      oPanel.innerHTML = IdealTimeOut - idleSecondsCounter
    }
    if (idleSecondsCounter >= IdealTimeOut) {
      window.clearInterval(idleSecondsTimer)
      document.getElementById('timeOut').style.opacity = '0'
      document.getElementById('btn_yes').style.pointerEvents = 'auto'
      document.getElementById('btn_yes').style.opacity = '1'
      document.getElementById('btn_yes').style.transition = 'all .3s'
    }
  }
}
  /* timer */
  /* click fynction */
document.getElementById('btn_yes').addEventListener('click', e => {
  document.getElementById('myModal').style.display = 'none'
  document.getElementById('my-tree-view').style.display = 'none'
})

document.getElementById('create_root').addEventListener('click', e => {
  document.getElementById('my-tree-view').style.display = 'flex'
})
  /* click fynction */
let classname = document.getElementsByClassName('three_list')

let myFunction = function (e) {
  document.getElementById('new_name_letter').value = ''
  document.getElementById('myModalupadte').style.display = 'block'
  document.getElementById('text_modal_update').textContent = e.target.textContent;
  document.getElementById('new_name_letter').addEventListener('change', () => {
    this.innerHTML = document.getElementById('new_name_letter').value
  })
}

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', myFunction, false)
}

document.getElementById('close_update').addEventListener('click', () => {
  document.getElementById('myModalupadte').style.display = 'none'
})

document.getElementById('btn_new_name_letter').addEventListener('click', () => {
  document.getElementById('myModalupadte').style.display = 'none'
})

document.getElementById('close_myModalupadte').addEventListener('click', () => {
  document.getElementById('myModalupadte').style.display = 'none'
})

document.getElementById('create_root').addEventListener('click', e => {
  document.getElementById('my-tree-view').style.display = 'flex'
  let request = $.ajax({
    type: 'POST',
    url: 'post_in_base.php',
    data: { branch: document.getElementById('branch_title').innerText },
    success: function (responseText) {
      console.log('success to reach backend')
    }
  })
})

document.getElementById('branch_title').addEventListener('click', e => {
  let request = $.ajax({
    type: 'POST',
    url: 'post_in_base.php',
    data: {
      header: document.getElementById('header').innerText,
      wrapper: document.getElementById('wrapper').innerText,
      footer: document.getElementById('footer').innerText,
    },
    success: function (responseText) {
      console.log('success to reach header')
    }
  })
})

document.getElementById('btn_yes').addEventListener('click', e => {
  let request = $.ajax({
    type: 'POST',
    url: 'post_in_base.php',
    data: {
      dell: "dell",
    },
    success: function (responseText) {
      console.log('success to dell')
    }
  })
})