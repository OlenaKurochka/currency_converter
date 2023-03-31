import React, {useEffect, useState} from 'react'

export default function Header() {
  const [headerInfo, setHeaderInfo] = useState([])
  const [USDcc, setUSDcc ]= useState()
  const [USDrate, setUSDrate ]= useState()
  const [EURcc, setEURcc ]= useState()
  const [EURrate, setEURrate ]= useState()
  const [exchangeDate, setExchangeDate] = useState()

  useEffect(() => {
      fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
         .then((res) => res.json())
         .then((data) => {
          setHeaderInfo(data)
          setUSDcc(data[24].cc);
          setUSDrate(data[24].rate)
          setEURcc(data[31].cc);
          setEURrate(data[31].rate)
          setExchangeDate(data[31].exchangedate)
         })
         .catch((err) => {
            console.log(err.message);
         });
   });

    return (
      <div className='headerInfo'>
        <h3 className='header_text'>Офіційний курс гривні щодо іноземних валют на {exchangeDate}</h3>
        <div className='header'>
            {
                headerInfo.map((rate) => (
                    <div className='rate_container' key={rate.r030}>
                        <h4 className='rate_txt'>{rate.txt}</h4>  
                        <h3 className='rate_cc'>{rate.cc}</h3>
                        <h2 className='rate_rate'>{rate.rate}</h2>
                    </div>
                ))
            }
        </div>
        <div className='header_static'>
            <div>{USDcc}:{USDrate}</div>
            <div>{EURcc}:{EURrate}</div>
        </div>
        <div className='link_to_NBU'>
            <a  href="https://bank.gov.ua/ua/markets/exchangerates" rel="noreferrer" target='_blank'>Перейти на сайт НБУ</a>
        </div>

      </div>
  )
}

