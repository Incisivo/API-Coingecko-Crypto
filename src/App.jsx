import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from './components/Table'
import './index.css'

function App() {

  const [coins, setCoins] = useState([])
  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&bitcoin=market_cap_desc&per_page=100&page=1')

    setCoins(res.data)
  }

  useEffect(() => {
    getData()
  }, [coins])

  return (
    <>
      <div className='text-center text-3xl p-5'>CRYPTO</div>

      <Table coins={coins} />
    </>
  )


}
export default App
