export async function emailsFetcher( pageNo ) {

  const emailsFetcherUrl = `https://flipkart-email-mock.vercel.app/?page=${pageNo}`

    try {
      const response = await fetch(emailsFetcherUrl);
      const data = await response.json()
      return await data["list"]
    } catch (error) {
      console.error("Error fetching emails:", error)
      return null
    }
  }

export async function emailBodyFetcher( emailId ) {

   const emailBodyFectherUrl = `https://flipkart-email-mock.now.sh/?id=${emailId}`

   console.log( emailBodyFectherUrl )
    try {
      const response = await fetch(emailBodyFectherUrl);
      const data = await response.json();
      return data
    } catch (error) {
      console.error("Error fetching emails:", error)
      return null
    }
  }
  