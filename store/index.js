
export const state = () => ({
  events: {}
})

export const getters = {
  getEvents(state) {
    return state.events
  }
}

export const mutations = {
  setEvents(state, events) {
    state.events = events;
  }
}

export const actions = {
  setEvents(context, events) {
    context.commit('setEvents', events);
  }
}