// Element Slection 


let checkedLeft = 0
let checkedRight = 0

const iconDiv = document.querySelector(".icon-div")
const rightCheckBoxHolderDiv = document.querySelector(".right-container")
const leftCheckBoxHolderDiv = document.querySelector(".left-container")

const rightToLeftButton = document.querySelector("#right-to-left")
const leftToRightButton = document.querySelector("#left-to-right")
const allRightToLeftButton = document.querySelector("#all-right-to-left")
const allLeftToRightButton = document.querySelector("#all-left-to-right")


// To Add Elements in page 

const leftElements = ["JS","HTML","CSS","TS"]
const rightElements = ["Reat","Angular","Vue","Svelte"]

leftElements.forEach( content => { addElementToListHelper(content , "left") } )
rightElements.forEach( content => { addElementToListHelper(content , "right") } )


// The Functionality Starts here


iconDiv.addEventListener("click", moveElements)

function moveElements(eventObj) {

  const targetElement = eventObj.target

  if( targetElement.tagName != "BUTTON" ){ return }

  const targetElementId = targetElement.id

  eventObj.preventDefault()

  switch (targetElementId) {
    case "all-right-to-left":
      allRightToLeft()
      break
    case "right-to-left":
      rightToLeft()
      break
    case "left-to-right":
      leftToRight()
      break
    case "all-left-to-right":
      allLeftToRight()
      break
  }

  selectedMoverButtonDisabler()
  moverAllButtonDisabler()

}

function allRightToLeft() {

  checkedLeft += checkedRight
  checkedRight = 0 

  Array.from(rightCheckBoxHolderDiv.children).forEach((item) => {
    leftCheckBoxHolderDiv.appendChild(item)
  })
}

function rightToLeft() {

  checkedRight = 0 

  Array.from(rightCheckBoxHolderDiv.children).forEach((item) => {
    if (item.querySelector("INPUT").checked) {
      item.querySelector("INPUT").checked = false
      leftCheckBoxHolderDiv.appendChild(item)
    }
  })
}

function leftToRight() {

  checkedLeft= 0 

  Array.from(leftCheckBoxHolderDiv.children).forEach((item) => {
    if (item.querySelector("INPUT").checked) {
      item.querySelector("INPUT").checked = false
      rightCheckBoxHolderDiv.appendChild(item)
    }
  })
}
function allLeftToRight() {

  checkedRight += checkedLeft
  checkedLeft= 0 

  Array.from(leftCheckBoxHolderDiv.children).forEach((item) => {
    rightCheckBoxHolderDiv.appendChild(item)
  })
}

// Dis-abling and enabling buttons

const mainContainer = document.querySelector(".body-container")

mainContainer.addEventListener( "click" , checkForChangeInSelection )

function checkForChangeInSelection(eventObj){

    const targetElement = eventObj.target

    if ( targetElement.tagName == "INPUT" ){
  
      if (Array.from(targetElement.parentElement.parentElement.classList).includes("right-container") ){

        if (targetElement.checked){
          checkedRight++
        } else{ 
          checkedRight -- 
        }
        
      } else if( Array.from(targetElement.parentElement.parentElement.classList).includes("left-container")  ) {
        
          if (targetElement.checked){
            checkedLeft++
          } else{ 
            checkedLeft -- 
          }
      }

      selectedMoverButtonDisabler()

    }
}

function selectedMoverButtonDisabler(){

  rightToLeftButton.disabled =  checkedRight == 0 
  leftToRightButton.disabled = checkedLeft == 0 

}

function moverAllButtonDisabler(){

  allRightToLeftButton.disabled = rightCheckBoxHolderDiv.children.length == 0
  allLeftToRightButton.disabled = leftCheckBoxHolderDiv.children.length == 0

}


// Space for Creative Code 
// It is not asked in the project 
// But I'm trying it for practice

const addButton = document.querySelector("#add-button")

addButton.addEventListener("click" , addElementToList )

function addElementToList(){

  const inputElementForAdding =  document.querySelector("#item-adder") 

  const isAddLeft =  document.querySelector("#add-left-box").checked 

  // Do not do anything if the input is empty
  if (inputElementForAdding.value === ""){ return  }

  isAddLeft ?  addElementToListHelper( inputElementForAdding.value , "left" ) :  addElementToListHelper( inputElementForAdding.value , "right" )

  inputElementForAdding.value = ""
}

function addElementToListHelper( contentToAdd , sideToAdd ){

  if ( sideToAdd == "left" ){
    leftCheckBoxHolderDiv.append( createListElement(contentToAdd) )
  } else if (sideToAdd == "right"){
    rightCheckBoxHolderDiv.append( createListElement(contentToAdd) )
  }

}


function createListElement(contentToAdd){

  const div = document.createElement("div")
  div.classList.add("single-item")

  const input = document.createElement("input")
  input.setAttribute("type","checkbox")
  input.setAttribute("id",`${contentToAdd}`)

  const label = document.createElement("label")
  label.setAttribute("for",`${contentToAdd}`)

  label.appendChild(document.createTextNode(contentToAdd) )

  div.appendChild(input)
  div.appendChild(label)

  return div

}
