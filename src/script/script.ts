// Aside Navigation Section Code
let btnMenuAside:any = document.querySelector('.logo button'),
    navigation:any   = document.querySelector('.navigation'),
    sectionNowPlaying= document.querySelector('.navigation menu li')


// Events Aside Web site
event_show_aside: btnMenuAside?.addEventListener('click', function(){
       navigation?.classList.toggle("navigation_active")

       // open Aside
       if (navigation.className == "navigation | d-flex flex-column justify-content-between navigation_active"){
              for (let i = 0; i < 6; i++) {
                     $("menu li").eq(i).animate({
                            'margin-bottom': 20,
                            top: 0
                     }, (i + 6) * 100)

                     $(".logo button i").removeClass('fa-solid fa-align-justify').addClass('fa-solid fa-x')
              }       

       // close Aside
       }else {
              for (let i = 0; i < 6; i++) {
                     $("menu li").eq(i).animate({
                            'margin-bottom': 50,
                            top: 300
                     }, 100)
              }    

              $(".logo button i").removeClass('fa-solid fa-x').addClass('fa-solid fa-align-justify')
       }
})

eventScrollTop_whenClick_nowPlaying: sectionNowPlaying?.addEventListener('click', function(){
       $('html, body').animate({scrollTop: 0}, 1000)
})




// Main Section Code
document.querySelector('#search')?.addEventListener('input', function(){
       this.value == '' || this.value == ' '
       ? getNowPlayingListApi()
       : getSearchApi(this.value)
})


async function getSearchApi(val:any) {
       const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
              }
       };
            
       let response:any = await fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&include_adult=false&language=en-US&page=20`, options)
       response = await response.json()     
       
       // Call function display movie
       displayMovie(response.results);      
}


async function getNowPlayingListApi() {
       const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
              }
       };
            
       let response:any = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=20', options)
       response = await response.json()     
       
       // Call function display movie
       displayMovie(response.results);   

}getNowPlayingListApi() // default show section


async function getPopularListApi() {
       const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
              }
       };
            
       let response:any = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=20', options)
       response = await response.json()     
       
       // Call function display movie
       displayMovie(response.results);      
}


async function getTopRatedListApi() {
       const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
              }
       };
            
       let response:any = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=20', options)
       response = await response.json()     
       
       // Call function display movie
       displayMovie(response.results);      
}


async function getTrendingApi() {
       const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
              }
       };
            
       let response:any = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
       response = await response.json()     
       
       // Call function display movie
       displayMovie(response.results);      
}


async function getUpcomingListApi() {
       const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
              }
       };
            
       let response:any = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
       response = await response.json()     
       
       // Call function display movie
       displayMovie(response.results);      
}


function displayMovie(arr:any){
       let box = ``
       for (let i = 0; i<arr.length; i++){

              box += `
              <div class="item | col-12 col-lg-4">
              <div class="content | col-12 col-lg-4 position-relative">
                     <img src="${arr[i].poster_path === null ? 'IMG/download.jpeg' : `https://image.tmdb.org/t/p/w500/${arr[i].poster_path}`}" alt="${arr[i].title}">
                     <div class="layer | position-absolute">
                            <h2>${arr[i].title}</h2>
                            <p class="text-start">${arr[i].overview == "" || arr[i].overview == " " || arr[i].overview == null ?'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iusto, pariatur officia provident laboriosam architecto fugiat quod dicta suscipit! Similique.' : arr[i].overview.split(" ").slice(0,40).join(" ")  }</p>
                            <span>Release Date: ${arr[i].release_date}</span>
                            <span class="icon | d-flex align-items-center justify-content-center">${arr[i].popularity}</span>
                     </div>
              </div>
              </div>
              `
              
       }
       document.querySelector('.row').innerHTML = box
}


// Contact US Email input
function checkEmailVialed(){
       let emailVialed = /@gmail\.com/

       let inputEmail:any  = document.querySelector('#email'),
           btnInvalid:any  = document.querySelector('form button'),
           spanInvalid:any = document.querySelector('#email + span')

       if (emailVialed.test(inputEmail.value)){
              btnInvalid?.classList.remove('invalid')
              spanInvalid.classList.remove('Invalid-show')
              spanInvalid.innerHTML = ""
       }else {
              btnInvalid?.classList.add('invalid')
              spanInvalid.classList.add('Invalid-show')
              spanInvalid.innerHTML = "Invalid Email,try example@domain.com"
       }
}


// Contact US Phone input
function checkPhoneVialed(){
       let phoneVialed = /^01([0-2]|5)\d{1,8}$/ 

       let inputPhone:any  = document.querySelector('#phone'),
           btnInvalid:any  = document.querySelector('form button'),
           spanInvalid:any = document.querySelector('#phone + span')

       if (phoneVialed.test(inputPhone.value)){
              btnInvalid?.classList.remove('invalid')
              spanInvalid.classList.remove('Invalid-show')
              spanInvalid.innerHTML = ""
       }else {
              btnInvalid?.classList.add('invalid')
              spanInvalid.classList.add('Invalid-show')
              spanInvalid.innerHTML = "Invalid Phone Number"
       }
}


// Contact US Age input
function checkAgeVialed(){
       let ageVialed   = /^[0-9][0-9]$/ 

       let inputAge:any  = document.querySelector('#age'),
           btnInvalid:any  = document.querySelector('form button'),
           spanInvalid:any = document.querySelector('#age + span')

       if (ageVialed.test(inputAge.value)){
              btnInvalid?.classList.remove('invalid')
              spanInvalid.classList.remove('Invalid-show')
              spanInvalid.innerHTML = ""
       }else {
              btnInvalid?.classList.add('invalid')
              spanInvalid.classList.add('Invalid-show')
              spanInvalid.innerHTML = "Your age must be over 16+"
       }
}


// Contact US Password input
function checkPasswordVialed(){
       let passVialed  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

       let inputPassword:any  = document.querySelector('#password'),
           btnInvalid:any  = document.querySelector('form button'),
           spanInvalid:any = document.querySelector('#password + span')

       if (passVialed.test(inputPassword.value)){
              btnInvalid?.classList.remove('invalid')
              spanInvalid.classList.remove('Invalid-show')
              spanInvalid.innerHTML = ""
       }else {
              btnInvalid?.classList.add('invalid')
              spanInvalid.classList.add('Invalid-show')
              spanInvalid.innerHTML = "password must contain numbers & letters at least 8 character"
       }
}


// Contact US rePassword input
function checkRePasswordVialed(){
       let inputRePassword:any  = document.querySelector('#rePassword'),
           btnInvalid:any  = document.querySelector('form button'),
           spanInvalid:any = document.querySelector('#rePassword + span')
       
       let inputPassword:any  = document.querySelector('#password'),


       if (inputRePassword.value === inputPassword.value){
              btnInvalid?.classList.remove('invalid')
              spanInvalid.classList.remove('Invalid-show')
              spanInvalid.innerHTML = ""
       }else {
              btnInvalid?.classList.add('invalid')
              spanInvalid.classList.add('Invalid-show')
              spanInvalid.innerHTML = "Password not match"
       }
}


// Event btn top when scroll
const btnTop:any = document.querySelector(".btn-top")
document.addEventListener('scroll', () => {
       if(window.scrollY > 400){
              btnTop.classList.add("btn-site_active")
       }else{
              btnTop.classList.remove("btn-site_active")
       }
}) 
eventScrollTop_whenClick_btnTop: btnTop?.addEventListener('click', function(){
       $('html, body').animate({scrollTop: 0}, 1000)
})

