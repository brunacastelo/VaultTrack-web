const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function getAllBanks() {
  const response = await fetch(`${API_URL}/api/banks`)
  if (!response.ok) {
    throw new Error('Error fetching banks')
  }
  return response.json()
}

export async function deleteBank(bankId: string) {
  const response = await fetch(`${API_URL}/api/banks/${bankId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Error deleting banks')
  }
  return response.json()
}