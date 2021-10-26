var lofi_cont_grid = document.getElementsByClassName("lofi_cont_grid")
var signIn = document.getElementById("signIn")


for (var i = 0; i <= lofi_cont_grid.length; i++) {
    var lofi_title = lofi_cont_grid[i]

    lofi_title.addEventListener("click", (e) => {
        let lofi_title_clicked = e.target
        let searchText = lofi_title_clicked.parentNode.parentNode.children[1].children[0].innerText

        lofi_fetch(searchText)
    })
}

async function lofi_fetch(searchText) {
    console.log(searchText)
    const result = await fetch(`../Json/${searchText}.json`)
    const datas = await result.json()

    if (datas) {
        update_data(datas)
    } else {
        alert(`${searchtext} is not Available`)
    }
}

function update_data(datas) {
    let lofi_cont = datas
    localStorage.setItem("Lofi", JSON.stringify(lofi_cont))
}