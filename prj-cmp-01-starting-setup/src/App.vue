<template>
  <ul></ul>
</template>

<script>
export default {
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
