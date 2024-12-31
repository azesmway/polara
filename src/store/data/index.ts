import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IApp {
  categories: any[]
  showMenu: boolean
  modalFullPay: boolean
}

const initialState: IApp = {
  categories: [],
  showMenu: false,
  modalFullPay: false
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
    setModalFullPay: (state, action: PayloadAction<boolean>) => {
      state.modalFullPay = action.payload
    }
  }
})

export const { setAppCategories, setShowMenu, setModalFullPay } = appSlice.actions

export default appSlice.reducer
