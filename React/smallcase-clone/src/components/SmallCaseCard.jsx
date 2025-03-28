import React from 'react'

export default function SmallCaseCard( {cardInfo}) {

  const {  info , stats , platformData , scid  } =  cardInfo

  const { shortDescription , publisherName , name  } = info
  const { ratios , minInvestAmount } = stats
  const { riskLabel } = ratios
  const { ratios :  platFormRatio } =  platformData 
  const { cagrDuration , cagr  } = platFormRatio

  // console.log(  riskLabel , minInvestAmount , publisherName , shortDescription , name , cagrDuration  , scid  )



  return (
        <div className='card flex p-8 border border-amber-200 h-40'>

          <div className='image-holder h-20 w-20'>
            <img src={`https://assets.smallcase.com/images/smallcases/160/${scid}.png`} alt={publisherName} />
          </div>

          <div className='info-box flex flex-col'>
            <div>{name}</div>
            <div>{shortDescription}</div>
            <div>{ `by ${publisherName}`  }</div>
          </div>

          <div className='min-amount flex flex-col'>
              <p>{"Min.Amount"}</p>
              <p>{ `$ ${minInvestAmount}`}</p>
          </div>

          <div className='cagr-box'>

            <p>{ cagrDuration }</p>
            <p>{ `%${(cagr*100).toFixed(2)}` }</p>
          </div>

          <div>
            {riskLabel}
          </div>



        </div>
      )
}
