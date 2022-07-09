<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="viewProjects"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';
import UserItem from './UserItem.vue';

const props = defineProps({ users: Object });
console.log(props);

const users = ref(props.users);
const emit = defineEmits(['list-projects']);
const enteredSearchTerm = ref('default');
const activeSearchTerm = ref('');
const sorting = ref(null);

const availableUsers = computed(function () {
  let userArr = [];
  if (activeSearchTerm.value) {
    userArr = users.value.filter((usr) =>
      usr.fullName.includes(this.activeSearchTerm)
    );
  } else if (users.value) {
    userArr = users.value;
  }
  return userArr;
});

const displayedUsers = computed(function () {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

function updateSearch(val) {
  enteredSearchTerm.value = val;
  console.log(enteredSearchTerm.value);
}

function sort(mode) {
  sorting.value = mode;
}

function viewProjects($event) {
  emit('list-projects', $event);
}

watch(enteredSearchTerm, function (newValue) {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 300);
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
