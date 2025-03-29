const sortFunctionMapper = {
  Popularity: sortByPopularity,
  "Minimum Amount": sortByMinimumAmount,
  "Recently Rebalanced": sortByRecentlyRebalanced,
}

export function dataSortHelper(sortBy, filteredData) {
  const { selectedFilter, selectedTimePeriod, sortAscending } = sortBy

  if (selectedFilter) {
    sortFunctionMapper[selectedFilter](filteredData, sortAscending)
  } else if (selectedTimePeriod) {
    sortByReturn(filteredData, selectedTimePeriod, sortAscending)
  }
}

function sortByPopularity(filteredData, sortAscending) {
  filteredData.sort((a, b) => {
    const popularityA = a?.brokerMeta?.flags?.popular?.rank
    const popularityB = b?.brokerMeta?.flags?.popular?.rank
    return sortAscending ? popularityA - popularityB : popularityB - popularityA
  })
}

function sortByMinimumAmount(filteredData, sortAscending) {
  filteredData.sort((a, b) => {
    const minAmountA = a?.stats?.minInvestAmount
    const minAmountB = b?.stats?.minInvestAmount
    return sortAscending ? minAmountA - minAmountB : minAmountB - minAmountA
  })
}

function sortByRecentlyRebalanced(filteredData, sortAscending) {
  filteredData.sort((a, b) => {
    const balancedDateA = a?.info?.lastRebalanced
    const balancedDateB = b?.info?.lastRebalanced
    return sortAscending
      ? balancedDateA.localeCompare(balancedDateB)
      : balancedDateB.localeCompare(balancedDateA)
  })
}

function sortByReturn(filteredData, selectedTimePeriod, sortAscending) {
  filteredData.sort((a, b) => {
    const returnsA = a?.stats?.returns?.[selectedTimePeriod]
    const returnsB = b?.stats?.returns?.[selectedTimePeriod]
    return sortAscending ? returnsA - returnsB : returnsB - returnsA
  })
}
