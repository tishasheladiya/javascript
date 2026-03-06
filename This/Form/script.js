let form = document.querySelector("form");
let username = document.querySelector("input[name='name']");
let role = document.querySelector("input[name='role']");
let bio = document.querySelector("input[name='bio']");
let img = document.querySelector("input[name='img']");

// method with this keyword
const UserManager = {
  users: [],
  // form event
  init: function () {
    form.addEventListener("submit", this.submit.bind(this));
    // console.log("this value",this);
  },

  // submit form method

  submit: function (e) {
    e.preventDefault();
    console.log("form submitted");
    console.log("submit", this);
    this.addUser();
  },

  // add user method
  addUser: function () {
    console.log("add user", this);
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      img: img.value,
    });
    console.log(this.users);

    form.reset();
    this.renderUI();
  },

  // render ui
  renderUI: function () {
    console.log(this.users);
    let div = document.querySelector(".users");
    div.innerHTML = "";

    this.users.forEach((data) => {
      div.innerHTML += ` <div class="card max-w-1/4 w-full text-center border border-blue-900 rounded-2xl p-8 my-4 mx-4 shadow-xl">
           <img src="${data.img}" alt="img" class="w-72 h-72 object-cover rounded-full border-2 border-blue-200 drop-shadow-xl mx-auto my-0">
           <h2 class="text-3xl text-slate-700 my-2 font-bold">${data.username}</h2>
           <p class="text-xl  text-red-800 font-semibold my-2">${data.role}</p>
           <p class="text-lg text-slate-950 my-2">${data.bio}</p>
           </div>`;
    });
  },
};

UserManager.init();
