export const state = () => ({

  eventsInitial: [],
  events: [],

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
  ],
  tags: ['1', '2', '3', '4', '5'],
})

export const getters = {
  getEvents(state) {
    return state.events;
  },
  getEventsInitial(state) {
    return state.eventsInitial;
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
  setEventsInitial(state, events) {
    state.eventsInitial = events;
  },
  setEndpoint(state, endpoint) {
    state.endpoint = endpoint
  },
}

export const actions = {
  setEventsInitial(context, events) {
    context.commit('setEventsInitial', events)
  },
  setEvents(context, events) {
    context.commit('setEvents', events)
  },
  setEndpoint(context, endpoint) {
    context.commit('setEndpoint', endpoint)
  },
}
