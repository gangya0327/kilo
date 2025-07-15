<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>


    <div class="main-container">

      <div class="header">
        <div class="navbar">导航条-1</div>
        <div class="tags-view">导航条-2</div>
      </div>

      <div class="app-main">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  --at-apply: flex w-full h-full;

  .sidebar-container {
    --at-apply: w-[var(--sidebar-width)] bg-red;
  }

  .main-container {
    --at-apply: flex flex-col flex-1;

    .header {
      --at-apply: h-84px;

      .navbar {
        --at-apply: h-[var(--navbar-height)] bg-yellow;
      }

      .tags-view {
        --at-apply: h-[var(--tags-View-height)] bg-blue;
      }
    }

    .app-main {
      // --at-apply: bg-cyan;
      min-height: calc(100vh - var(--navbar-height) - var(--tags-View-height));
    }
  }
}
</style>