<template>
  <div>
    <AsHeader class="as-pb-80 as-pt-48">
      <div class="align-items-center d-flex gap-3">
        <a href="#" class="as-text-32-bold">syaiffolio.com</a>
        <i class="as-icon-lock as-text-28"></i>
        <AsLabel green>Aktif</AsLabel>
      </div>
      <AsBreadcrumb>
        <AsBreadcrumbItem path="/service">Layanan Anda</AsBreadcrumbItem>
        <AsBreadcrumbItem path="/domain">Domain</AsBreadcrumbItem>
        <AsBreadcrumbItem active>syaiffolio.com</AsBreadcrumbItem>
      </AsBreadcrumb>
    </AsHeader>
    <AsLayout>
      <div class="container">
        <div class="grid">
          <ServiceSelect/>
          <ServiceRenew/>
          <ServiceUpgrade/>
        </div>
        <div class="as-mt-50 grid">
          <div class="g-col-12 g-col-lg-8">
            <DomainOverviewOne/>
            <DomainOverviewTwo class="as-mt-72"/>
            <DomainOverviewThree class="as-mt-48"/>
          </div>
          <div class="g-col-12 g-col-lg-4">
            <WhoisInfo/>
            <FeatureRequest class="as-mt-48"/>
            <KnowledgeBase class="as-mt-48"/>
          </div>
        </div>
      </div>
    </AsLayout>
  </div>
</template>

<script setup>
  import {
    AsBanner,
    AsBreadcrumb,
    AsBreadcrumbItem,
    AsButton,
    AsHeader,
    AsLabel,
    AsLayout,
  } from '@niagahoster/components'

  import DomainOverviewOne from '@/components/DomainOverviewOne.vue'
  import DomainOverviewTwo from '@/components/DomainOverviewTwo.vue'
  import DomainOverviewThree from '@/components/DomainOverviewThree.vue'
  import FeatureRequest from '@/components/FeatureRequest.vue'
  import KnowledgeBase from '@/components/KnowledgeBase.vue'
  import ServiceRenew from '@/components/ServiceRenew.vue'
  import ServiceSelect from '@/components/ServiceSelect.vue'
  import ServiceUpgrade from '@/components/ServiceUpgrade.vue'
  import WhoisInfo from '@/components/WhoisInfo.vue'
</script>
