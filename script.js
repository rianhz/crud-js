var form = document.getElementById('form-input');
var selectedRow = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //validate
  var inputNama = document.getElementById('nama-input').value;
  var inputUmur = document.getElementById('umur-input').value;

  if (inputNama == '' || inputUmur == '') {
    document.querySelector('.gagal').style.display = 'block';
  } else {
    if (selectedRow == null) {
      var list = document.getElementById('list-task');
      var row = document.createElement('tr');

      row.innerHTML = `
              <td>${inputNama}</td>
              <td>${inputUmur}</td>
              <td><button class="btn btn-warning me-3 edit">Edit</button><button class="btn btn-danger delete">Delete</button></td>
      `;

      list.appendChild(row);
      selectedRow = null;
      document.querySelector('.gagal').style.display = 'none';
      clearFields();
    } else {
      selectedRow.children[0].textContent = inputNama;
      selectedRow.children[1].textContent = inputUmur;
      selectedRow = null;
    }
    clearFields();
  }
});

document.getElementById('list-task').addEventListener('click', (e) => {
  target = e.target;
  if (target.classList.contains('edit')) {
    selectedRow = target.parentElement.parentElement;
    document.getElementById('nama-input').value = selectedRow.children[0].textContent;
    document.getElementById('umur-input').value = selectedRow.children[1].textContent;
  }
});

document.getElementById('list-task').addEventListener('click', (e) => {
  target = e.target;
  if (target.classList.contains('delete')) {
    target.parentElement.parentElement.remove();
  }
});

function clearFields() {
  document.getElementById('nama-input').value = '';
  document.getElementById('umur-input').value = '';
}
