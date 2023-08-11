<script setup lang="ts">
import { RouterView } from 'vue-router/auto'
</script>

<template>
  <VLayout>
    <VAppBar>
      <VToolbarTitle title="Orion, Pinia ORM, Vuetify" />
    </VAppBar>

    <VNavigationDrawer>
      <VList>
        <VListItem to="/" title="Home" />
        <VListItem to="/login" title="Log in" />
        <VListItem to="/register" title="Register" />
      </VList>
    </VNavigationDrawer>

    <VMain>
      <RouterView />
    </VMain>
  </VLayout>
</template>
