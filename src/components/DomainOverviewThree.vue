<template>
  <div>
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
              <a href="#modalDomainLock" ref="modalDomainLockTrigger"></a>
              <AsSwitch @check="checkHandler" checked id="lockDomain"/>
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
              <AsButton anchor fluid href="#modalEpp" primary sm withIcon><i class="as-icon-plus"></i><span>Lihat EPP Code</span></AsButton>
            </div>
          </div>
        </AsCardSubSection>
      </AsCardSection>
    </AsCard>
    
    <AsModal id="modalDomainLock" sm>
      <AsModalHeader withCloseButton/>
      <AsModalSection class="as-p-56 as-text-center">
        <img alt="Are you sure?" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647400669-upserror405.svg">
        <div class="as-mt-90 as-px-74">
          <p class="as-text-18-bold">Apakah Anda yakin ingin menon-aktifkan Transfer Lock?</p>
          <p class="as-color-secondary-2 as-mt-12 as-text-12">Dengan menon-aktifkan Transfer Lock, domain Anda dapat dipindahkan secara sepihak ke layanan lain tanpa sepengetahuan Anda. Akan tetapi jika memang Anda ingin melakukan Transfer Domain ke layanan lain, Anda memang perlu untuk menon-aktifkan Transfer Lock ini.</p>
        </div>
        <div class="as-mt-72 grid gap-3">
          <AsButtonOutline class="g-col-12 g-col-lg-6" primary sm>Tidak, batalkan</AsButtonOutline>
          <AsButton class="g-col-12 g-col-lg-6" primary sm>Ya, non-aktifkan</AsButton>
        </div>
      </AsModalSection>
    </AsModal>
    
    <AsModal id="modalEpp" sm>
      <AsModalHeader withCloseButton/>
      <AsModalSection>
        <p class="as-text-24-bold">EPP Code</p>
        <p class="as-mt-20 as-text-16-seoncary">Saat Anda ingin melakukan Transfer Domain, Anda akan diminta memasukkan EPP Code. Semua nama domain (kecuali .EU, .UK dan domain .ID) mempunyai kode EPP / Domain Secret / Transfer Secret. Kode ini dibutuhkan jika Anda ingin melakukan transfer domain ke layanan lainnya.</p>
      </AsModalSection>
      <AsModalSection class="as-border-top">
        <p class="as-text-16-semibold">Kode Transfer Domain Anda adalah</p>
        <AsCard class="as-mt-8" gray>
          <AsCardSection class="align-items-center as-p-16 d-lg-flex justify-content-between" first>
            <p class="as-color-disable as-text-16">)cx5uXqwwf</p>
            <AsButtonOutline shade withIcon>
              <i class="as-icon-copy"></i>
              <span>Salin Kode</span>
            </AsButtonOutline>
          </AsCardSection>
        </AsCard>
      </AsModalSection>
    </AsModal>
  </div>
</template>

<script setup>
  import {
    AsButton,
    AsButtonIcon,
    AsButtonOutline,
    AsCard,
    AsCardSection,
    AsCardSubSection,
    AsInput,
    AsInputGroup,
    AsInputGroupText,
    AsModal,
    AsModalFooter,
    AsModalHeader,
    AsModalSection,
    AsSwitch,
  } from '@niagahoster/components'
  
  import { ref, onMounted } from 'vue'
  
  const modalDomainLockTrigger = ref(null)
  
  const checkHandler = (checked) => {
    if (!checked) {
      modalDomainLockTrigger.value.click()
    }
  }
</script>
