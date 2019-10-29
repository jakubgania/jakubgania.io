<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <v-col lg="12">
      <div class="email">
        <a :href="`mailto:${email}`" class="email-link">
          {{ email }}
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../components/subpage-title-section'
import SubpageDescriptionSection from '../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ kontakt }',
      description: 'E-mail do kontaktu.',
      email: 'contact@jakubgania.io'
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Kontakt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kontakt'
        },
        {
          name: 'keywords',
          content: 'Kontakt'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.email {
  padding-top: 80px;
  text-align: center;
  color: black;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 300;
}
.email-link {
  text-decoration: none;
  color: black;
}
.email-link:hover {
  color: #999999;
}
</style>
