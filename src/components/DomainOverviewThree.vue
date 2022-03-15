<template>
  <AsCard>
    <AsCardSection first>
      <p class="as-text-24-bold">Overview Domain</p>
    </AsCardSection>
    <AsCardSection>
      <AsCardSubSection first>
        <div class="grid gap-3 gap-lg-4">
          <div class="g-col-12 g-col-lg-10">
            <div class="d-flex gap-2">
              <img alt="Domain lock" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647337238-pad-lock.svg">
              <p class="as-text-18-bold">Aktifkan Domain Lock?</p>
            </div>
            <p class="as-color-secondary-2 as-mt-16 as-text-12">Domain Lock adalah keamanan tambahan untuk mencegah domain Anda ditransfer ke layanan registrar atau layanan web hosting lainnya dengan cara mengunci name server domain Anda.</p>
          </div>
          <div class="g-col-12 g-col-lg-2 d-lg-flex justify-content-end">
            <AsSwitch id="lockDomain"/>
          </div>
        </div>
      </AsCardSubSection>
      <AsCardSubSection class="as-mt-32 as-pt-32">
        <div class="grid gap-3 gap-lg-4">
          <div class="g-col-12 g-col-lg-9">
            <div class="d-flex gap-2">
              <img alt="EPP Code" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647337292-focus.svg">
              <p class="as-text-18-bold">EPP Code</p>
            </div>
            <p class="as-color-secondary-2 as-mt-16 as-text-12">Child Nameserver adalah sebuah fasilitas dimana Anda bisa membuat name server dengan menggunakan subdomain Anda sendiri.</p>
          </div>
          <div class="g-col-12 g-col-lg-3">
            <AsButton fluid primary sm withIcon><i class="as-icon-plus"></i><span>Lihat EPP Code</span></AsButton>
          </div>
        </div>
      </AsCardSubSection>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
  import {
    AsButton,
    AsButtonIcon,
    AsButtonOutline,
    AsCard,
    AsCardSection,
    AsCardSubSection,
    AsSwitch,
  } from '@niagahoster/components'
</script>
