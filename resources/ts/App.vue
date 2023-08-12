<script setup lang="ts">
import { useDark, useStorage } from '@vueuse/core'
import { RouterView } from 'vue-router/auto'
import { useTheme } from 'vuetify'

const theme = useTheme()
const dark = useDark({
  onChanged: dark => {
    theme.global.name.value = dark ? 'dark' : 'light'
  }
})

const isShowingAppDrawer = useStorage(import.meta.env.VITE_APP_NAME + '-isShowingAppBar', true)
</script>

<template>
  <VLayout>
    <VNavigationDrawer v-model="isShowingAppDrawer">
      <VList>
        <VListItem to="/" title="Home" prepend-icon="mdi-home" />
        <VListItem to="/login" title="Log in" prepend-icon="mdi-login" />
        <VListItem to="/register" title="Register" prepend-icon="mdi-account-plus" />
      </VList>
    </VNavigationDrawer>
    
    <VAppBar :elevation="0">
      <template #prepend>
        <VAppBarNavIcon @click="isShowingAppDrawer = !isShowingAppDrawer" />
      </template>
      <VToolbarTitle>Orion, Pinia ORM, Vuetify</VToolbarTitle>
    </VAppBar>

    <VMain>
      <RouterView />
    </VMain>
  </VLayout>
</template>
