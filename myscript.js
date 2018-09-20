function createDivs(gridSize){
    var e = document.querySelector("#container")
    for(var i = 0; i < gridSize; i++){
        var row = document.createElement('div');
        for(var j = 0; j < gridSize; j++){
            var cell = document.createElement('div');
            cell.style.backgroundColor = "lightgray";
            cell.style.border = "1px solid gray";
            cell.style.padding = "10px";
            row.appendChild(cell);
        }
        row.style.float = 'left';
        e.appendChild(row);
    }
}

createDivs(16);