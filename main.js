

// const categories = document.getElementsByClassName("category")
// for (const category of categories) {
//     category.addEventListener("click", function () {
//         const cur = document.getElementsByClassName("active");
//         if (!this.classList.contains("active")) {
//             if (cur.length > 0)
//                 cur[0].classList.remove('active')
//             this.classList.add('active');
//         }
//     })
// }

const logo = document.getElementById("logo");
const side_menu = document.getElementById("sidemenu");

logo.addEventListener("click", () => {
    side_menu.classList.toggle("collapsed");
    side_menu.classList.add("collapse-trans");
    setTimeout(() => {
        side_menu.classList.remove("collapse-trans");
    }, 300);
    collapse_side();
})

const collapse_side = () => {
    const side_menu = document.getElementById("sidemenu");

    if (side_menu.classList.contains("collapsed")) {
        document.documentElement.style.setProperty("--sidemenu-width", "6vh");
    }
    else {
        document.documentElement.style.setProperty("--sidemenu-width", "20vh");
    }

}

