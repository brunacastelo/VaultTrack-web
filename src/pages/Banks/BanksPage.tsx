import { useEffect, useState } from 'react'
import { getAllBanks, deleteBank } from '../../services/bankService'
import BankCard from '../../components/BankCard'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import CircularProgress from '@mui/material/CircularProgress'
import AddIcon from '@mui/icons-material/Add'

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

  const handleEdit = (bankId: string) => {
    // Abrir modal para edição
    console.log('Editar banco', bankId)
  }

  const handleDelete = (bankId: string) => {
    // Mostrar diálogo de confirmação
    deleteBank(bankId)
    console.log('Deletar banco', bankId)
  }

  const handleAdd = () => {
    // Abrir modal para novo banco
    console.log('Adicionar novo banco')
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box p={2}>
        <Typography color="error">Erro ao carregar bancos: {error}</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ position: 'relative', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Bancos
      </Typography>

      <Grid container spacing={2}>
        {banks.map((bank) => (
          <Grid item xs={12} sm={6} md={4} key={bank.id}>
            <BankCard
              id={bank.id}
              name={bank.name}
              onEdit={() => handleEdit(bank.id)}
              onDelete={() => handleDelete(bank.id)}
            />
          </Grid>
        ))}
      </Grid>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleAdd}
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}

export default BanksPage
