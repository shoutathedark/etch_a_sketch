const body = document.querySelector("body");

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

for(let i = 0; i<16; i++){
    const flexcontainer = document.createElement("div");
    flexcontainer.classList.add("flexcontainer")

    for (let j = 0; j<16; j++){
        const flexitem = document.createElement("div");
        flexitem.classList.add("flexitem");
        flexcontainer.appendChild(flexitem);
        flexitem.addEventListener("mouseenter", (event)=>{
            event.target.style.backgroundColor = random_rgba();
        });
    }

    body.appendChild(flexcontainer);
};

document.querySelector(".changebutton").addEventListener("click", ()=>{
    
})