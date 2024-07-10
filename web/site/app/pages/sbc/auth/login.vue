<script lang="ts">
// only load these once
// import {
//   OAuthProvider,
//   signInWithPopup
// setPersistence,
// signOut,
// browserSessionPersistence,
// getAuth
// } from 'firebase/auth'

// export const bceidAuthProvider = new OAuthProvider('oidc.keycloak-bceid')
// export const bcscAuthProvider = new OAuthProvider('oidc.keycloak-bcsc')
// export const idirAuthProvider = new OAuthProvider('oidc.keycloak-idir')
</script>

<script setup lang="ts">
// const auth = useFirebaseAuth()! // only exists on client side
const error = ref<Error | null>(null)

useHead({
  title: 'Service BC - Log in'
})
// const user = useCurrentUser()

// function signIn (provider: OAuthProvider) {
//   error.value = null
//   signInWithPopup(auth, provider).catch((reason) => {
//     error.value = reason
//   })
// }

// const token = ref()
// async function getToken () {
//   token.value = await auth.currentUser?.getIdToken()
// }
watchEffect(() => console.log('error: ', error.value))
// watchEffect(() => console.log('user: ', user.value))
</script>
<template>
  <div class="p-4">
    <UCard class="max-w-md">
      <h1 class="text-2xl font-semibold text-bcGovColor-darkGray dark:text-white">
        Log in
      </h1>
      <p class="text-bcGovColor-midGray dark:text-gray-300">
        Log in to your Service BC account
      </p>
      <img src="/img/BCReg_Generic_Login_image.jpg" class="my-4" alt="Generic login image">
      <div class="space-y-4">
        <!-- <UButton label="Log in with BC Services Card" block icon="i-mdi-card-account-details-outline" @click="signIn(bcscAuthProvider)" />
        <UButton label="Log in with BCeID" block icon="i-mdi-two-factor-authentication" color="gray" @click="signIn(bceidAuthProvider)" />
        <UButton label="Log in with IDIR" block icon="i-mdi-account-group-outline" color="gray" @click="signIn(idirAuthProvider)" />
        <UDivider label="OR" />
        <UButton label="Create an Account" block color="gray" /> -->
      </div>
    </UCard>
  </div>
</template>
