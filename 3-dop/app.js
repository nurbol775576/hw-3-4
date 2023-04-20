const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const result = document.getElementById("result")

searchBtn.addEventListener("click", ()=>{
    const searchInputValue = searchInput.value.trim()
    //метод .trim() стирает случайные пробелы

    if(!isNaN(searchInputValue) && searchInputValue <= 10){
        fetch(`https://jsonplaceholder.typicode.com/users/${searchInputValue}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then((data)=>{
            result.innerHTML = `
            <h2>USER:${data.id}</h2>
            <p>ID: ${data.id}</p>
            <p>NAME: ${data.name}</p>
            <p>Phone Number: ${data.phone}</p>
            <p>UserName: ${data.username}</p>
            <p>Website: ${data.website}</p>
            <p>Email: ${data.email}</p>
            `;
        })
        .catch((error)=>{
            result.innerHTML = `
            <h2>Ошибка</h2>
            <p>${error.message}</p>
            `
        })
    }else{
        result.innerHTML = `
        <h2>Ошибка Else</h2>
        <p>Напиши правильно!</p>
        `
    }


})




