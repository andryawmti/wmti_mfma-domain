<template>
  <AsCard class="g-col-12 g-col-lg-4">
    <AsCardSection class="as-py-32" first>
      <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646707227-gradienticonserver.svg">
      <p class="as-mt-16 as-text-24-bold">Kelola Domain</p>
      <p class="as-mt-16  as-text-16-semibold">Pilih Domain</p>
      <AsSelect class="as-mt-8" :options="options"/>
      <AsButton class="as-mt-42" fluid primary sm>Kelola Domain</AsButton>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
  import {
    AsButton,
    AsCard,
    AsCardSection,
    AsSelect,
  } from '@niagahoster/components'
  
  const options = [
    {
      option: 'domain.com',
      value: '123',
    },
    {
      option: 'helloworld.com',
      value: '124',
    },
    {
      option: 'foobar.com',
      value: '125',
    },
  ]
</script>
