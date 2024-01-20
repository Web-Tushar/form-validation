let usename = document.querySelector(".usename")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let cfnpssword = document.querySelector(".cfnpssword")
let btn = document.querySelector(".btn")
let resultone = document.querySelector(".result_1")
let resulttwo = document.querySelector(".result_2")
let resultthree = document.querySelector(".result_3")
let resultfour = document.querySelector(".result_4")

let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


btn.addEventListener("click",function() {
     // =======usename input====
          if(usename.value == ""){
               resultone.innerHTML = "pleas input your name"
               usename.style.border = "1px dashed red"
          } else{
               resultone.innerHTML = ""
               usename.style.border = ""
          }




     // =======email input====
     if(email.value == ""){
          resulttwo.innerHTML = "pleas input your email"
          email.style.border = "1px dashed red"

     }else if(!email.value.match(emailregex)){
          resulttwo.innerHTML = "email formate thik nai"
          email.style.border = "1px dashed red"
     }
     else{
          resulttwo.innerHTML = ""
          email.style.border = ""
     }
     // =======password input====

     if(password.value == ""){
          resultthree.innerHTML = " pleas input your password"
          password.style.border = "1px dashed red"
     } else if(password.value.length > 20 || password.value.length < 12 ){
          resultthree.innerHTML = " At least 12 characters long but 14 or more is better"
          password.style.border = "1px dashed red"
     } else{
          resultthree.innerHTML = ""
     }

     
})
