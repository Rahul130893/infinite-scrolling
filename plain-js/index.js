

const container = document.getElementById("container")

let limit = 25

let page=1
const list = async () => {
   const res= await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=25&_page=${page}`)
    const data = await res.json()
    ///console.log(data)
    append(data)
}
list()
let i = 1;
const append = (array) => {
  array.forEach((e) => {
    let text = document.createElement("p");

    text.innerText = e.title + " " + `${i++}`;

    let smalldiv = document.createElement("div");
    smalldiv.append(text);
    container.append(smalldiv);
  });
};
const showData = () => {
  
    setTimeout(() => {
        
      page++
        list()
       
    }, 300)
}

window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight) {
       
        showData()
    }
})

