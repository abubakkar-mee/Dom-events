const button = document.getElementById("btn")
const file = document.getElementById("file")
const click = document.getElementById("click")

button.addEventListener("click", ()=>{
    file.click()
})


click.addEventListener("click", (e)=>{
    const value =  prompt("Submit your name")
    const el = document.createElement("h1");
    el.innerHTML = value;
    document.body.append(el)

})