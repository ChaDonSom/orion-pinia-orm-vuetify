<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { RouterView } from 'vue-router/auto'
import { useTheme } from 'vuetify'

const dark = useDark({
  onChanged: dark => {
    const theme = useTheme()
    theme.global.name.value = dark ? 'dark' : 'light'
  }
})
</script>

<template>
  <VLayout>
    <VNavigationDrawer>
      <VList>
        <VListItem to="/" title="Home" />
        <VListItem to="/login" title="Log in" />
        <VListItem to="/register" title="Register" />
      </VList>
    </VNavigationDrawer>
    
    <VAppBar :elevation="0">
      <template #prepend>
        <VAppBarNavIcon class="text-black" />
      </template>
      <VToolbarTitle>Orion, Pinia ORM, Vuetify</VToolbarTitle>
    </VAppBar>

    <VMain>
      <RouterView />
    </VMain>
  </VLayout>
</template>
