function BankCard({ name, balance }) {
  return (
    <div className="bank-card">
      <h3>{name}</h3>
      <p>Saldo: R$ {Number(balance).toFixed(2)}</p>
    </div>
  )
}

export default BankCard