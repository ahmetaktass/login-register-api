// LOGİN

function login() {
  var formdata = new FormData()
  formdata.append('email', document.getElementById('email').value)
  formdata.append('password', document.getElementById('password').value)

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  }

  fetch('https://agronapi.ihfinancial.co.uk/api/auth/login', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 1) {
        alert(result.msg)
      } else {
        alert('Errors:' + result.msg)
      }
    })
    .catch((error) => console.log('error', error))
}

// SingUP
function signup() {
  var formdata = new FormData()
  formdata.append('name', document.getElementById('s_name').value)
  formdata.append('email', document.getElementById('s_email').value)
  formdata.append('password', document.getElementById('s_password').value)
  formdata.append(
    'password_confirmation',
    document.getElementById('s_password_confirmation').value,
  )

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  }

  fetch('https://agronapi.ihfinancial.co.uk/api/auth/register', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 1) {
        alert(result.msg)
      } else {
        alert('Errors:' + result.msg)
      }
    })
    .catch((error) => console.log('error', error))
}

// Custom Alert

var ALERT_TITLE = 'Oops!'
var ALERT_BUTTON_TEXT = 'Ok'

if (document.getElementById) {
  window.alert = function (txt) {
    createCustomAlert(txt)
  }
}

function createCustomAlert(txt) {
  d = document

  if (d.getElementById('modalContainer')) return

  mObj = d.getElementsByTagName('body')[0].appendChild(d.createElement('div'))
  mObj.id = 'modalContainer'
  mObj.style.height = d.documentElement.scrollHeight + 'px'

  alertObj = mObj.appendChild(d.createElement('div'))
  alertObj.id = 'alertBox'
  if (d.all && !window.opera)
    alertObj.style.top = document.documentElement.scrollTop + 'px'
  alertObj.style.left =
    (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + 'px'
  alertObj.style.visiblity = 'visible'

  h1 = alertObj.appendChild(d.createElement('h1'))
  h1.appendChild(d.createTextNode(ALERT_TITLE))

  msg = alertObj.appendChild(d.createElement('p'))
  //msg.appendChild(d.createTextNode(txt));
  msg.innerHTML = txt

  btn = alertObj.appendChild(d.createElement('a'))
  btn.id = 'closeBtn'
  btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT))
  btn.href = '#'
  btn.focus()
  btn.onclick = function () {
    removeCustomAlert()
    return false
  }

  alertObj.style.display = 'block'
}

function removeCustomAlert() {
  document
    .getElementsByTagName('body')[0]
    .removeChild(document.getElementById('modalContainer'))
}
