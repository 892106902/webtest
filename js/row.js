//动态增加一个表格
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
table.border = 1;
table.bgColor = "darkslategrey";
table.borderColor = "blue";
table.align = "center";
table.width = "60%";
table.cellPadding = "10";
var caption = document.createElement("caption");
caption.appendChild(document.createTextNode("表格"));
table.appendChild(caption);

//动态添加单元格
for (i = 0; i < 10; i++) {
	table.insertRow(i);
	for (y = 0; y < 10; y++) {
		table.rows[i].insertCell(y);
		if (y == 0) {
			var cb = document.createElement("input");
			cb.type = "checkbox";
			cb.name = "cb";
			cb.checked = false;
			table.rows[i].cells[y].appendChild(cb);
		} else {
			table.rows[i].cells[y].appendChild(document.createTextNode(i.toString() + y + ""));
		}
	}
}

//添加最后一行
table.insertRow(10);
var lastcell = table.rows[10].insertCell(0);
lastcell.id = "last";
lastcell.colSpan = 10;
lastcell.align = "center";

//动态添加按钮
var add = document.createElement("input");
add.type = "button";
add.name = "add";
add.value = "添加";
add.onclick = function () {
	var len = table.rows.length;
	var newRow = table.insertRow(len - 1);
	for (x = 0; x < 10; x++) {
		newRow.insertCell(x);
		if (x == 0) {
			var cb = document.createElement("input");
			cb.type = "checkbox";
			cb.name = "cb";
			cb.checked = false;
			newRow.cells[x].appendChild(cb);
		} else {
			newRow.cells[x].appendChild(document.createTextNode(x + ""));
		}
	}
}
var del = document.createElement("input");
del.type = "button";
del.name = "delete";
del.value = "删除";
del.onclick = function () {
	var cbLists = document.getElementsByName("cb");
	//nodelist动态的
	for (i = 0; i < cbLists.length; i++) {
		var cb = cbLists[i];
		var cbchecked = cb.checked;
		if (cbchecked) {
			table.deleteRow(i);
			//i 不是动态的，所以要相应减1
			i--;
		}
	}
};
lastcell.appendChild(add);
lastcell.appendChild(del);
body.appendChild(table);