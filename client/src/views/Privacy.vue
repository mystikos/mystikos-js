<template>
  <div id="privacy" class="lg:w-2/3 m-auto px-10">
    <h1 class="text-6xl uppercase text-dust-purple">privacy</h1>
    <h3 class="uppercase text-muted-purple text-sm">
      Mystikos protects and ensures user privacy
    </h3>
    <ul class="list-disc list-inside mt-8">
      <li>We preserve your privacy by not storing any data uploaded to this website</li>
      <li>We do not store your activity on this website</li>
      <li>
        We do not require any account creation or login to use the full features provided by this
        app
      </li>
    </ul>
    <h3 class="uppercase text-lg text-muted-purple mt-10">Privacy Disclaimer</h3>
    <p>
      This app is hosted on a 3rd party platform. We strive to protect your data through encrypted
      traffic and no storage of your data. Handling of your data happens in memory and all generated
      files are stored in a temporary directory, which is automatically deleted once file has been
      made available to download. However, please note that there are risks associated with using
      this app. Our app is only responsible for performing steganography and encryption. We do not
      attempt to the modify the data in anyway. This app should only be used between two trusted
      parties. Please do not attempt to decode files sent by an unknown party. We do not perform any
      malware scanning on the decoded/decrypted data.
    </p>
    <p>
      Please use images that are not found online or have not been uploaded online for encoding.
      This will prevent a malicious party from attempting to perform steganalysis (detection of
      steganography) on your images. Best practice for using this app is to never upload the base
      image (the carrier) used for hiding data. You can safely upload or share the image that has
      undergone steganography.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Privacy.vue',
};
</script>

<style scoped lang="scss">
// TODO: Use CSS variables for the repeated colors
// TODO: Remove duplicate CSS from Home.vue
.text-dust-purple {
   color: #A7ADC6;
 }

.text-muted-purple {
  color: #56667A;
}

.btn {
  @apply font-bold py-2 px-4 rounded-full;
}

.btn-dust-purple {
  background-color: #A7ADC6;
}

.btn-muted-purple {
  background-color: #56667A;
}

p {
  @apply pt-5;
}
</style>
