import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IApp {
  showMenu: boolean
  modalReservation: {
    viewModal: boolean
    typeModal: string
  }
  modalMaster: {
    viewModal: boolean
    typeModal: string
  }
  modalMore: {
    viewModal: boolean
    typeModal: string
  }
  form: {
    name: string
    telegram: string
    phone: string
    question: string
  }
}

const initialState: IApp = {
  showMenu: false,
  modalReservation: {
    viewModal: false,
    typeModal: ''
  },
  modalMaster: {
    viewModal: false,
    typeModal: ''
  },
  modalMore: {
    viewModal: false,
    typeModal: ''
  },
  form: {
    name: '',
    telegram: '',
    phone: '',
    question: ''
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload
    },
    setModalReservation: (state, action: PayloadAction<any>) => {
      state.modalReservation = action.payload
    },
    setModalMaster: (state, action: PayloadAction<any>) => {
      state.modalMaster = action.payload
    },
    setModalMore: (state, action: PayloadAction<any>) => {
      state.modalMore = action.payload
    },
    setForm: (state, action: PayloadAction<any>) => {
      state.form = action.payload
    }
  }
})

export const { setShowMenu, setModalReservation, setModalMaster, setModalMore, setForm } = appSlice.actions

export default appSlice.reducer
