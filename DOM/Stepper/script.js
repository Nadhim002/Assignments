let currentStep = 1

const pageMessageObject = {
  1: "Add Contact Details for further Information",
  2: "Add Shipping Address for Sucessfull Delivery",
  3: "Complete Payment to Complete Order",
  4: "Ready To Get Deliverd",
  5: "Happy Happy , Order Got Deliverd ",
}

const previousButton = document.querySelector(".previous")
const nextButton = document.querySelector(".next")

nextButton.addEventListener("click", nextEvent)

function nextEvent(eventObj) {
  if (currentStep == 4) {
    // Dis-abling averything since the whole process is over
    nextButton.disabled = true
    previousButton.disabled = true
  }

  if (currentStep == 3) {
    document.querySelector(".next").innerText = "Finish"
  }

  if (currentStep == 1) {
    previousButton.disabled = false
  }

  // Changing Message Content
  const mesgDiv = document.querySelector(".message")
  mesgDiv.innerText = pageMessageObject[currentStep + 1]

  // Chnaging Curr Step Color
  const currStepNumberDiv = document.querySelectorAll(`.stepper .step-number`)[
    currentStep - 1
  ]
  currStepNumberDiv.querySelector("div").innerText = "✔"
  currStepNumberDiv.querySelector("div").style.color= "white"
  currStepNumberDiv.classList.remove("blue-bg")
  currStepNumberDiv.classList.add("green-bg")

  if (currentStep < 4) {
    currStepNumberDiv.nextElementSibling.style.borderColor = "green"

    // Changing next step color
    const nextStepNumberDiv = document.querySelectorAll(
      `.stepper .step-number`
    )[currentStep]
    nextStepNumberDiv.classList.add("blue-bg")
  }

  currentStep++
}

previousButton.addEventListener("click", prevEvent)

function prevEvent(eventObj) {
  if (currentStep == 2) {
    previousButton.disabled = true
  }

  if (currentStep == 4) {
    document.querySelector(".next").innerText = "Next"
  }

  // Changing Message Content
  const mesgDiv = document.querySelector(".message")
  mesgDiv.innerText = pageMessageObject[currentStep - 1]

  // Changing Curr Step Color

  const prevStepDiv = document.querySelectorAll(`.stepper .step-number`)[
    currentStep - 2
  ]
  prevStepDiv.querySelector("div").innerText = `${currentStep - 1}`
  prevStepDiv.querySelector("div").style.color = "black"
  prevStepDiv.classList.add("blue-bg")
  prevStepDiv.classList.remove("green-bg")

  prevStepDiv.nextElementSibling.style.borderColor = "black"

  document
    .querySelectorAll(`.stepper .step-number`)
    [currentStep - 1].classList.remove("blue-bg")

  currentStep--
}
