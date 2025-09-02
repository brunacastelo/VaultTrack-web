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
    throw new Error('Error deleting bank')
  }

  if (response.status !== 204) {
    return response.json()
  }

  return null
}

export async function createBank(bankName: string) {
  const response = await fetch(`${API_URL}/api/banks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: bankName
    })
  })

  if (response.status !== 201) {
    throw new Error('Error creating bank')
  }

  return response.json()
}

export async function updateBank(bank: any) {
  const response = await fetch(`${API_URL}/api/banks/` + bank.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: bank.name
    })
  })
}