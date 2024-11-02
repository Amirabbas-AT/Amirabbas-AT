fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    const tableBody = document.getElementById('table-body')
    data.map(item =>{
        const tr = document.createElement('tr');
       tr.innerHTML=`
                  <th scope='row'>${item.id}</th>
                  <td>${item.name}</th>
                  <td>${item.username}</td>
                  <td>${item.email}</td>
                  <td>${item.phone}</td>
       `
       tableBody.appendChild(tr);
    })
})