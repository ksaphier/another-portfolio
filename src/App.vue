<script setup>
import ContactButtons from "./components/ContactButtons.vue";
import Menubar from "./components/Menubar.vue";
import ProfessionalExperience from "./components/ProfessionalExperience.vue";
import Profile from "./components/Profile.vue";
</script>

<template>
  <div>
    <Menubar />
    <Profile id="profile" class="mx-3 pt-3" />
    <ContactButtons class="my-3" />
    <ProfessionalExperience id="experience" />
  </div>
</template>

<style scoped></style>
