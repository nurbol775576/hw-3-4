const url = "https://jsonplaceholder.typicode.com/users"

async function fetchAsyncTodos(){
    console.log('Start...');
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    const users = 6;
    let text = "";
    for(let i = 0; i < users; i++){
        
        text += `<div class="users">
        <ul>
        <li class="li"><b>${data[i].id}</b></li>
        <li><b>Name:</b>${data[i].name}</li>
        <li><b> Phone: </b>${data[i].phone}</li>
        <li><b>username: </b>${data[i].username}</b></li>
        <li><b>website: </b>${data[i].website}</b></li>
        <li><b>email: </b>${data[i].email}</b></li>
        </ul>
        </div>`
    }
document.getElementById('ulist').innerHTML  = text;

}
fetchAsyncTodos()

{/* <a>UserID ${data[i].id}<br/> ${data[i].name}<br/><b>Phone</b> ${data[i].phone} </br><a/>  */}