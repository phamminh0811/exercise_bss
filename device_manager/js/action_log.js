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

var device_logs = [
    {
        "device-id": 101,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 102,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 103,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 104,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 105,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 106,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 107,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 108,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 109,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 110,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 111,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 112,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 113,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 114,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 115,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 116,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 117,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 118,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 119,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 120,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 121,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 122,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 123,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 124,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 125,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 126,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 127,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 128,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 129,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 130,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 131,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 132,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 133,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 134,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 135,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 136,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 137,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 138,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 139,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 140,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 141,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 142,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 143,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 144,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 145,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 146,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 147,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
    {
        "device-id": 148,
        "name": "Selling Fan",
        "action": "Turn Off",
        "date": "124518"
    },
    {
        "device-id": 149,
        "name": "TV",
        "action": "Turn On",
        "date": "124689"
    },
    {
        "device-id": 150,
        "name": "Washer",
        "action": "Sleep",
        "date": "124533"
    },
]

DisplayList(device_logs, list_element, rows, current_page);
SetupPagination(device_logs, pagination_element, rows);
function reloadPage(){
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
}
