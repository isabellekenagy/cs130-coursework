const defaultTheme = () => {
   document.querySelector(".container").className = "container default";;
};

const oceanTheme = () => {
   document.querySelector(".container").className = "container ocean";
};

const desertTheme = () => {
   document.querySelector(".container").className = "container desert";
};


document.querySelector("#default").onclick = defaultTheme;
document.querySelector("#ocean").onclick = oceanTheme;
document.querySelector("#desert").onclick = desertTheme;

