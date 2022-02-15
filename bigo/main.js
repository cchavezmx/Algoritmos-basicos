console.log("Holaaaaaaaaaaaaaaaaaaaaaaa")

let linkList = document.querySelectorAll(".link")

// array de nodos
console.log(linkList)
linkList.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault()

    linkList.forEach(itemLoop => {
      console.log(itemLoop)
      itemLoop.classList.remove("active")
    })

    item.classList.add("active")    
  })
})


// diferencia entre forEach y map
// 
// linkList.forEach(link => {
//   console.log(link)
//   link.addEventListener("click", (e) => {
//     console.log(e, 'nodo')
//       e.preventDefault()
//       link.classList.add("active")
//   })
// })

// para obtener el valor del input
// let inputSearch = document.getElementById("search")
// inputSearch.addEventListener("change", (e) => {
//   console.log(e.target.value)
// })

