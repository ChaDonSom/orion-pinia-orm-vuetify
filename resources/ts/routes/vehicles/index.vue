<template>
  <div class="py-3 px-6">
    Vehicles
    <pre v-if="error">{{ error }}</pre>
    <VDataTable
      :items="v"
      :headers="[
        { title: 'Name', key: 'name' },
        { title: 'Year', key: 'year' },
        { title: 'Make', key: 'make' },
        { title: 'Model', key: 'model' }
      ]"
    >

    </VDataTable>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { Vehicle as OrionVehicle } from '../../orion/Vehicle'
import { ref } from 'vue'
import { useRepo } from 'pinia-orm'
import { Repository } from '../../pinia'
import Vehicle from '../../pinia/Vehicle'
import { VDataTable } from 'vuetify/lib/labs/components.mjs'

const error = ref<string | null>(null)
const v = computed(() => {
  return useRepo(Vehicle).all()
})
onMounted(async () => {
  let response = await getPage(1)
  if (response) {
    let lastPage = response.data?.meta?.last_page ?? 0
    let currentPage = response.data?.meta?.current_page ?? 0
    for (let i = currentPage + 1; i <= lastPage; i++) await getPage(i)
  }
})
const getPage = async (page: number) => {
  let vehicles: OrionVehicle[]
  try {
    vehicles = await OrionVehicle.$query().get(15, page)
  } catch (e) {
    error.value = e.message
  }

  useRepo(Repository).saveFromOrion(vehicles, Vehicle)

  return vehicles[0]?.$response
}
</script>