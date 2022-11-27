const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-contaner]")
const searchInput= document.querySelector("[data-search]")
let users =[]
searcgInput.addventListener("input", e => {
    const value= e.target.value.tolowerCase()
    users.forEach(user =>{
        const isVisible =
        user.name.tolowerCase().includes(value) || 
        user.email.tolowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>{
    user=data.map(user=>{
    const card = userCardTeplate.content.cloneNode(true) .children[0]
    const header = card.querySelector("[data-header]")
    const bodyy = card.querySelector("[data-body]")
    header.textContent =user.name
    bpdyy.textContent =user.email
    userCardContainer.append(card)
    return{name:user.name, email:user.email, element :card}
    })
})