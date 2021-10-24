export const state = () => ({

  eventsInitial: [],
  events: [],
  token:null,

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
  tags: ['hackaton', 'free', 'movie', 'food'],
})

export const getters = {
  getToken(state) {
    return state.token
  },
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
  setToken(state,token) {
    state.token = token
  },
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
  setToken({ commit },token) {
    commit('setToken',token)
  },
  setEventsInitial(context, events) {
    context.commit('setEventsInitial', events)
  },
  setEvents(context, events) {
    context.commit('setEvents', events)
  },
  setEndpoint(context, endpoint) {
    context.commit('setEndpoint', endpoint)
  },
  logout({ commit }) {
    commit('setToken', undefined)
  }
}
