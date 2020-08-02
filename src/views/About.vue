<template>
  <div class="about lg:w-2/3 m-auto px-10">
    <h1 class="text-6xl uppercase text-dust-purple">about mystikós</h1>
    <p>
      Mystikos was developed as a way to secure peer to peer data transfer over digital
      communication systems. Our tool uses a steganographic algorithm that hide little bits of your
      data into the pixels of your carrier image(s) and features an optional AES-256 encryption
      algorithm to secure your data.
    </p>
    <p>
      Conceal and encrypt a PDF, text file, picture, or secret message within carrier images using
      our encode page. Once encoding is complete, your downloadable carrier images will look
      identical to the original images and can be sent over chat or email without anyone knowing you
      are sending hidden data.
    </p>
    <p>
      Recipients can then extract and decrypt the hidden data from the carrier images using our
      decoding page. Once decoding is complete, the recipient can download the hidden data.
    </p>
    <p>
      Neither the hidden data nor carrier images are stored on our site. Any generated files are
      automatically deleted once they are created and sent back to you.
    </p>
    <div id="section">
      <hr class="mt-5"/>
      <div id="encoding_text" class="flex items-center pt-8">
        <router-link
          to="/encode"
          class="w-1/2 underline uppercase text-3xl text-dust-purple"
        >encode</router-link>
        <ol class="w-1/2 list-decimal">
          <li>Upload carrier image(s) for data to be hidden in</li>
          <li>
            Upload or type the data to hide into the carrier image(s) (supported file types: pdf,
            txt, png, jpg, and gif)
          </li>
          <li>
            Optionally encrypt your data with a passphrase for extra security
          </li>
          <li>
            Download and send your now encoded carrier images to your end recipients. Mix carrier
            images with regular images for optimum security
          </li>
        </ol>
      </div>
      <hr class="mt-5"/>
      <div id="decoding_text" class="flex items-center pt-8">
        <router-link
          to="/decode"
          class="w-1/2 underline uppercase text-3xl text-dust-purple"
        >decode</router-link>
        <ol class="w-1/2 list-decimal">
          <li>
            Upload the carrier image(s), you may upload non encoded images and mystikos will
            filter them out
          </li>
          <li>Enter in the passphrase if the sender encrypted their data</li>
          <li>Download the extracted data from the image(s)</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
