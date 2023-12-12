<template>
  <main class="mx-auto items-center justify-center flex prose prose-BCGovGray">
    <ContentDoc class="sm:min-w-[60rem] w-screen py-12 px-4">
      <template #not-found>
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-gray9">Page Not Found</h1>
          <p class="text-lg text-gray7">
            The page you're looking for could not be found or does not exist.
          </p>
          <NuxtLink
            to="/"
            class="bg-BCgovBlue5 text-white font-semibold no-underline p-4 rounded text-lg"
          >
            Go Home
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
