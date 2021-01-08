export const state = () => ({
  step: 0,
  treatmentChoices: [],
  dateTime: null,
  contact: {},
  winkelwagenOpened: false,
  navigationOpened: false
})

export const mutations = {
  addTreatmentChoice(state, treatmentChoice) {
    state.treatmentChoices.push(treatmentChoice);
  },
  removeTreatmentChoice(state, treatmentChoice) {
    state.treatmentChoices.splice(state.treatmentChoices.indexOf(treatmentChoice), 1)
  },
  setDateTime(state, dateTime){
    state.dateTime = dateTime;
  },
  setContactDetails(state, contactDetails){
    state.contact = contactDetails;
  },
  setStep(state, step) {
    state.step = step
  },
  toggleWinkelwagen(state) {
    state.winkelwagenOpened = !state.winkelwagenOpened;
  },
  toggleNavigation(state) {
    state.navigationOpened = !state.navigationOpened;
  }
}
