import { useEffect, useState } from 'react'
import { createBank, getAllBanks, deleteBank, updateBank } from '../../services/bankService'
import BankCard from '../../components/BankCard'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import CircularProgress from '@mui/material/CircularProgress'
import AddIcon from '@mui/icons-material/Add'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

function BanksPage() {
  const [banks, setBanks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [openModal, setOpenModal] = useState(false)
  const [newBankName, setNewBankName] = useState('')
  const [editBank, setEditBank] = useState(null)

  useEffect(() => {
    fetchBanks()
  }, [])

  const fetchBanks = () => {
    setLoading(true)
    getAllBanks()
      .then(setBanks)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  const handleEdit = (bank: any) => {
    setEditBank(bank)
    handleOpenModal()
    setNewBankName(bank.name)
  }

  const handleDelete = async (bankId: string) => {
    try {
      await deleteBank(bankId)
      await fetchBanks()
    } catch (err) {
      console.error(err)
    }
  }

  const handleOpenModal = () => {
    setOpenModal(true)
    setNewBankName('')
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setEditBank(null)
  }

  const handleSaveBank = async () => {
    if (!newBankName.trim()) return
    try {
      if(editBank) {
        await updateBank({ id: editBank.id, name: newBankName })
        setEditBank(null)
      } else {
        await createBank(newBankName)
      }

      await fetchBanks()
      setOpenModal(false)
    } catch (err) {
      console.error(err)
    }
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
              onEdit={() => handleEdit(bank)}
              onDelete={() => handleDelete(bank.id)}
            />
          </Grid>
        ))}
      </Grid>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleOpenModal}
      >
        <AddIcon />
      </Fab>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>{editBank ? 'Editar banco' : 'Novo banco'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome do banco"
            type="text"
            fullWidth
            value={newBankName}
            onChange={(e) => setNewBankName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleSaveBank} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>


    </Box>
  )
}

export default BanksPage
