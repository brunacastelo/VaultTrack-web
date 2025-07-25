const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function getAllBanks() {
  const response = await fetch(`${API_URL}/api/banks`)
  if (!response.ok) {
    throw new Error('Error fetching banks')
  }
  return response.json()
}