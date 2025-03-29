import "./index.css"
import TopNav from "./components/TopNav"
import Filters from "./components/Filters"
import Smallcases from "./components/SmallCases"
import { useState } from "react"
import { dataFilterHelper } from "./FilterAndSortHelper/filterHelper"
import { dataSortHelper } from "./FilterAndSortHelper/sortHelper"

import smallCases from "./data/smallcases.json"

function App() {
  const [subscriptionType, setSubscriptionType] = useState(null)
  const [investmentAmount, setInvestmentAmount] = useState(null)
  const [desiredVolatilities, setDesiredVolatilities] = useState(new Set())
  const [includeNewSmallCase, setIncludeNewSmallCase] = useState(false)
  const [preferredInvestmentStrategy, setPreferredInvestmentStrategy] =
    useState(new Set())

  // There is no use for this useState , we are using it for mimicking retriving data from backend
  const [smallCaseData, setSmallCaseData] = useState(smallCases["data"])

  const [sortBy, setSortBy] = useState({
    selectedFilter: null,
    selectedTimePeriod: null,
    sortAscending: true,
  })

  const [filterByName, setFilterByName] = useState("")

  const filters = {
    subscriptionType,
    investmentAmount,
    desiredVolatilities,
    includeNewSmallCase,
    preferredInvestmentStrategy,
    filterByName,
  }

  const filteredData = dataFilterHelper(filters, smallCaseData)
  dataSortHelper(sortBy, filteredData)

  return (
    <div>
      <TopNav
        setSortBy={setSortBy}
        sortBy={sortBy}
        setFilterByName={setFilterByName}
        filterByName={filterByName}
      />
      <div className="w-[70vw] grid grid-cols-[20%_80%] gap-6">
        <Filters
          subscriptionType={subscriptionType}
          setSubscriptionType={setSubscriptionType}
          investmentAmount={investmentAmount}
          setInvestmentAmount={setInvestmentAmount}
          desiredVolatilities={desiredVolatilities}
          setDesiredVolatilities={setDesiredVolatilities}
          includeNewSmallCase={includeNewSmallCase}
          setIncludeNewSmallCase={setIncludeNewSmallCase}
          preferredInvestmentStrategy={preferredInvestmentStrategy}
          setPreferredInvestmentStrategy={setPreferredInvestmentStrategy}
        />

        {smallCaseData && <Smallcases smallCaseData={filteredData} />}
      </div>
    </div>
  )
}

export default App
