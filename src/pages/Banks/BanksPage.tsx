import { useEffect, useState } from 'react'
import BankCard from '../../components/BankCard'
import { getAllBanks } from '../../services/bankService'

function BanksPage() {
  const [banks, setBanks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllBanks()
      .then(setBanks)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Carregando bancos...</p>
  if (error) return <p>Erro: {error}</p>

  return (
    <div>
      <h1>Bancos</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {banks.map((bank) => (
          <BankCard id={bank.id} name={bank.name} />
        ))}
      </div>
    </div>
  )
}

export default BanksPage
