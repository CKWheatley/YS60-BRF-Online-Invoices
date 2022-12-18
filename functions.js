// JavaScript Document
// didnt use jquery for all y solutions here
const main = document.querySelector('main')

function new_row(inv,date,cost,svc_type,svc_details,svc_anchor){
    main.insertAdjacentHTML('beforeend',
    `<div>
    	<h3>${inv}</h3>
		<h3>${date}</h3>
		<h3>${cost}</h3>
		<details>
	    	<summary>${svc_type}</summary>
			${svc_details}
            <br>
			${svc_anchor}
		</details>
	</div>`
    )
}

new_row(
    1033096,
    '13/12/2022',
    '£100.39',
    'Maintenance',
    `Oil Filter & 5w/30 engine oil`,
    `<a href="/invoices/13-12-22_Maintenance_YS60BRF.pdf" download="13-12-22_Maintenance_YS60BRF">View Invoice</a>`
    )