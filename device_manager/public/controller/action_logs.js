const list_element = document.getElementsByTagName('tbody')[0];
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 20;
var clicked = false;
function DisplayList(items, wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);
    var tr;
	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('tr');
		tr = wrapper.insertRow(-1);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = item["device-id"];
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = item["name"];
        tabCell.classList.add("device-name")
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = item["action"];
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = item["date"];
		
		wrapper.appendChild(item_element);
	}
}


function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}


function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;
    button.classList.add('butt-num')
	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}


function LoadPage(){
    fetch('/controller/action_logs.json')
        .then(response => response.json())
        .then(function(data){
            var device_logs = data;
            DisplayList(device_logs, list_element, rows, current_page);
            SetupPagination(device_logs, pagination_element, rows);
        })
}
LoadPage()
function reloadPage(){
    fetch('/controller/action_logs.json')
        .then(response => response.json())
        .then(function(data){
            var device_logs = data;
            let search = document.getElementById("search").value;
            var filter = search.toLowerCase();
            if (filter === "") {
                rows = 20;
                current_page = 1;
                DisplayList(device_logs, list_element, rows, current_page)
                SetupPagination(device_logs , pagination_element, rows);
            } else {
                var devices = [];
                for (var i = 0; i < device_logs.length; i++) {
                    if (device_logs[i].name.toLowerCase().indexOf(filter) > -1) {
                        devices.push(device_logs[i])
                    }
                }
                rows = 10;
                current_page = 1;
                DisplayList(devices, list_element, rows, current_page)
                SetupPagination(devices, pagination_element, rows);
            }
        })
}
