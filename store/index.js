
export const state = () => ({
  events: [
    {
      name: 'test kjgh  jw gfjw  gf jgw kfug',
      id: 1,
      text: 'khgcj gsdkchskh ckshkchskch kshckhsckhsdkc hkshcksh ckshckshcj shckh k hskhskch ksjchk jshc kshcksck',
      date: 'ajhxfytqf',
      tags: [
        'jhgshjd',
        'sdcvs',
        'sdfs',
      ]
    }
  ]
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