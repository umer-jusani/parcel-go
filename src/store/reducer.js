import { createSlice } from '@reduxjs/toolkit'

export const reducer = createSlice({
  name: 'appReducer',
  initialState: {
    user: null,
    notificationCount: 0,
    isLogged: false,
    openMenu: false,
    loader: false,
    cartCount: 0,
    filter: {},
    notificationsLoading: true,
    ratingModal: {
      status: false, // true: open, false: close
      tender_id: '',
      given_to_id: '',
      rating: 0,
      reviewMessage: '',
    },
    notificationsPage: 1,
    notificationsHasMore: true,
    mapLoaded: false,
  },

  reducers: {
    // Existing reducers
    setUser: (state, { payload }) => {
      state.isLogged = true
      state.user = payload
    },
    setLogged: (state) => {
      state.isLogged = true
    },
    setNotificationCount: (state, { payload }) => {
      state.notificationCount = payload
    },
    logoutUser: (state) => {
      state.user = null
      state.isLogged = false
    },
    toggleMenu: (state) => {
      state.openMenu = !state.openMenu
    },
    closeMenu: (state) => {
      state.openMenu = false
    },
    setTenderSelectedYearLoading: (state, { payload }) => {
      state.tenderSelectedYearLoading = payload
    },
    setBidSelectedYearLoading: (state, { payload }) => {
      state.bidSelectedYearLoading = payload
    },
    setRevenueSelectedYearLoading: (state, { payload }) => {
      state.revenueSelectedYearLoading = payload
    },
    setNotifications: (state, { payload }) => {
      const { all, read, unread } = payload
      state.notifications.all = all
      state.notifications.read = read
      state.notifications.unread = unread
    },
    appendNotifications: (state, { payload }) => {
      const { all, read, unread } = payload
      state.notifications.all = [...state.notifications.all, ...all]
      state.notifications.read = [...state.notifications.read, ...read]
      state.notifications.unread = [...state.notifications.unread, ...unread]
    },
    setNotificationsLoading: (state, { payload }) => {
      state.notificationsLoading = payload
    },
    setNotificationsPage: (state, { payload }) => {
      state.notificationsPage = payload
    },
    setNotificationsHasMore: (state, { payload }) => {
      state.notificationsHasMore = payload
    },
    setTenderSelectedYear: (state, { payload }) => {
      state.tenderSelectedYear = payload
    },
    setBidSelectedYear: (state, { payload }) => {
      state.bidSelectedYear = payload
    },
    setRevenueSelectedYear: (state, { payload }) => {
      state.revenueSelectedYear = payload
    },
    setRatingModal: (state, { payload }) => {
      state.ratingModal = { ...state.ratingModal, ...payload }
    },
    resetNotifications: (state) => {
      state.notifications = { all: [], read: [], unread: [] }
      state.notificationsPage = 1
      state.notificationsHasMore = true
    },
    setMapLoaded: (state, { payload }) => {
      state.mapLoaded = payload 
    }
  },
})

export const {
  setLogged,
  setUser,
  logoutUser,
  toggleMenu,
  closeMenu,
  setNotificationCount,
  setNotifications,
  appendNotifications,
  setNotificationsLoading,
  setNotificationsPage,
  setNotificationsHasMore,
  resetNotifications,
  setRatingModal,
  setTenderSelectedYear,
  setTenderSelectedYearLoading,
  setBidSelectedYear,
  setRevenueSelectedYear,
  setBidSelectedYearLoading,
  setMapLoaded,
  setRevenueSelectedYearLoading,
} = reducer.actions

export const selectSearchModal = (state) => state.appReducer.openSearchModel
export const selectRatingModal = (state) => state.appReducer.ratingModal

export default reducer.reducer
