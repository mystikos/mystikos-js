<template>
  <div class="w-2/3 m-auto">
    <h1 class="text-6xl uppercase text-dust-purple">Decode</h1>
    <p>
      Extract concealed data from carrier image(s) using this page. You may upload non-carrier
      images and mystikos will filter them out for you.
    </p>
    <hr class="mt-8">
    <div id="step-1" class="mt-4">
      <h3 class="text-3xl text-gray-700">STEP 1</h3>
      <p>
        Upload carrier image(s)
      </p>
      <form action="/" class="dropzone w-5/6 m-auto mt-5" id="carrier-image">
        <div class="dz-message needsclick">
          Upload carrier image(s) for data to be hidden in
        </div>
      </form>
    </div>
    <hr class="mt-8"/>
    <div class="mt-4" id="step-2">
      <h3 class="text-3xl text-gray-700">
        STEP 2
        <span class="text-gray-600 text-sm align-top">(OPTIONAL)</span>
      </h3>
      <p>
        If the data was encrypted by the sender, please enter the passphrase below
      </p>
      <div class="mt-4">
        <label for="passphrase" class="hidden">Passphrase</label>
        <input
          id="passphrase"
          type="text"
          placeholder="Passphrase..."
          class="w-4/5 rounded text-center focus:outline-none focus:shadow hover:shadow py-1
                 simple-fade"
          v-model="passphrase"
        />
      </div>
    </div>
    <hr class="mt-8"/>
    <div class="mt-4" id="step-3">
      <h3 class="text-3xl text-gray-700">
        STEP 3
      </h3>
      <p>
        Finally, extract concealed message.
      </p>
      <button
        class="focus:outline-none py-2 px-4 rounded btn-dust-purple hover:shadow-lg simple-fade
               text-white mt-5"
      >
        EXTRACT
      </button>
    </div>
  </div>
</template>

<script>
import * as Dropzone from 'dropzone';

const crypto = require('crypto');

export default {
  name: 'Decode.vue',
  data() {
    return {
      passphrase: '',
    };
  },
  methods: {
    decrypt(encryptedData, iv) {
      const password = this.passphrase ? this.passphrase : '40176A2084CD236E206524B0E32B1270CA6403CF574DDCF65F18EDF8F40C74A0';
      const key = crypto.createHash('sha256').update(String(password)).digest('base64').substr(0, 32);

      const encryptedText = Buffer.from(encryptedData, 'hex');

      // Creating Decipher
      const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

      // Updating encrypted text
      let decrypted = decipher.update(encryptedText);
      decrypted = Buffer.concat([decrypted, decipher.final()]);

      // returns data after decryption
      return decrypted.toString();
    },
  },
  mounted() {
    Dropzone.options.carrierImage = {
      // upload multiple files
      uploadMultiple: true,
      // 1 mb is here the max file upload size constraint
      maxFilesize: 1,
      acceptedFiles: '.jpeg,.jpg,.png,.gif',
      autoProcessQueue: false,

      init() {
        // const myDropzone = this;

        // document.getElementById('btn_upload').addEventListener('click', () => {
        //   myDropzone.processQueue(); // Tell Dropzone to process all queued files.
        // });
        //
        // // Event to send your custom data to your server
        // myDropzone.on('sending', (file, xhr, data) => {
        //   // First param is the variable name used server side
        //   // Second param is the value, you can add what you what
        //   // Here I added an input value
        //   data.append('your_variable', document.getElementById('your_input').value);
        // });
      },
    };
  },
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

.btn-dust-purple {
  background-color: #A7ADC6;
}

.btn-muted-purple {
  background-color: #56667A;
}

.dz-message {
  @apply text-gray-600;
}

.dropzone {
  min-height: 100px;
  border: 2px dashed rgba(0, 0, 0, 0.3);
  background: rgba(255,255,255,0.5);
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.5);
}
</style>
