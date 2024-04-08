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
  // GoogleAuthProvider
} from 'firebase/auth'
import {
  useCurrentUser,
  useFirebaseAuth
} from 'vuefire'
// export const googleAuthProvider = new GoogleAuthProvider()
export const bceidAuthProvider = new OAuthProvider('oidc.keycloak-bceid')
export const bcscAuthProvider = new OAuthProvider('oidc.keycloak-bcsc')
export const idirAuthProvider = new OAuthProvider('oidc.keycloak-idir')
</script>

<script setup lang="ts">
const auth = useFirebaseAuth()! // only exists on client side

useHead({
  title: 'Service BC - Sign in'
})
const user = useCurrentUser()

function signInBCSC () {
  setPersistence(auth, browserSessionPersistence).then(() => {
    const provider = new OAuthProvider('oidc.keycloak-bcsc')
    return signInWithPopup(auth, provider)
  })
}
</script>
<template>
  <div>
    <UButton label="bceid" @click="signInWithPopup(auth, bceidAuthProvider)" />
    <UButton label="bcsc" @click="signInWithPopup(auth, bcscAuthProvider)" />
    <!-- <UButton label="bcsc" @click="signInBCSC" /> -->
    <UButton label="idir" @click="signInWithPopup(auth, idirAuthProvider)" />
    <UButton label="sign out" @click="signOut(auth)" />
  </div>
</template>
