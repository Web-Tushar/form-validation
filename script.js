let usename = document.querySelector(".usename")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let cfnpssword = document.querySelector(".cfnpssword")
let btn = domument.querySelector(".btn")
let result_1 = document.querySelector(".result_1")
let result_2 = document.querySelector(".result_2")
let result_3 = document.querySelector(".result_3")
let result_4 = document.querySelector(".result_4")

let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


btn.addEventListener("click",function() {
     if(email.value == ""){
          result_2.innerHTML = "pleas input your email"

     }else if(!email.value.match(emailregex)){
          result_2.innerHTML = "email formate thik nai"
     }
     else{
          result_2.innerHTML = ""
     }
})
