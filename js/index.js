function addlist(str){
        var list = document.createElement("li");//list
        list.setAttribute("onclick","this.style.textDecoration='line-through'");
        var date =new Date();
        var node = document.createTextNode(str + "  -   " +(date.getMonth()+1) +"/" + date.getDate()+"/" + date.getFullYear());
        list.appendChild(node);
        var element = document.getElementById("show-list");
        element.appendChild(list);
    }