<template>
  <div>
    <AsCard>
      <AsCardSection first>
        <p class="as-text-24-bold">Overview Domain</p>
      </AsCardSection>
      <AsCardSection>
        <AsCardSubSection first>
          <div class="grid gap-3 gap-lg-4">
            <div class="g-col-12 g-col-lg-8">
              <div class="d-flex gap-2">
                <img alt="Domain Forwarding" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647329629-domainforwarding.svg">
                <p class="as-text-18-bold">Domain Forwarding</p>
              </div>
              <p class="as-color-secondary-2 as-mt-16 as-text-12">Domain Forwarding berfungsi untuk meneruskan atau mengarahkan sebuah domain ke domain tertentu lainnya.</p>
            </div>
            <div class="g-col-12 g-col-lg-4">
              <AsButton anchor fluid href="#modalForwarding" primary sm withIcon><i class="as-icon-plus"></i><span>Buat Forwarding</span></AsButton>
            </div>
          </div>
          <div class="as-border-radius-8 as-mt-32 as-p-16 d-flex gap-4" style="background: rgba(255, 237, 184, 0.35);">
            <img alt="Information" class="align-self-start" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647318878-icon.svg">
            <p class="as-color-secondary as-text-12">Untuk menggunakan fitur ini, ubah nameserver Anda terlebih dahulu ke ns3.niagahoster.co.id dan ns4.niagahoster.co.id. <a class="as-color-blue" href="#modalUpdateNs">Klik disini untuk ubah</a></p>
          </div>
        </AsCardSubSection>
        <AsCardSubSection class="as-mt-32 as-pt-32">
          <div class="grid gap-3 gap-lg-4">
            <div class="g-col-12 g-col-lg-8">
              <div class="d-flex gap-2">
                <img alt="DNS Management" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647330751-internet.svg">
                <p class="as-text-18-bold">DNS Management</p>
              </div>
              <p class="as-color-secondary-2 as-mt-16 as-text-12">DNS Management merupakan sebuah fitur khusus yang memudahkan pengguna dalam mengatur dan mengelola DNS record yang dibutuhkan. Dengan menggunakan DNS record tersebut, pengguna dapat mengarahkan DNS server dari domain secara langsung.</p>
            </div>
            <div class="g-col-12 g-col-lg-4">
              <AsButton anchor @click="$router.push('/dns-management')" fluid primary sm withIcon><i class="as-icon-setting"></i><span>Manage DNS Record</span></AsButton>
            </div>
          </div>
          <div class="as-border-radius-8 as-mt-32" style="border: 2px solid #f3f4f6;">
            <div class="as-p-16" style="background: #f3f4f6;">
              <div class="grid gap-3">
                <p class="as-text-16 g-col-12 g-col-lg-6">DNS Record yang baru saja ditambahkan</p>
                <div class="g-col-12 g-col-lg-6 d-flex justify-content-lg-end">
                  <a href="#" class="as-color-blue as-text-14-bold d-inline-flex gap-3">Lihat Semua DNS <i class="as-icon-arrow-right-double as-text-12"></i></a>
                </div>
              </div>
            </div>
            <div class="align-items-center as-px-16 as-py-24 d-flex justify-content-between">
              <div>
                <p class="as-text-14-semibold">ns3.niagahoster.co.id</p>
                <div class="align-items-center as-mt-12 d-flex gap-3">
                  <p class="as-color-secondary-2 as-text-12 d-flex gap-2">Tipe <span class="as-color-primary">NS Record</span></p>
                  <i class="as-color-secondary-2 as-icon-star"></i>
                  <p class="as-color-secondary-2 as-text-12 d-flex gap-2">TTL <span class="as-color-primary">86400</span></p>
                </div>
              </div>
              <AsButtonIcon class="as-border-radius-8 as-p-8" shade sm style="height: 32px;"><i class="as-icon-dot"></i></AsButtonIcon>
            </div>
          </div>
        </AsCardSubSection>
        <AsCardSubSection class="as-mt-32 as-pt-32">
          <div class="grid gap-3 gap-lg-4">
            <div class="g-col-12 g-col-lg-8">
              <div class="d-flex gap-2">
                <img alt="Child Nameserver" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647336940-childnameserver.svg">
                <p class="as-text-18-bold">Child Nameserver</p>
              </div>
              <p class="as-color-secondary-2 as-mt-16 as-text-12">Child Nameserver adalah sebuah fasilitas dimana Anda bisa membuat name server dengan menggunakan subdomain Anda sendiri.</p>
            </div>
            <div class="g-col-12 g-col-lg-4">
              <AsButton fluid primary sm withIcon><i class="as-icon-plus"></i><span>Buat Child Nameserver</span></AsButton>
            </div>
          </div>
        </AsCardSubSection>
      </AsCardSection>
    </AsCard>
    
    <AsModal id="modalForwarding" sm>
      <AsModalHeader withCloseButton/>
      <AsModalSection>
        <p class="as-text-24-bold">Domain Forwarding</p>
        <div class="as-border-radius-8 as-mt-32 as-p-16 d-flex gap-4" style="background: rgba(255, 237, 184, 0.35);">
          <img alt="Information" class="align-self-start" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/event/images/nh-event-event-1647318878-icon.svg">
          <p class="as-color-secondary as-text-12">Untuk menggunakan fitur ini, ubah nameserver Anda terlebih dahulu ke ns3.niagahoster.co.id dan ns4.niagahoster.co.id. <a class="as-color-blue" href="#modalUpdateNs">Klik disini untuk ubah</a></p>
        </div>
      </AsModalSection>
      <AsModalSection class="as-border-top">
        <p class="as-color-secondary as-text-16">Domain forwarding akan secara otomatis menambahkan A record 193.168.194.240 di DNS Management. Mohon memastikan record tersebut telah ditambahkan di DNS management dan jika gagal, mohon menambahkannya secara manual. Lihat <a class="as-color-blue" href="https://www.niagahoster.co.id/kb/cara-menambahkan-a-record-domain-forwarding" target="_blank">cara menambahkan A record domain forwarding.</a></p>
        <div class="as-mt-24">
          <label class="as-text-16-semibold" for="subdomain">Subdomain</label>
          <AsInputGroup class="as-mt-8">
            <AsInput id="subdomain"/>
            <AsInputGroupText>.syaiffolio.com</AsInputGroupText>
          </AsInputGroup>
        </div>
        <div class="as-mt-24">
          <label class="as-text-16-semibold" for="destination">URL Tujuan</label>
          <AsInput class="as-mt-8" id="destination" placeholder="Contoh: htpps://sampel.com"/>
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
  } from '@niagahoster/components'
</script>
