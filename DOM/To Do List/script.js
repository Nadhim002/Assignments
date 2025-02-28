const input = document.querySelector("input")
const unorderedList = document.querySelector("ul")

const toDoListStorage = []

input.addEventListener("keyup", checkInputAndProceed)

function checkInputAndProceed(eventObj) {
  const inputElement = eventObj.target
  const inputElementValue = inputElement.value

  if (eventObj.key == "Enter" && inputElementValue !== "") {
    addDataInStorage(inputElementValue)

    renderUI()

    inputElement.value = ""
  }
}

function addDataInStorage(content, isTicked = false) {
  const toDoLi = { title: content, isTicked: isTicked }

  toDoListStorage.push(toDoLi)
}

unorderedList.addEventListener("click", changeStatusOfList)

function changeStatusOfList(eventObj) {
  const clickedElement = eventObj.target

  if (clickedElement.tagName == "INPUT") {
    progressOfListUpDate(clickedElement)
  } else if (clickedElement.innerText == "X") {
    deleteLi(clickedElement)
  }

  renderUI()
}

function progressOfListUpDate(checkBoxElement) {
  const indexOfLi = Array.from(
    checkBoxElement.parentElement.parentElement.children
  ).indexOf(checkBoxElement.parentElement)

  updateCheckedData(indexOfLi, checkBoxElement.checked)
}

function updateCheckedData(indexOf, isTicked) {
  toDoListStorage[indexOf].isTicked = isTicked
}

//

function deleteLi(deleteIcon) {
  const indexOfLi = Array.from(
    deleteIcon.parentElement.parentElement.children
  ).indexOf(deleteIcon.parentElement)

  deleteLiInStorage(indexOfLi)
}

function deleteLiInStorage(indexOfLi) {
  toDoListStorage.splice(indexOfLi, 1)
}

//

function createLi(content, isTicked) {
  const li = document.createElement("li")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = isTicked
  
  const label = document.createElement("label")
  label.innerText = `${content}`
  if (isTicked) {
    label.classList.add("strike-text")
  }

  const span = document.createElement("span")
  span.innerText = "X"
  span.classList.add("red-text")

  li.append(checkbox, label, span)

  return li
}

function renderUI() {
  unorderedList.innerHTML = ""

  toDoListStorage.forEach((list) =>
    unorderedList.appendChild(createLi(list.title, list.isTicked))
  )
}
