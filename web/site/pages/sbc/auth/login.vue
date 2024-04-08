<script lang="ts">
// only load these once
import {
  getRedirectResult,
  OAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  setPersistence,
  signOut,
  browserSessionPersistence
} from 'firebase/auth'
import {
  useCurrentUser,
  useFirebaseAuth
} from 'vuefire'

export const bceidAuthProvider = new OAuthProvider('oidc.keycloak-bceid')
export const bcscAuthProvider = new OAuthProvider('oidc.keycloak-bcsc')
export const idirAuthProvider = new OAuthProvider('oidc.keycloak-idir')
</script>

<script setup lang="ts">
const auth = useFirebaseAuth()! // only exists on client side
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const error = ref<Error | null>(null)

useHead({
  title: 'Service BC - Sign in'
})
const user = useCurrentUser()

onMounted(() => {
  getRedirectResult(auth).catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  })
})

function signIn (provider: OAuthProvider) {
  if (isLargeScreen.value) {
    signInWithPopup(auth, provider).catch((reason) => {
      error.value = reason
    })
  } else {
    signInWithRedirect(auth, provider).catch((reason) => {
      error.value = reason
    })
  }
}

// const token = ref()
// async function getToken () {
//   token.value = await auth.currentUser?.getIdToken()
// }
</script>
<template>
  <div class="p-4">
    <UCard class="max-w-md">
      <h1 class="text-2xl font-semibold text-bcGovColor-darkGray dark:text-white">
        Sign in
      </h1>
      <p class="text-bcGovColor-midGray dark:text-gray-300">
        Sign in to your Service BC account
      </p>
      <img src="/img/BCReg_Generic_Login_image.jpg" class="my-4" alt="Generic login image">
      <div class="space-y-4">
        <UButton label="Sign in with BC Services Card" block icon="i-mdi-card-account-details-outline" @click="signIn(bcscAuthProvider)" />
        <UButton label="Sign in with BCeID" block icon="i-mdi-two-factor-authentication" color="gray" @click="signIn(bceidAuthProvider)" />
        <UButton label="Sign in with IDIR" block icon="i-mdi-account-group-outline" color="gray" @click="signIn(idirAuthProvider)" />
        <UDivider label="OR" />
        <UButton label="Create an Account" block color="gray" />
      </div>
    </UCard>
  </div>
</template>
