<script setup lang="ts">
const accountForm = reactive({ name: 'Benjamin', username: 'benjamincanac' })
</script>
<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-4">
        <UAvatar
          size="3xl"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <div class="flex flex-col">
          <span class="text-lg font-semibold text-bcGovColor-darkGray dark:text-white">John Doe</span>
          <span class="text-bcGovColor-midGray dark:text-[#d1d5db]">jdoe@example.com</span>
        </div>
      </div>
    </template>

    <UFormGroup label="Name" name="name" class="mb-3">
      <UInput v-model="accountForm.name" />
    </UFormGroup>
    <UFormGroup label="Username" name="username">
      <UInput v-model="accountForm.username" />
    </UFormGroup>

    <template #footer>
      <UButton type="submit" color="black">
        Save account
      </UButton>
    </template>
  </UCard>
</template>
