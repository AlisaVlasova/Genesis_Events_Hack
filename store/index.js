export const state = () => ({
  events: [
    {
      name: 'test kjgh  jw gfjw  gf jgw kfug',
      id: 1,
      text: 'khgcj gsdkchskh ckshkchskch kshckhsckhsdkc hkshcksh ckshckshcj shckh k hskhskch ksjchk jshc kshcksck',
      date: 'ajhxfytqf',
      tags: ['jhgshjd', 'sdcvs', 'sdfs'],
    },
    {
      name: 'test kjgh  jw gfjw  gf jgw kfug',
      id: 2,
      text: 'khgcj gsdkchskh ckshkchskch kshckhsckhsdkc hkshcksh ckshckshcj shckh k hskhskch ksjchk jshc kshcksck',
      date: 'ajhxfytqf',
      tags: ['jhgshjd', 'sdcvs', 'sdfs'],
    },
    {
      name: 'test kjgh  jw gfjw  gf jgw kfug',
      id: 3,
      text: 'khgcj gsdkchskh ckshkchskch kshckhsckhsdkc hkshcksh ckshckshcj shckh k hskhskch ksjchk jshc kshcksck',
      date: 'ajhxfytqf',
      tags: ['jhgshjd', 'sdcvs', 'sdfs'],
    },
  ],

  endpoint:
    'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/',
})

export const getters = {
  getEvents(state) {
    return state.events
  },
  getEndpoint(state) {
    return state.endpoint
  },
}

export const mutations = {
  setEvents(state, events) {
    state.events = events
  },
  setEndpoint(state, endpoint) {
    state.endpoint = endpoint
  },
}

export const actions = {
  setEvents(context, events) {
    context.commit('setEvents', events)
  },
  setEndpoint(context, endpoint) {
    context.commit('setEndpoint', endpoint)
  },
}
