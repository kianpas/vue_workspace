<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: { LearningResource },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official vue.js doc',
          link: 'https://vuejs.org',
        },

        {
          id: 'google',
          title: 'Google',
          description: 'Learn the google',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>
