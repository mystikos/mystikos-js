<template>
  <div class="w-2/3 m-auto">
    <h1 class="text-6xl uppercase text-dust-purple">Encode</h1>
    <p>
      Conceal a file or text message into uploaded carrier images using this page
    </p>
    <hr class="mt-8">
    <div id="step-1" class="mt-4">
      <h3 class="text-3xl text-gray-700">STEP 1</h3>
      <p>
        Upload carrier image(s) for data to be hidden in
      </p>
      <form action="/" class="dropzone w-5/6 m-auto mt-5" id="carrier-image">
        <div class="dz-message needsclick">
          Upload carrier image(s) for data to be hidden in
        </div>
      </form>
    </div>
    <hr class="mt-8"/>
    <div class="mt-4" id="step-2">
      <h3 class="text-3xl text-gray-700">STEP 2</h3>
      <p>
        Select between hiding a file or text message into the carrier image(s)
      </p>
      <div class="inline-flex mt-2">
        <button
          class="focus:outline-none text-gray-800 font-bold py-2 px-4 rounded-l simple-fade"
          :class="{
            'bg-gray-100': !fileMessage,
            'bg-gray-300 hover:bg-gray-400': fileMessage,
          }"
          @click="fileMessage=false"
        >
          Text
        </button>
        <button
          class="focus:outline-none text-gray-800 font-bold py-2 px-4 rounded-r simple-fade"
          :class="{
            'bg-gray-100': fileMessage,
            'bg-gray-300 hover:bg-gray-400': !fileMessage,
          }"
          @click="fileMessage=true"
        >
          File
        </button>
      </div>
      <form v-if="fileMessage" action="/" class="dropzone w-5/6 m-auto mt-5" id="message-file">
        <div class="dz-message needsclick">
          Upload file to hide in carrier image
        </div>
      </form>
      <div v-if="!fileMessage" class="mt-4">
        <label for="text-message" class="hidden">Text</label>
        <input
          id="text-message"
          type="text"
          placeholder="Message..."
          class="w-4/5 rounded text-center focus:outline-none focus:shadow hover:shadow py-1
                 simple-fade"
        />
      </div>
    </div>
    <hr class="mt-8"/>
    <div class="mt-4" id="step-3">
      <h3 class="text-3xl text-gray-700">
        STEP 3
        <span class="text-gray-600 text-sm align-top">(OPTIONAL)</span>
      </h3>
      <p>
        Optionally choose a passphrase:
      </p>
      <div class="mt-4">
        <label for="passphrase" class="hidden">Passphrase</label>
        <input
          id="passphrase"
          type="text"
          placeholder="Passphrase..."
          class="w-4/5 rounded text-center focus:outline-none focus:shadow hover:shadow py-1
                 simple-fade"
        />
      </div>
    </div>
    <hr class="mt-8"/>
    <div class="mt-4" id="step-4">
      <h3 class="text-3xl text-gray-700">
        STEP 4
      </h3>
      <p>
        Finally, generate the carrier message.
      </p>
      <button
        class="focus:outline-none py-2 px-4 rounded btn-dust-purple hover:shadow-lg simple-fade
               text-white mt-5"
      >
        GENERATE
      </button>
    </div>
  </div>
</template>

<script>
import * as Dropzone from 'dropzone';

const axios = require('axios');

export default {
  name: 'Encode.vue',
  data() {
    return {
      fileMessage: false,
    };
  },
  methods: {
    testSubmit() {
      axios.post('http://localhost:3000/testAPI', {
        Name: 'Fred',
        Age: '23',
      })
        .then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
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
