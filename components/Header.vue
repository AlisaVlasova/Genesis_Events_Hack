<template>
  <header>
    <nav class="nav">
      <button class="nav__btnWrap" @click="toggleNav">
        <div class="nav__btn"></div>
      </button>
      <NuxtLink to="/" class="nav__logo nav__link">LOGO Company</NuxtLink>
      <ul :class="[{ 'nav__list-toggle': isToggleMobileNav }, 'nav__list']">
        <li class="nav__item">
             <NuxtLink to="/" class="nav__link">Events</NuxtLink>
        </li>
        <li class="nav__item">
            <NuxtLink to="/event" class="nav__link">Favorite</NuxtLink>
        </li>
        <li class="nav__item">
            <NuxtLink to="/event" class="nav__link">Profile</NuxtLink>
        </li>
        <li class="nav__item">
            <NuxtLink to="/event" class="nav__link">Login/Registry</NuxtLink>
        </li>
      </ul>
    </nav>
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

.nav {
  background: #202c59ff;

  @media (min-width: 700px) {
    display: flex;
  }

  &__list {
    margin: 0 auto;
    // display: flex;
    height: 100vh;
    // flex-direction: column;
    // justify-content: center;
    &-toggle {
      display: none;
      @media (min-width: 700px) {
        display: block;
      }
    }
    @media (min-width: 700px) {
      display: flex;
      //   flex-direction: row;
      height: auto;
    }
  }
  &__item,
  &__logo {
    line-height: 48px;
    padding: 0 20px;
  }

  &__item:not(:last-child) {
    @media (min-width: 700px) {
      margin-right: 30px;
    }
  }
  &__link {
    font-weight: bold;
    color: $text;
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