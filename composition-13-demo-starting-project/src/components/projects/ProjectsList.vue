<template>
  <button @click=test>test</button>
  <base-container v-if="user">
    <h2>{{ props.user.fullName }}: Projects</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm.value"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';

import { defineProps, ref, computed, watch, reactive} from 'vue';

const props = defineProps({ user: Object });
const user1 = reactive(props.user)
// const user = ref(props.user)
const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

const hasProjects = computed(function () {
  return props.user.projects && availableProjects.value.length > 0;
});

const availableProjects = computed(function () {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});

function test(){
  console.log(typeof props);
  console.log(typeof props.user);
  console.log(props.user.projects);
  console.log(typeof user1 );
}

function updateSearch(val) {
  enteredSearchTerm.value = val;
}

watch([enteredSearchTerm], function (newValue) {
  console.log(newValue[0]);
  setTimeout(() => {
    if (newValue[0] === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue[0];
    }
  }, 300);
  // enteredSearchTerm.value = '';
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
