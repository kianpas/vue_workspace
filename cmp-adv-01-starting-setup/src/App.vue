<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <!-- 아래와 같은 slot 방식 가능 단순 슬롯일 경우 -->
    <!-- <course-goals #default="slotProps">
      <h2>
        {{ slotProps.item }}
      </h2>
      <p>{{ slotProps.anotherProp }}</p>
    </course-goals> -->
    <active-goals></active-goals>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  selectedComponent: "active-goals",
  components: {
    "the-header": TheHeader,
    // "user-info": UserInfo,
    // "badge-list": BadgeList,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
      console.log(this.selectedComponent);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
