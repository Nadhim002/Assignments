// User Details Storage

const userPlanDeatils = {
  billing: "monthly",
  planSelected: "arcade",
  addOnsSelected: new Set(),
  totalAmountToPay: 0,
}

const userDetails = { name: null, email: null, "phone-number": null }

const planDetails = {
  monthly: { arcade: 9, advanced: 12, pro: 15 },
  yearly: { arcade: 90, advanced: 120, pro: 150 },
}

const addOnDetails = {
  monthly: {
    "online-service": 1,
    "large-storage": 1,
    "customizable-profile": 2,
  },
  yearly: {
    "online-service": 10,
    "large-storage": 10,
    "customizable-profile": 20,
  },
}

const stringStorage = {
  perString: { monthly: "/mo", yearly: "/yr" },
  summaryPrice: { monthly: "Monthly", yearly: "Yearly" },
  totalPrice: { monthly: "month", yearly: "year" },
}

let currPage = 1

// Next and Previous Button Funtionality

const goBackButton = document.querySelector("#go-back-button")
const nextStepButton = document.querySelector("#next-step-button")

const yourInfoInputsDiv = document.querySelector(
  ".form-content .your-info .input-container"
)

nextStepButton.addEventListener("click", nextButtonEventHandler)

function nextButtonEventHandler() {
  if (currPage == 1) {
    const isInfoPageInputValid = validateYourInfo()

    if (!isInfoPageInputValid) {
      yourInfoInputsDiv.addEventListener("keyup", isTargetInput)
      return
    } else {
      goBackButton.classList.remove("invisible")

      updateUserDetails()
      updatePlanPriceUI()

      yourInfoInputsDiv.removeEventListener("keyup", isTargetInput)
    }
  }

  if (currPage == 2) {
    updateAddOnsPrice()
  }

  //  <button id="next-step-button" class="bg-blue-900 hover:bg-blue-800 text-white font-bold pt-3 pb-3 px-4 rounded-lg">Next Step</button>

  if (currPage == 3) {
    nextStepButton.innerText = "Confirm"
    nextStepButton.classList.replace("bg-blue-900", "bg-indigo-500")
    nextStepButton.classList.replace("hover:bg-blue-800", "hover:bg-purple-600")

    renderUiForSummaryPage()
  }

  if (currPage >= 4) {
    renderUiForThankYouPage()
    return
  }

  const formList = document.querySelector(".form-content").children

  const currentForm = formList[currPage - 1]
  const nextForm = formList[currPage]

  currentForm.classList.add("hidden")
  nextForm.classList.remove("hidden")

  const stepNumberDivs = document.querySelectorAll(".steps .step .step-number")

  const currentStepNumberDiv = stepNumberDivs[currPage - 1]
  const nextStepNumberDiv = stepNumberDivs[currPage]

  currentStepNumberDiv.classList.remove("bg-blue-200")
  currentStepNumberDiv.classList.remove("text-blue-1000")
  currentStepNumberDiv.classList.add("text-blue-200")

  nextStepNumberDiv.classList.add("bg-blue-200")
  nextStepNumberDiv.classList.add("text-blue-1000")
  nextStepNumberDiv.classList.remove("text-blue-200")

  currPage++
}

goBackButton.addEventListener("click", goBackButtonEventHandler)

function goBackButtonEventHandler() {
  const formList = document.querySelector(".form-content").children

  const currentForm = formList[currPage - 1]
  const previousForm = formList[currPage - 2]

  currentForm.classList.add("hidden")
  previousForm.classList.remove("hidden")

  const stepNumberDivs = document.querySelectorAll(".steps .step .step-number")

  const currentStepNumberDiv = stepNumberDivs[currPage - 1]
  const previousStepNumberDiv = stepNumberDivs[currPage - 2]

  currentStepNumberDiv.classList.remove("bg-blue-200")
  currentStepNumberDiv.classList.remove("text-blue-1000")
  currentStepNumberDiv.classList.add("text-blue-200")

  previousStepNumberDiv.classList.add("bg-blue-200")
  previousStepNumberDiv.classList.add("text-blue-1000")
  previousStepNumberDiv.classList.remove("text-blue-200")

  if (currPage == 2) {
    goBackButton.classList.add("invisible")
  }

  if (currPage == 4) {
    nextStepButton.innerText = "Next Step"
    nextStepButton.classList.replace("bg-indigo-500", "bg-blue-900")
    nextStepButton.classList.replace(
      "hover:bg-purple-600 ",
      "hover:bg-blue-800"
    )
  }

  currPage--
}

// I st Page Validation

const validateFunctionsObject = {
  name: validateName,
  email: validateEmail,
  "phone-number": validatePhoneNumber,
}

function validateName(value) {
  if (value == "") {
    return "Name is required"
  } else if (value.length < 3) {
    return "Enter a minimum of 3 characters"
  }

  return ""
}

function validateEmail(value) {
  if (value == "") {
    return "Email is required"
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailPattern.test(value)) {
    return "Enter proper email id"
  }

  return ""
}

function validatePhoneNumber(value) {
  const phonePattern = /^\+?[1-9]\d{1,10}$/

  if (value == "") {
    return "Phone Number is required"
  }

  if (!phonePattern.test(value)) {
    return "Enter proper Phone Number"
  } else if (value.length < 3) {
    return "Enter a minimum of 3 characters"
  }

  return ""
}

function isTargetInput(eventObj) {
  if (eventObj.target.tagName == "INPUT") {
    validateYourInfo()
  }
}

function validateYourInfo() {
  const isAllValid = [true]
  const inputList = yourInfoInputsDiv.querySelectorAll("input")
  inputList.forEach((inputElement) =>
    addAndRemoveErrorYourInfo(inputElement, isAllValid)
  )

  return isAllValid[0]
}

function addAndRemoveErrorYourInfo(inputElement, isAllValid) {
  const errMessage = validateFunctionsObject[inputElement.id](
    inputElement.value
  )
  const errSpan = inputElement.previousElementSibling.querySelector(".error")

  if (errMessage != "") {
    errSpan.innerText = errMessage
    errSpan.classList.remove("invisible")
    inputElement.classList.add("border-red-500")
    isAllValid[0] = false
  } else {
    errSpan.classList.add("invisible")
    inputElement.classList.remove("border-red-500")
  }
}

function updateUserDetails() {
  const yourInfoInputs = yourInfoInputsDiv.querySelectorAll(".input-div input")
  yourInfoInputs.forEach((inputElement) => {
    userDetails[inputElement.id] = inputElement.value
  })
}

// Page 02

const billingToggle = document.querySelector("#billing-toogle")

billingToggle.addEventListener("change", billingTypeChange)

function billingTypeChange(eventObj) {
  const toggleElement = eventObj.target
  userPlanDeatils["billing"] = toggleElement.checked ? "yearly" : "monthly"

  toggleBillingTextColors(toggleElement)
  updatePlanPriceUI()
}

function toggleBillingTextColors(toggleElement) {
  const greyTextColour = "text-gray-500"
  const blueTextColour = "text-blue-900"

  const container = toggleElement.closest(".toggle-conatiner")

  if (userPlanDeatils["billing"] == "yearly") {
    container
      .querySelector(".monthly-text")
      .classList.replace(blueTextColour, greyTextColour)
    container
      .querySelector(".yearly-text")
      .classList.replace(greyTextColour, blueTextColour)
  } else {
    container
      .querySelector(".monthly-text")
      .classList.replace(greyTextColour, blueTextColour)
    container
      .querySelector(".yearly-text")
      .classList.replace(blueTextColour, greyTextColour)
  }
}

function updatePlanPriceUI() {
  const planLabels = document.querySelectorAll(
    ".select-plan .plans .plan label"
  )

  const billingType = userPlanDeatils["billing"]

  const perString = stringStorage["perString"][billingType]

  planLabels.forEach((label) => {
    const plan = label.getAttribute("for")

    const planPriceElement = label.querySelector(".plan-details .plan-price")

    planPriceElement.innerText = `$${planDetails[billingType][plan]}${perString}`

    const freeMonthsElement = label.querySelector(
      ".plan-details .free-duration"
    )

    if (userPlanDeatils["billing"] == "yearly") {
      freeMonthsElement.classList.remove("hidden")
    } else {
      freeMonthsElement.classList.add("hidden")
    }
  })
}

function updateAddOnsPrice() {
  const addOnlabels = document.querySelectorAll(
    ".add-ons .add-ons-selector label "
  )

  const billingType = userPlanDeatils["billing"]
  const perString = stringStorage["perString"][billingType]

  addOnlabels.forEach((label) => {
    const addOn = label.getAttribute("for")
    label.querySelector(
      ".add-on-price"
    ).innerText = `+${addOnDetails[billingType][addOn]}${perString}`
  })
}

const planSelectorDiv = document.querySelector(".select-plan .plans")

planSelectorDiv.addEventListener("change", updatePlanOfUser)

function updatePlanOfUser(eventObj) {
  const inputElement = eventObj.target
  userPlanDeatils["planSelected"] = inputElement.id
}

const addOnsSelectorDiv = document.querySelector(".add-ons-selector")

addOnsSelectorDiv.addEventListener("change", updateAddOnsOfUser)

function updateAddOnsOfUser(eventObj) {
  const inputElement = eventObj.target

  const labelElement = inputElement.closest("label")

  if (inputElement.checked) {
    userPlanDeatils.addOnsSelected.add(inputElement.id)

    labelElement.classList.replace("border-gray-300", "border-blue-500")
  } else {
    userPlanDeatils.addOnsSelected.delete(inputElement.id)
    labelElement.classList.replace("border-blue-500", "border-gray-300")
  }
}

// Summary Page

const planChnageButton = document.querySelector("#plan-change")

planChnageButton.addEventListener("click", moveToPlanPage)

function moveToPlanPage(eventObj) {
  eventObj.preventDefault()

  goBackButtonEventHandler()
  goBackButtonEventHandler()
}

function captiliseFirstLetter(string, delimeter = " ") {
  const arrayOfWords = string.split(delimeter)

  if (arrayOfWords.length > 0) {
    arrayOfWords[0] =
      arrayOfWords[0].charAt(0).toUpperCase() + arrayOfWords[0].slice(1)
  }

  return arrayOfWords.join(" ")
}

//

function renderUiForSummaryPage() {
  // Reset this amount every time
  userPlanDeatils["totalAmountToPay"] = 0

  const summaryForm = document.querySelector(".summary")
  const priceSummaryDiv = summaryForm.querySelector(".price-summary")

  const planSummaryDiv = priceSummaryDiv.querySelector(".plan-summary")

  const billingType = userPlanDeatils["billing"]
  const planSelected = userPlanDeatils["planSelected"]
  const perString = stringStorage["summaryPrice"][billingType]
  const planPrice = planDetails[billingType][planSelected]

  planSummaryDiv.querySelector(".plan-summary-info .plan-name").innerText =
    `${captiliseFirstLetter(planSelected)} ` + `(${perString})`
  planSummaryDiv.querySelector(
    ".plan-price"
  ).innerText = `$${planPrice}${stringStorage["perString"][billingType]}`

  userPlanDeatils["totalAmountToPay"] += planPrice

  const addOnsSummaryDiv = summaryForm.querySelector(".add-ons-summary")

  const addOnsSummaryReplacerDiv = document.createElement("div")
  addOnsSummaryReplacerDiv.classList.add("add-ons-summary", "flex", "flex-col")
  userPlanDeatils["addOnsSelected"].forEach((addOnName) => {
    addOnsSummaryReplacerDiv.appendChild(createAddOnSummaryDiv(addOnName))
  })
  addOnsSummaryReplacerDiv.className = addOnsSummaryDiv.className
  addOnsSummaryDiv.replaceWith(addOnsSummaryReplacerDiv)

  const totalDiv = summaryForm.querySelector(".total")
  totalDiv.querySelector(
    ".total-info"
  ).innerText = `Total ( per ${stringStorage["totalPrice"][billingType]} )`
  totalDiv.querySelector(
    ".total-amount"
  ).innerText = `$${userPlanDeatils["totalAmountToPay"]}${stringStorage["perString"][billingType]}`

  // If any add is selected add new hr betwen plan and add-on

  if (userPlanDeatils["addOnsSelected"].size > 0) {
    const hrElement = document.createElement("hr")
    hrElement.classList.add("border-gray-300")
    priceSummaryDiv.insertBefore(hrElement, addOnsSummaryReplacerDiv)
  } else {
    const hrElement = priceSummaryDiv.querySelector("hr")
    if (hrElement) {
      hrElement.remove()
    }

    priceSummaryDiv.classList.replace("pb-4", "pb-2")
  }
}

function createAddOnSummaryDiv(addOnName) {
  const addOnDiv = document.createElement("div")
  addOnDiv.classList.add("flex")
  addOnDiv.classList.add("justify-between")

  const addOnNameSpan = document.createElement("span")
  addOnNameSpan.innerText = captiliseFirstLetter(addOnName, "-")

  const addOnPriceSpan = document.createElement("span")
  const billingType = userPlanDeatils["billing"]
  const addOnPrice = addOnDetails[billingType][addOnName]
  addOnPriceSpan.innerText = `+$${addOnPrice}${stringStorage.perString[billingType]}`

  userPlanDeatils["totalAmountToPay"] += addOnPrice

  addOnNameSpan.className = "text-gray-500"
  addOnPriceSpan.className = "text-blue-900 font-black"

  addOnDiv.append(addOnNameSpan, addOnPriceSpan)

  return addOnDiv
}

// Thank You Page

function renderUiForThankYouPage() {
  const formList = document.querySelector(".form-content").children
  const currentForm = formList[currPage - 1]
  currentForm.classList.add("hidden")

  // Remove Buttons
  document.querySelector(".button-div").classList.add("hidden")

  const thankYouPage = document.querySelector(".thank-you-page")
  thankYouPage.classList.remove("hidden")

  thankYouPage.parentElement.classList.replace(
    "justify-between",
    "justify-center"
  )

  const thankMsgfForUser = thankYouPage.querySelector(".thank-you-user")
  thankMsgfForUser.innerText = `Thank you ${userDetails.name}`

  console.log(thankMsgfForUser)

  const thankYouMessage = thankYouPage.querySelector(".thank-you-message")
  thankYouMessage.innerText = `Thanks for confirming your subscription! We hope you have fun using our platform. Product credentails has been send to ${maskEmail(
    userDetails.email
  )} and ${maskPhoneNumber(userDetails["phone-number"])}`

  console.log(thankYouMessage)
}

function maskEmail(email) {
  let [user, domain] = email.split("@")
  if (user.length > 2) {
    user = user.substring(0, 2) + "xxxx"
  }
  return user + "@" + domain
}

function maskPhoneNumber(phone) {
  return phone.slice(0, 2) + "*".repeat(phone.length - 4) + phone.slice(-2)
}
