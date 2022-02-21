<template>
  <div class="item-card" :id="itemData.id">
    <div
      class="modal fade"
      :id="`${itemData.id}-modal`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-fullscreen p-4">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title text-black"
              id="exampleModalLabel"
            >{{itemData.name}} - Images/Videos</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div
              :id="itemData.id + '-carousel-large'"
              class="carousel slide"
              data-bs-ride="carousel"
              style="width: 75%;"
              v-if="itemData.slides && itemData.slides.length > 0"
            >
              <div class="carousel-inner">
                <div
                  class="carousel-item"
                  :ref="`carousel-item-large-${index}`"
                  v-for="(slide, index) in itemData.slides"
                  v-bind:key="slide.alt"
                >
                  <img :src="slide.url" class="d-block w-100" :alt="slide.alt" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                :data-bs-target="'#' + itemData.id + '-carousel-large'"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                :data-bs-target="'#' + itemData.id + '-carousel-large'"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h3>{{itemData.name}}</h3>
        <div class="item-card-badges">
          <span
            class="badge me-1"
            :class="{'bg-secondary': badgeText != 'Shipped', 'bg-success': badgeText == 'Shipped'}"
            v-for="badgeText in itemData.badges"
            v-bind:key="badgeText"
          >{{badgeText}}</span>
        </div>
        <p v-html="itemData.description"></p>
        <div class="badge-links" v-if="itemData.linkBadges && itemData.linkBadges.length > 0">
          <span v-for="link in itemData.linkBadges" :key="`${itemData.name}-${link.href}`">
            <a :href="link.href" target="blank">
              <i v-if="link.type == 'github'" class="fab fa-github"></i>
              <i v-if="link.type == 'windows'" class="fab fa-windows"></i>
              <i v-if="link.type == 'android'" class="fab fa-android"></i>
            </a>
          </span>
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column">
        <div
          :id="itemData.id + '-carousel'"
          class="carousel slide"
          data-bs-ride="carousel"
          v-if="itemData.slides && itemData.slides.length > 0"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item"
              :ref="`carousel-item-${index}`"
              v-for="(slide, index) in itemData.slides"
              v-bind:key="slide.alt"
            >
              <img :src="slide.url" class="d-block w-100" :alt="slide.alt" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            :data-bs-target="'#' + itemData.id + '-carousel'"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="'#' + itemData.id + '-carousel'"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <button
          class="d-none d-md-block btn btn-sm btn-outline-secondary mt-2 justify-content-end"
          data-bs-toggle="modal"
          :data-bs-target="`#${itemData.id}-modal`"
        >View Fullscreen</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-card",
  props: ["itemData"],
  mounted() {
    if (
      this.$refs["carousel-item-0"] &&
      this.$refs["carousel-item-0"].length > 0
    ) {
      var carouselItem = this.$refs["carousel-item-0"][0];
      carouselItem.classList.add("active");
    }

    if (
      this.$refs["carousel-item-large-0"] &&
      this.$refs["carousel-item-large-0"].length > 0
    ) {
      var carouselItem = this.$refs["carousel-item-large-0"][0];
      carouselItem.classList.add("active");
    }
  }
};
</script>

<style>
.item-card {
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background-color: #242424;
}

.item-card h3 {
  font-weight: 600;
}

.item-card-badges {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.sidebar-section strong {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.sidebar-section a {
  display: block;
  text-indent: 5%;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.47);
  text-decoration: none;
}

.modal-large-preview {
  width: 80vw;
  max-width: none;
  height: 100%;
  margin: 0;
}

.sidebar-section a:hover {
  color: rgba(255, 255, 255, 0.87);
}

.badge-links {
  font-size: 45px;
}

.badge-links a {
  color: white !important;
  text-decoration: none !important;
}

.badge-links a:hover {
    color: rgba(255, 255, 255, 0.47) !important;
}
</style>