<template>
  <header class="header">
    <nav class="nav">
      <button class="nav__btnWrap" @click="toggleNav">
        <div class="nav__btn"></div>
      </button>
      <nuxt-link to="/" class="nav__logo nav__link">LOGO Company</nuxt-link>
      <ul :class="[{ 'nav__list-toggle': isToggleMobileNav }, 'nav__list']">
        <li class="nav__item" @click.stop="toggleNav">
          <nuxt-link to="/" class="nav__link" :class="{ active: $nuxt.$route.path === '/' }">Events</nuxt-link>
        </li>
        <li class="nav__item" @click.stop="toggleNav">
          <nuxt-link to="/event" class="nav__link" :class="{ active: $nuxt.$route.path === '/event' }">Favorite</nuxt-link>
        </li>
        <li class="nav__item" @click.stop="toggleNav">
          <nuxt-link to="/profile" class="nav__link" :class="{ active: $nuxt.$route.path === '/profile' }">Profile</nuxt-link>
        </li>
        <li class="nav__item" @click.stop="toggleNav">
          <nuxt-link to="/signin" class="nav__link" :class="{ active: $nuxt.$route.path === '/signin' }">Signin</nuxt-link>
        </li>
        <li class="nav__item" @click.stop="toggleNav">
          <nuxt-link to="/signup" class="nav__link nav__link--button" :class="{ active: $nuxt.$route.path === '/signup' }">Signup</nuxt-link>
        </li>
      </ul>
    </nav>
    <search v-if="$nuxt.$route.path === '/events' || $nuxt.$route.path === '/'" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      isToggleMobileNav: true,
    }
  },
  methods: {
    toggleNav() {
      this.isToggleMobileNav = !this.isToggleMobileNav
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';

.header {
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  background: #202c59ff;
}

.nav {
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }

  &__list {
    height: 100vh;

    &-toggle {
      display: none;

      @media (min-width: 700px) {
        display: block;
      }
    }

    @media (min-width: 700px) {
      display: flex;
      height: auto;
    }
  }

  &__item,
  &__logo {
    line-height: 48px;
    padding: 0 20px;
    cursor: pointer;
    transition: 0.4s;

    &:hover > .nav__link {
      color: $tangerine
    }

    &:hover > .nav__link--button {
      color: $tangerine;
      background: $text;
    }
  }

  &__item:not(:last-child) {
    @media (min-width: 700px) {
      margin-right: 30px;
    }
  }

  &__link {
    color: $text;
    transition: 0.4s;

    &--button {
      background: $tangerine;
      padding: 8px
    }

    &.active {
      color: $tangerine
    }
  }

  &__btnWrap {
    position: absolute;
    top: 20px;
    right: 20px;
    background: 0;
    border: 0;

    @media (min-width: 700px) {
      display: none;
    }
  }

  &__btn,
  &__btn::before,
  &__btn::after {
    width: 20px;
    height: 2px;
    background: $text;
  }

  &__btn::before,
  &__btn::after {
    content: '';
    display: block;
    position: relative;
    left: 0;
  }

  &__btn::before {
    top: -6px;
  }

  &__btn::after {
    top: 4px;
  }

  &__btnIcon {
    fill: $text;
  }

  &__logo {
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    background: linear-gradient(45deg, $marigold 0, $flame 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: auto;
    margin-bottom: 40%;

    @media (min-width: 700px) {
      margin-bottom: 0;
    }
  }
}
</style>
