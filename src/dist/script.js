"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
// Aside Navigation Section Code
let btnMenuAside = document.querySelector('.logo button'), navigation = document.querySelector('.navigation'), sectionNowPlaying = document.querySelector('.navigation menu li');
// Events Aside Web site
event_show_aside: btnMenuAside === null || btnMenuAside === void 0 ? void 0 : btnMenuAside.addEventListener('click', function () {
    navigation === null || navigation === void 0 ? void 0 : navigation.classList.toggle("navigation_active");
    // open Aside
    if (navigation.className == "navigation | d-flex flex-column justify-content-between navigation_active") {
        for (let i = 0; i < 6; i++) {
            $("menu li").eq(i).animate({
                'margin-bottom': 20,
                top: 0
            }, (i + 6) * 100);
            $(".logo button i").removeClass('fa-solid fa-align-justify').addClass('fa-solid fa-x');
        }
        // close Aside
    }
    else {
        for (let i = 0; i < 6; i++) {
            $("menu li").eq(i).animate({
                'margin-bottom': 50,
                top: 300
            }, 100);
        }
        $(".logo button i").removeClass('fa-solid fa-x').addClass('fa-solid fa-align-justify');
    }
});
eventScrollTop_whenClick_nowPlaying: sectionNowPlaying === null || sectionNowPlaying === void 0 ? void 0 : sectionNowPlaying.addEventListener('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});
// Main Section Code
(_a = document.querySelector('#search')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () {
    this.value == '' || this.value == ' '
        ? getNowPlayingListApi()
        : getSearchApi(this.value);
});
function getSearchApi(val) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
            }
        };
        let response = yield fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&include_adult=false&language=en-US&page=20`, options);
        response = yield response.json();
        // Call function display movie
        displayMovie(response.results);
    });
}
function getNowPlayingListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
            }
        };
        let response = yield fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=20', options);
        response = yield response.json();
        // Call function display movie
        displayMovie(response.results);
    });
}
getNowPlayingListApi(); // default show section
function getPopularListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
            }
        };
        let response = yield fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=20', options);
        response = yield response.json();
        // Call function display movie
        displayMovie(response.results);
    });
}
function getTopRatedListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
            }
        };
        let response = yield fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=20', options);
        response = yield response.json();
        // Call function display movie
        displayMovie(response.results);
    });
}
function getTrendingApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
            }
        };
        let response = yield fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
        response = yield response.json();
        // Call function display movie
        displayMovie(response.results);
    });
}
function getUpcomingListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZkMGE5OWRmNzcwMWI0NzY0ZDlmOWI2MDFmZjI1OCIsIm5iZiI6MTcyMTQ4Mjg3NS41ODczNDYsInN1YiI6IjY2OWE0YjkwZDNhNWRiY2Y3YzNhOTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zx1aMhMbL0st_o4wiNiZL-wruPa9OqqVtHvYudMD5s'
            }
        };
        let response = yield fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        response = yield response.json();
        // Call function display movie
        displayMovie(response.results);
    });
}
function displayMovie(arr) {
    let box = ``;
    for (let i = 0; i < arr.length; i++) {
        box += `
              <div class="item | col-12 col-lg-4">
              <div class="content | col-12 col-lg-4 position-relative">
                     <img src="${arr[i].poster_path === null ? 'IMG/download.jpeg' : `https://image.tmdb.org/t/p/w500/${arr[i].poster_path}`}" alt="${arr[i].title}">
                     <div class="layer | position-absolute">
                            <h2>${arr[i].title}</h2>
                            <p class="text-start">${arr[i].overview == "" || arr[i].overview == " " || arr[i].overview == null ? 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iusto, pariatur officia provident laboriosam architecto fugiat quod dicta suscipit! Similique.' : arr[i].overview.split(" ").slice(0, 40).join(" ")}</p>
                            <span>Release Date: ${arr[i].release_date}</span>
                            <span class="icon | d-flex align-items-center justify-content-center">${arr[i].popularity}</span>
                     </div>
              </div>
              </div>
              `;
    }
    document.querySelector('.row').innerHTML = box;
}
// Contact US Email input
function checkEmailVialed() {
    let emailVialed = /@gmail\.com/;
    let inputEmail = document.querySelector('#email'), btnInvalid = document.querySelector('form button'), spanInvalid = document.querySelector('#email + span');
    if (emailVialed.test(inputEmail.value)) {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.remove('invalid');
        spanInvalid.classList.remove('Invalid-show');
        spanInvalid.innerHTML = "";
    }
    else {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.add('invalid');
        spanInvalid.classList.add('Invalid-show');
        spanInvalid.innerHTML = "Invalid Email,try example@domain.com";
    }
}
// Contact US Phone input
function checkPhoneVialed() {
    let phoneVialed = /^01([0-2]|5)\d{1,8}$/;
    let inputPhone = document.querySelector('#phone'), btnInvalid = document.querySelector('form button'), spanInvalid = document.querySelector('#phone + span');
    if (phoneVialed.test(inputPhone.value)) {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.remove('invalid');
        spanInvalid.classList.remove('Invalid-show');
        spanInvalid.innerHTML = "";
    }
    else {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.add('invalid');
        spanInvalid.classList.add('Invalid-show');
        spanInvalid.innerHTML = "Invalid Phone Number";
    }
}
// Contact US Age input
function checkAgeVialed() {
    let ageVialed = /^[0-9][0-9]$/;
    let inputAge = document.querySelector('#age'), btnInvalid = document.querySelector('form button'), spanInvalid = document.querySelector('#age + span');
    if (ageVialed.test(inputAge.value)) {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.remove('invalid');
        spanInvalid.classList.remove('Invalid-show');
        spanInvalid.innerHTML = "";
    }
    else {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.add('invalid');
        spanInvalid.classList.add('Invalid-show');
        spanInvalid.innerHTML = "Your age must be over 16+";
    }
}
// Contact US Password input
function checkPasswordVialed() {
    let passVialed = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let inputPassword = document.querySelector('#password'), btnInvalid = document.querySelector('form button'), spanInvalid = document.querySelector('#password + span');
    if (passVialed.test(inputPassword.value)) {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.remove('invalid');
        spanInvalid.classList.remove('Invalid-show');
        spanInvalid.innerHTML = "";
    }
    else {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.add('invalid');
        spanInvalid.classList.add('Invalid-show');
        spanInvalid.innerHTML = "password must contain numbers & letters at least 8 character";
    }
}
// Contact US rePassword input
function checkRePasswordVialed() {
    let inputRePassword = document.querySelector('#rePassword'), btnInvalid = document.querySelector('form button'), spanInvalid = document.querySelector('#rePassword + span');
    let inputPassword = document.querySelector('#password');
    if (inputRePassword.value === inputPassword.value) {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.remove('invalid');
        spanInvalid.classList.remove('Invalid-show');
        spanInvalid.innerHTML = "";
    }
    else {
        btnInvalid === null || btnInvalid === void 0 ? void 0 : btnInvalid.classList.add('invalid');
        spanInvalid.classList.add('Invalid-show');
        spanInvalid.innerHTML = "Password not match";
    }
}
// Event btn top when scroll
const btnTop = document.querySelector(".btn-top");
document.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnTop.classList.add("btn-site_active");
    }
    else {
        btnTop.classList.remove("btn-site_active");
    }
});
eventScrollTop_whenClick_btnTop: btnTop === null || btnTop === void 0 ? void 0 : btnTop.addEventListener('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});
