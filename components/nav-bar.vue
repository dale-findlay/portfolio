<template>
  <nav class="navbar navbar-expand-sm navbar-custom mb-3">
    <div class="container-fluid">
      <span class="navbar-brand mb-0">Dale Findlay</span>
      <button
        class="navbar-toggler bg-foreground text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" :class="{'active': $route.name == 'index'}" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{'active': $route.name == 'about-me'}" href="about-me">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="blank" href="https://github.com/dale-findlay">GitHub <i class="fab fa-github-square"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style>
.navbar-custom {
  border-bottom: 1px rgba(84, 84, 84, 0.48) solid;
}

.nav-link.active {
  font-weight: bold;
}

.navbar-toggler {
  padding: 0.75rem !important;
}
</style>