let checkedLeft = 0
let checkedRight = 0

const iconDiv = document.querySelector(".icon-div")
const rightCheckBoxHolderDiv = document.querySelector(".right-container")
const leftCheckBoxHolderDiv = document.querySelector(".left-container")

const rightToLeftButton = document.querySelector("#right-to-left")
const leftToRightButton = document.querySelector("#left-to-right")
const allRightToLeftButton = document.querySelector("#all-right-to-left")
const allLeftToRightButton = document.querySelector("#all-left-to-right")

iconDiv.addEventListener("click", moveElements)

function moveElements(eventObj) {

  const targetElement = eventObj.target

  if( targetElement.tagName != "BUTTON" ){ return }

  const targetElementClassName = targetElement.id

  eventObj.preventDefault()

  switch (targetElementClassName) {
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
    item.remove()
    leftCheckBoxHolderDiv.appendChild(item)
  })
}

function rightToLeft() {

  checkedRight = 0 

  Array.from(rightCheckBoxHolderDiv.children).forEach((item) => {
    if (item.querySelector("INPUT").checked) {
      item.querySelector("INPUT").checked = false
      item.remove()
      leftCheckBoxHolderDiv.appendChild(item)
    }
  })
}

function leftToRight() {

  checkedLeft= 0 

  Array.from(leftCheckBoxHolderDiv.children).forEach((item) => {
    if (item.querySelector("INPUT").checked) {
      item.querySelector("INPUT").checked = false
      item.remove()
      rightCheckBoxHolderDiv.appendChild(item)
    }
  })
}
function allLeftToRight() {

  checkedRight += checkedLeft
  checkedLeft= 0 

  Array.from(leftCheckBoxHolderDiv.children).forEach((item) => {
    item.remove()
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
