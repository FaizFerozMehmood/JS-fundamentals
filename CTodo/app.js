const input = document.getElementById("input");
const add = document.getElementById("add");
const content = document.getElementById("content");
const deleteAll = document.getElementById('deleteAll')

const displayItem = () => {
  let savedValue = JSON.parse(localStorage.getItem("inputvalue")) || [];
  content.innerHTML = "";

  savedValue.forEach((item, index) => {
    let listitem = document.createElement("li");
    listitem.textContent = item;
    listitem.addEventListener("click", () => {
      listitem.remove();
      savedValue.splice(index, 1);
      localStorage.setItem("inputvalue", JSON.stringify(savedValue));
    });
    content.appendChild(listitem);
  });
};

add.addEventListener("click", () => {
  let inputvalue = input.value.trim();
  if (!inputvalue) {
    return Swal.fire({
      title: 'Enter something!',
      text: 'Please enter an item before adding to the list.',
      icon: 'warning',
    });
  }

  Swal.fire({
    title: 'Add a New Item',
    text: 'Are you sure you want to add this item to your to-do list?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, add it!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      let storeditems = JSON.parse(localStorage.getItem("inputvalue")) || [];
      storeditems.push(inputvalue);
      localStorage.setItem("inputvalue", JSON.stringify(storeditems));
      displayItem();
      input.value = "";
      Swal.fire('Success!', 'Item successfully added!', 'success');
    } else {
      Swal.fire('Cancelled', 'No item was added.', 'info');
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  displayItem();
});

deleteAll.addEventListener('click', () => {
  if (content.innerText === "") {
    return Swal.fire({
      title: 'No items to delete',
      text: "There are no items in the list to delete!",
      icon: 'info',
    });
  }

  Swal.fire({
    title: 'Delete All Items?',
    text: 'Are you sure you want to delete all items from the list?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete all!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      content.innerText = "";
      Swal.fire('Deleted!', 'All items have been deleted.', 'success');
    } else {
      Swal.fire('Cancelled', 'Your items are safe.', 'info');
    }
  });
});
