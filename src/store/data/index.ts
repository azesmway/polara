import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IApp {
  categories: any[]
  showMenu: boolean
  modalReservation: boolean
  modalMaster: boolean
  modalMore: {
    viewModal: boolean
    typeModal: string
  }
}

const initialState: IApp = {
  categories: [],
  showMenu: false,
  modalReservation: false,
  modalMaster: false,
  modalMore: {
    viewModal: false,
    typeModal: ''
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppCategories: (state, action: PayloadAction<any[]>) => {
      state.categories = action.payload
    },
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload
    },
    setModalReservation: (state, action: PayloadAction<boolean>) => {
      state.modalReservation = action.payload
    },
    setModalMaster: (state, action: PayloadAction<boolean>) => {
      state.modalMaster = action.payload
    },
    setModalMore: (state, action: PayloadAction<any>) => {
      state.modalMore = action.payload
    }
  }
})

export const { setAppCategories, setShowMenu, setModalReservation, setModalMaster, setModalMore } = appSlice.actions

export default appSlice.reducer
