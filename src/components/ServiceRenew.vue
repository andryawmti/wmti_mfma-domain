<template>
  <AsCard class="g-col-12 g-col-lg-4">
    <AsCardSection class="as-py-32" first>
      <img src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1646707221-gradienticoncheck.svg">
      <p class="as-color-secondary as-mt-16 as-text-16-semibold">Masa aktif layanan</p>
      <p class="as-mt-4 as-text-24-bold">8 bulan 13 hari</p>
      <p class="as-color-secondary-2 as-mt-4 as-text-14">Layanan Anda aktif hingga 23 Februari 2023</p>
      <AsButton anchor class="as-mt-84" fluid href="#modalRenew" primary sm withIcon><span>Perpanjang Layanan</span> <i class="as-icon-arrow-right-double as-text-12"></i></AsButton>
    </AsCardSection>
  </AsCard>
  <AsModal id="modalRenew">
    <AsModalHeader withCloseButton></AsModalHeader>
    <AsModalSection class="as-pb-32">
      <p class="as-text-24-bold">Perpanjangan Layanan</p>
    </AsModalSection>
    <AsModalSection class="as-border-top as-p-32">
      <AsCard gray>
        <AsCardSection class="as-p-20" first>
          <p class="as-text-16-bold">syaiffolio.com</p>
          <div class="d-flex justify-content-between">
            <p class="as-color-secondary-2 as-text-12">Paket Personal Unlimited Hosting</p>
            <p class="as-color-blue as-text-14-semibold">Aktif hingga 15 Mei 2022 (sisa 19 hari)</p>
          </div>
        </AsCardSection>
      </AsCard>
      <div class="as-mt-32 grid">
        <div class="d-flex flex-column gap-4 g-col-12 g-col-lg-6">
          <p class="as-color-secondary-2 as-text-16">Order ID</p>
          <p class="as-color-secondary-2 as-text-16">Siklus pembayaran</p>
          <p class="as-color-secondary-2 as-text-16">Jumlah pembayaran</p>
        </div>
        <div class="d-flex flex-column gap-4 g-col-12 g-col-lg-6">
          <p class="as-text-16-bold">#1134895</p>
          <p class="as-text-16-bold">Setiap Tahun</p>
          <p class="as-text-16-bold">Rp 1.287.000,00</p>
        </div>
      </div>
    </AsModalSection>
    <AsModalFooter class="as-border-top as-p-32 d-flex justify-content-end">
      <AsButton primary>Perpanjang Sekarang</AsButton>
    </AsModalFooter>
  </AsModal>
</template>

<script setup>
  import {
    AsButton,
    AsCard,
    AsCardSection,
    AsModal,
    AsModalFooter,
    AsModalHeader,
    AsModalSection,
  } from '@niagahoster/components'
</script>
