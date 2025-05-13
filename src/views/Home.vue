<script setup>
import { CSpinner } from '@coreui/vue';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import Tag from 'primevue/tag';
import { ref } from "vue";
import {CWidgetStatsB} from "@coreui/vue/dist/esm/components/widgets/index.js";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid/index.js";

const date = ref();
</script>

<template>
  <div class="home">
    <h1>Witamy w naszej wypożyczalni aut!</h1>
    <p>Znajdź idealny samochód na każdą okazję.</p>
    <h1 class="text-4xl text-pink-500 font-extrabold underline">Hello Tailwind 🎉</h1>
    <CSpinner color="primary"/>
    <CRow>
      <CCol :sm="6">
        <CWidgetStatsB
            class="mb-3"
            :progress="{ color: 'success', value: 75}"
        >
          <template #text>Widget helper text</template>
          <template #title>Widget title</template>
          <template #value>89.9%</template>
        </CWidgetStatsB>
      </CCol>
      <CCol :sm="6">
        <CWidgetStatsB
            class="mb-3"
            color="primary"
            inverse
            :progress="{ value: 75}"
            text="Widget helper text"
            title="Widget title"
            value="12.124"/>
      </CCol>
    </CRow>s
    <Button label="Button" />
    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
                     animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
    <Tag severity="success" value="Success"></Tag>
    <router-link to="/employee-panel" class="btn">Przejdź do panelu pracowników</router-link>
  </div>
</template>



<style scoped>
.home {
  text-align: center;
  margin: 2rem;
}
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>
