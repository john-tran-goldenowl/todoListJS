var addBtn = document.querySelector('#addtolist')
addBtn.addEventListener('click', function() {


    var title = document.querySelector("#title").value;
    var content = document.querySelector("#content").value;
    var items = document.querySelector(".items");
    var item = document.createElement("div");
    item.setAttribute("class", "item");


    var addTitleEl = document.createElement("h3");
    var addContentEl = document.createElement("p");

    items.appendChild(item);

    addTitleEl.innerText = title;
    addContentEl.innerText = content;

    item.appendChild(addTitleEl);
    item.appendChild(addContentEl);

    document.querySelector("#title").value = ""
    document.querySelector("#content").value = "";

    item.addEventListener("click", function(e) {
        var allDivs = document.getElementsByClassName('item');
        for (i = 0; i < allDivs.length; i++) {
            if (e.target == allDivs[i]) {
                allDivs[i].style.backgroundColor = "#4BB543";
                allDivs[i].style.color = "white";
                break;
            }
        }
    })
    item.addEventListener("dblclick", function(e) {
        var allDivs = document.getElementsByClassName('item');
        for (i = 0; i < allDivs.length; i++) {
            if (e.target == allDivs[i]) {
                allDivs[i].remove();
                break;
            }
        }
    })


})