const sortFunctionMapper = {
  Popularity: sortByPopularity,
  "Minimum Amount": sortByMinimumAmount,
  "Recently Rebalanced": sortByRecentlyRebalanced,
}

export function dataSortHelper(sortBy, smallCaseData) {
  const { selectedFilter, selectedTimePeriod, sortAscending } = sortBy

  if (selectedFilter) {
    sortFunctionMapper[selectedFilter](smallCaseData, sortAscending)
  } else if (selectedTimePeriod) {
    sortByReturn(smallCaseData, selectedTimePeriod, sortAscending)
  }
}

function sortByPopularity(smallCaseData, sortAscending) {
  smallCaseData.sort((a, b) => {
    const popularityA = a?.brokerMeta?.flags?.popular?.rank
    const popularityB = b?.brokerMeta?.flags?.popular?.rank
    return sortAscending ? popularityA - popularityB : popularityB - popularityA
  })
}

function sortByMinimumAmount(smallCaseData, sortAscending) {
  smallCaseData.sort((a, b) => {
    const minAmountA = a?.stats?.minInvestAmount
    const minAmountB = b?.stats?.minInvestAmount
    return sortAscending ? minAmountA - minAmountB : minAmountB - minAmountA
  })
}

function sortByRecentlyRebalanced(smallCaseData, sortAscending) {
  smallCaseData.sort((a, b) => {
    const balancedDateA = a?.info?.lastRebalanced
    const balancedDateB = b?.info?.lastRebalanced
    return sortAscending
      ? balancedDateA.localeCompare(balancedDateB)
      : balancedDateB.localeCompare(balancedDateA)
  })
}

function sortByReturn(smallCaseData, selectedTimePeriod, sortAscending) {
  smallCaseData.sort((a, b) => {
    const returnsA = a?.stats?.returns?.[selectedTimePeriod]
    const returnsB = b?.stats?.returns?.[selectedTimePeriod]
    return sortAscending ? returnsA - returnsB : returnsB - returnsA
  })
}
