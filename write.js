
const managerWrite = (answers) => {
    fs.appendFile('./web/empty.html',`<div class="card bg-danger" style="width: 18rem; margin-top: 2em;">
    <div class="card-header text-white">
        ${name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${position} <i class="fas fa-graduation-cap"></i></li>
        <li class="list-group-item">id: ${id}</li>
        <li class="list-group-item">${school}</a></li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
    </ul>
</div>`,(err) => err ? console.error(err) : console.log('Success!'))
}

managerWrite();

