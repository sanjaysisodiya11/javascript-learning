const insertTarget  = document.querySelector("#insert")

window.addEventListener('keydown', function(e){
    console.log(e);
    insertTarget.innerHTML = `<table>
    <tr>
        <th>Key</th>
        <th>Code</th>
        <th>KeyCode</th>
    </tr>
    <tr>
        <td>${ e.key }</td>
        <td>${e.code}</td>
        <td>${e.keyCode}</td>
    </tr>
</table>`;
});