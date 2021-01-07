export const state = () => ({
  step: 0,
  treatmentChoices: [],
  dateTime: null,
  contact: {},
  winkelwagenOpened: true,
  navigationOpened: false
})

/*const mq = window.matchMedia( "(min-width: 860px)" );
if (mq.matches) {
} else {
}
/*
  stap 0: Behandelingen kiezen
  stap 1: Kapper kiezen
  stap 2: Kalender
  stap 3: Contact
 */

export const mutations = {
  addTreatmentChoice(state, treatmentChoice) {
    state.treatmentChoices.push(treatmentChoice);
  },
  removeTreatmentChoice(state, treatmentChoice) {
    state.list.splice(state.list.indexOf(treatmentChoice), 1)
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
