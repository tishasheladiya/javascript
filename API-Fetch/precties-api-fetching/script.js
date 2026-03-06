// // fetch --> then --> then --> catch
// function UserData(){
//     fetch("https://jsonplaceholder.typicode.com/users/?results=10")
//     .then((rawdata) => {
//         console.log(rawdata);// rawdata
//         return rawdata.json(); // convert raw data into json formate
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.results);

//         data.results.forEach(user => {
//             RenderUi(user);
            
//         });
//     })
// }

// function RenderUi(user){
//     let div = document.querySelector(".main");

//     div.innerHTML += `
//         <div class="profile">

//             <div class="avatar">L</div>

//             <h2>Leanne Graham</h2>
//             <p class="username">@Bret</p>

//         </div>

//         <div class="info">
//             <p><b>Email:</b> Sincere@april.biz</p>
//             <p><b>Phone:</b> 1-770-736-8031 x56442</p>
//             <p><b>Website:</b> hildegard.org</p>
//         </div>

//         <div class="section">
//             <h3>Address</h3>
//             <p>Kulas Light, Apt. 556</p>
//             <p>Gwenborough</p>
//             <p>92998-3874</p>
//         </div>

//         <div class="section">
//             <h3>Company</h3>
//             <p><b>Romaguera-Crona</b></p>
//             <p>Multi-layered client-server neural-net</p>
//         </div>`
// }

// UserData();

function UserData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((rawdata) => {
        return rawdata.json();
    })
    .then((data) => {

        data.forEach(user => {
            RenderUi(user);
        });

    })
}

function RenderUi(user){
    let div = document.querySelector(".main");

    div.innerHTML += `
    <div class="card">

        <div class="profile">
            <div class="avatar">${user.name.charAt(0)}</div>
            <h2>${user.name}</h2>
            <p class="username">@${user.username}</p>
        </div>

        <div class="info">
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> ${user.website}</p>
        </div>

        <div class="section">
            <h3>Address</h3>
            <p>${user.address.street}, ${user.address.suite}</p>
            <p>${user.address.city}</p>
            <p>${user.address.zipcode}</p>
        </div>

        <div class="section">
            <h3>Company</h3>
            <p><b>${user.company.name}</b></p>
            <p>${user.company.catchPhrase}</p>
        </div>

    </div>`;
}

UserData();