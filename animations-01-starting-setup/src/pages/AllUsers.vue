<template>
  <div class="container">
    <h2>All Users</h2>
    <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!--  enter-to-class="".. 등으로 지정 가능-->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <!-- transition 아래에 하나의 자식요소만 가능. 예외로 하나 이상인 경우는 나중에 -->
      <p v-if="paraIsVisible">This is only sometime</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <!-- 예외 경우, 조건에 따라 교체되는 경우 -->
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!userAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
    <router-link to="/goals">Course Goals</router-link>
  </div>
</template>

 