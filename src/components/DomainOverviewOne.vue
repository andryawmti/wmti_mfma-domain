<template>
  <div>
    <AsCard>
      <AsCardSection first>
        <p class="as-text-24-bold">Overview Domain</p>
      </AsCardSection>
      <AsCardSection>
        <div class="grid gap-3">
          <div class="g-col-12 g-col-lg-6">
            <p class="as-color-secondary-2 as-text-12">Status Domain</p>
            <p class="align-items-center as-mt-8 as-text-12 d-flex gap-2"><i class="as-color-green as-icon-yes"></i> Aktif</p>
          </div>
          <div class="g-col-12 g-col-lg-6">
            <p class="as-color-secondary-2 as-text-12">Status Verifikasi Email</p>
            <p class="align-items-center as-mt-8 as-text-12 d-flex gap-2"><i class="as-color-green as-icon-yes"></i> Terverifikasi</p>
          </div>
          <div class="g-col-12 g-col-lg-6">
            <p class="as-color-secondary-2 as-text-12">Tanggal registrasi domain</p>
            <p class="as-mt-8 as-text-16-semibold">29 Februari 2020</p>
          </div>
          <div class="g-col-12 g-col-lg-6">
            <p class="as-color-secondary-2 as-text-12">Tanggal kedaluwarsa domain</p>
            <p class="as-mt-8 as-text-16-semibold">29 Februari 2023</p>
          </div>
        </div>
      </AsCardSection>
      <AsCardSection>
        <div class="d-flex gap-2">
          <img alt="Nameservers" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647328092-domain.svg">
          <p class="as-text-18-bold">Nameservers</p>
        </div>
        <p class="as-color-secondary-2 as-mt-16 as-text-12">Nameserver adalah nama web server yang digunakan untuk mengarahkan domain ke server tertentu</p>
        <AsCard bordered class="as-mt-32 as-border-radius-10">
          <AsCardSection class="as-p-20" first>
            <div class="grid gap-3">
              <div class="g-col-12 g-col-lg-8">
                <p class="as-text-14-semibold">ns1.niagahoster.co.id</p>
                <p class="as-mt-8 as-text-14-semibold">ns2.niagahoster.co.id</p>
              </div>
              <div class="g-col-12 g-col-lg-4">
                <AsButtonOutline anchor fluid href="#modalUpdateNs" shade sm>Ubah Nameserver</AsButtonOutline>
              </div>
            </div>
          </AsCardSection>
        </AsCard>
        <AsCard class="as-mt-32 as-border-radius-10" soft>
          <AsCardSection class="align-items-start as-px-20 as-py-16 d-flex gap-3" first>
            <img alt="Connected" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647338138-approve.svg">
            <div>
              <p class="as-text-16-semibold">Website Anda telah tersambung</p>
              <p class="as-color-secondary-2 as-mt-8 as-text-12">Domain syaiffolio.com telah tersambung pada layanan hosting</p>
            </div>
          </AsCardSection>
        </AsCard>
      </AsCardSection>
    </AsCard>
    
    <AsModal id="modalUpdateNs">
      <AsModalHeader withCloseButton/>
      <AsModalSection>
        <p class="as-text-24-bold">Update Nameserver</p>
        <p class="as-color-secondary as-mt-20 as-text-16">Anda dapat mengarahkan domain ini ke layanan lain dengan mengupdate nameserver layanan hosting tersebut. Berikut adalah <a class="as-color-blue" href="https://www.niagahoster.co.id/kb/bagaimana-mengupdate-nameserver" target="_blank">panduan cara melihat nameserver niagahoster</a>.</p>
      </AsModalSection>
      <AsModalSection class="as-border-top">
        <div>
          <label class="as-text-16-semibold" for="ns1">Nameserver 1</label>
          <AsInput class="as-mt-8" id="ns1" placeholder="ns1.niagahoster.co.id"/>
        </div>
        <div class="as-mt-24">
          <label class="as-text-16-semibold" for="ns2">Nameserver 2</label>
          <AsInput class="as-mt-8" id="ns2" placeholder="ns2.niagahoster.co.id"/>
        </div>
        <div class="as-mt-24">
          <label class="as-text-16-semibold" for="ns3">Nameserver 3</label>
          <AsInput class="as-mt-8" id="ns3" placeholder="Tidak wajib diisi"/>
        </div>
        <div class="as-mt-24">
          <label class="as-text-16-semibold" id="ns4" for="ns4">Nameserver 4</label>
          <AsInput class="as-mt-8" placeholder="Tidak wajib diisi"/>
        </div>
      </AsModalSection>
      <AsModalFooter class="as-border-top as-text-end">
        <AsButton primary>Simpan</AsButton>
      </AsModalFooter>
    </AsModal>
  </div>
</template>

<script setup>
  import {
    AsButton,
    AsButtonOutline,
    AsCard,
    AsCardSection,
    AsInput,
    AsModal,
    AsModalFooter,
    AsModalHeader,
    AsModalSection,
  } from '@niagahoster/components'
</script>
