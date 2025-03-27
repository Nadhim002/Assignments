export async function emailsFetcher( ) {

  const emailsFetcherUrl = `https://flipkart-email-mock.vercel.app`

    try {
      
      const response = await fetch(emailsFetcherUrl);


      const data = await response.json()

      return await data["list"]
    } catch (error) {
      console.error("Error fetching emails:", error.message )
      throw error
      
    }
  }

export async function emailBodyFetcher( emailId ) {


   const emailBodyFectherUrl = `https://flipkart-email-mock.now.sh/?id=${emailId}`
   console.log(emailBodyFectherUrl)

   try {
      const response = await fetch(emailBodyFectherUrl);
      const data = await response.json();
      return data
    } catch (error) {
      console.error("Error fetching emails:", error)
      return error
    }
  }
  