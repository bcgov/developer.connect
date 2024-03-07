<template>
  <div
    class="flex min-h-screen flex-col bg-bcGovColor-gray1 dark:bg-bcGovGray-900"
  >
    <SbcHeaderMain />
    <main class="flex grow items-center justify-center">
      <slot />
    </main>
    <SbcFooter />
  </div>
</template>
