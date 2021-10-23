
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
    },
    {
      name: 'test kjgh  jw gfjw  gf jgw kfug',
      id: 2,
      text: 'khgcj gsdkchskh ckshkchskch kshckhsckhsdkc hkshcksh ckshckshcj shckh k hskhskch ksjchk jshc kshcksck',
      date: 'ajhxfytqf',
      tags: [
        'jhgshjd',
        'sdcvs',
        'sdfs',
      ]
    },
    {
      name: 'test kjgh  jw gfjw  gf jgw kfug',
      id: 3,
      text: 'khgcj gsdkchskh ckshkchskch kshckhsckhsdkc hkshcksh ckshckshcj shckh k hskhskch ksjchk jshc kshcksck',
      date: 'ajhxfytqf',
      tags: [
        'jhgshjd',
        'sdcvs',
        'sdfs',
      ]
    }
  ],
  tags: ['1', '2', '3', '4', '5'],
})

export const getters = {
  getEvents(state) {
    return state.events;
  },
  getTags(state) {
    return state.tags;
  }
}

export const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
}

export const actions = {
  setEvents(context, events) {
    context.commit('setEvents', events);
  }
}