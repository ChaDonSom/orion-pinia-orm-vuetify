<script setup lang="ts">
import { useDark, useStorage } from '@vueuse/core'
import { RouterView } from 'vue-router/auto'
import { useTheme } from 'vuetify'

const dark = useDark({
  onChanged: dark => {
    const theme = useTheme()
    theme.global.name.value = dark ? 'dark' : 'light'
  }
})

const isShowingAppDrawer = useStorage(import.meta.env.VITE_APP_NAME + '-isShowingAppBar', true)
</script>

<template>
  <VLayout></VLayout>
    <VNavigationDrawer v-model="isShowingAppDrawer">
      <VList>
        <VListItem to="/" title="Home" />
        <VListItem to="/login" title="Log in" />
        <VListItem to="/register" title="Register" />
      </VList>
    </VNavigationDrawer>
    
    <VAppBar :elevation="0">
      <template #prepend>
        <VAppBarNavIcon class="text-black" @click="isShowingAppDrawer = !isShowingAppDrawer" />
      </template>
      <VToolbarTitle>Orion, Pinia ORM, Vuetify</VToolbarTitle>
    </VAppBar>

    <VMain>
      <RouterView />
    </VMain>
  </VLayout>
</template>
