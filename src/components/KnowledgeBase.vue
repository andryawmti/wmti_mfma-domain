<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32" first>
      <h2 class="as-text-24-bold">Kesulitan memanage VPS? Baca artikel Knowledge Base VPS berikut</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class="d-flex flex-column gap-4">
        <div class="d-flex gap-3" v-for="article, x in articles" :key="x">
          <img alt="KB Thumbnail" :src="article.thumbnail">
          <div>
            <p class="as-text-bold">{{ article.title }}</p>
            <p class="align-items-center as-color-secondary-2 as-mt-20 as-text-12-semibold d-flex gap-1">
              <i class="as-icon-info as-text-16"></i> Waktu baca: {{ article.readTime }}
            </p>
          </div>
        </div>
      </div>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
  import {
    AsButtonOutline,
    AsCard,
    AsCardSection,
    AsSwitch,
  } from '@niagahoster/components'
  
  const articles = [
    {
      readTime: '2 menit',
      thumbnail: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647353377-thumbnail.png',
      title: 'Cara Masuk ke Panel VPS di Member...',
    },
    {
      readTime: '2 menit',
      thumbnail: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647353377-thumbnail.png',
      title: 'Cara Mengubah Sistem Operasi VPS...',
    },
    {
      readTime: '2 menit',
      thumbnail: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647353377-thumbnail.png',
      title: 'Apa itu Cloud VPS Hosting?',
    },
    {
      readTime: '2 menit',
      thumbnail: 'https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647353377-thumbnail.png',
      title: 'Cara Mengubah Sistem Operasi VPS...',
    },
  ]
</script>
