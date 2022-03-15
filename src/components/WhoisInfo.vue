<template>
  <AsCard>
    <AsCardSection class="as-pb-16 as-pt-32" first>
      <h2 class="as-text-24-bold">Informasi WHOIS</h2>
    </AsCardSection>
    <AsCardSection class="as-pb-32 as-pt-16">
      <div class="align-items-center d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Nama Depan</p>
        <p class="as-text-14 as-text-end">John</p>
      </div>
      <div class="as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Nama Belakang</p>
        <p class="as-text-14 as-text-end">Doe</p>
      </div>
      <div class="as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Email</p>
        <p class="as-text-14 as-text-end">john.doe@mail.com</p>
      </div>
      <div class="as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Alamat</p>
        <p class="as-text-14 as-text-end">Kepuh Permai F-10, Waru Sidoarjo, 61256</p>
      </div>
      <div class="as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Perusahaan</p>
        <p class="as-text-14 as-text-end">Apple Inc.</p>
      </div>
      <div class="align-items-center as-mt-24 d-flex justify-content-between">
        <p class="as-color-secondary-2 as-text-14">Proteksi Privasi <i class="as-icon-ask-rounded"></i></p>
        <AsSwitch id="privacyProtection"/>
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
</script>
