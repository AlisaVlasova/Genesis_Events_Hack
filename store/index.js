export const state = () => ({
  events: [],
  eventsClone: [],
  endpoint:
    'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/',
  // users list for admin only
  users: [
    {
      name: 'Leo',
      location: 'Kiev',
      age: '105',
      img: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png',
      favoriteTags: [
        'jhgshjd',
        'sdcvs',
        'sdfs',
      ] 
    },
    {
      name: 'Leo',
      location: 'Kiev',
      age: '105',
      img: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png', 
      favoriteTags: [
        'jhgshjd',
        'sdcvs',
        'sdfs',
      ]
    },
    {
      name: 'Leo',
      location: 'Kiev',
      age: '105',
      img: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png',
      favoriteTags: [
        'jhgshjd',
        'sdcvs',
        'sdfs',
      ] 

    }
  ]
})

export const getters = {
  getEvents(state) {
    return state.events;
  },
  getEventsClone(state) {
    return state.eventsClone;
  },
  getTags(state) {
    return state.tags;
  },
  getEndpoint(state) {
    return state.endpoint
  },

  getUsers(state) {
    return state.users
  }
}

export const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
  setEventsClone(state, events) {
    state.eventsClone = events;
  },
  setEndpoint(state, endpoint) {
    state.endpoint = endpoint
  },
}

export const actions = {
  setEventsClone(context, events) {
    context.commit('setEventsClone', events)
  },
  setEvents(context, events) {
    context.commit('setEvents', events)
  },
  setEndpoint(context, endpoint) {
    context.commit('setEndpoint', endpoint)
  },
}
