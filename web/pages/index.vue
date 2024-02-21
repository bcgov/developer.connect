<template>
  <div class="text-center flex justify-center items-center flex-col">
    <h1 class="font-semibold text-4xl mb-8 text-gray9">
      BC Registries API Gateway
    </h1>
    <p class="text-lg text-gray7">
      Welcome to the BC Registries API Gateway! Access API information for all
      BC Registries services here.
    </p>
    <div class="flex flex-col sm:flex-row gap-8 mt-14 justify-center w-full">
      <div
        class="flex flex-col items-center p-9 justify-between text-center sm:w-[27rem] sm:h-[18.6rem] bg-white border rounded-md shadow-md scale-90 sm:scale-100"
      >
        <UIcon
          name="i-mdi-cursor-default-click-outline"
          class="card-icon"
        />
        <div class="h-1/2 mb-6">
          <h2 class="pt-8 font-semibold text-2xl text-gray9">Get Started</h2>
          <p class="text-gray7">
            How to start using BC Registries APIs in your applications.
          </p>
        </div>

        <NuxtLink
          to="/get-started"
          class="text-BCgovLink underline"
        >
          Learn More
        </NuxtLink>
      </div>
      <div
        class="flex flex-col items-center p-9 justify-between text-center sm:w-[27rem] sm:h-[18.6rem] bg-white border rounded-md shadow-md scale-90 sm:scale-100"
      >
        <UIcon
          :name="`i-mdi-table-search`"
          class="card-icon"
        />
        <div class="h-1/2 mb-6">
          <h2 class="pt-8 font-semibold text-2xl text-gray9">
            Explore the APIs
          </h2>
          <p class="text-gray7">Learn about and try BC Registry APIs.</p>
        </div>

        <NuxtLink
          to="/apis-summary"
          class="text-BCgovLink underline"
        >
          Learn More
        </NuxtLink>
      </div>
      <!-- not using card component because UIcon doesnt render correctly with name prop -->
      <!-- <CardBase
        icon="cursor-default-click-outline"
        label="Get Started"
        detail="How to start using BC Registries APIs in your applications."
        path="/get-started"
        path-label="Learn More"
      /> -->
      <!-- <CardBase
        icon="table-search"
        label="Explore the APIs"
        detail="Learn about and try BC Registry APIs."
        path="/apis-summary"
        path-label="Learn More"
      /> -->
    </div>
  </div>
</template>
<style scoped>
  /* cant get this to work correctly using tailwind styles */
  .card-icon {
    font-size: 4rem;
    background: -webkit-linear-gradient(#b9d6f6, #1867c0);
    /* -webkit-background-clip: text; */
    /* background-clip: text; */
    -webkit-text-fill-color: transparent;
  }
</style>
