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
      <form action="/" class="dropzone w-5/6 m-auto mt-5 simple-fade" id="carrier-image">
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
      <form v-show="fileMessage" action="/" class="dropzone w-5/6 m-auto mt-5" id="message-file">
        <div class="dz-message needsclick">
          Upload file to hide in carrier image
        </div>
      </form>
      <div v-show="!fileMessage" class="mt-4">
        <label for="text-message" class="hidden">Text</label>
        <input
          id="text-message"
          type="text"
          placeholder="Message..."
          class="w-4/5 rounded text-center focus:outline-none focus:shadow hover:shadow py-1
                 simple-fade"
          v-model="message"
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
          v-model="passphrase"
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
        id="btn_upload"
      >
        GENERATE
      </button>
    </div>
  </div>
</template>

<script>
import * as Dropzone from 'dropzone';

// const axios = require('axios');
const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';

export default {
  name: 'Encode.vue',
  data() {
    return {
      fileMessage: false,
      passphrase: '',
      message: '',
      carrierImage: null,
      messageFile: null,
      encryptedData: [],
      iv: '',
    };
  },
  methods: {
    getBase64(file) {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = (ev) => {
          resolve(new Uint8Array(ev.target.result));
        };
        reader.readAsArrayBuffer(file);
      });
    },
    async encryptMessage() {
      // Arbitrary default hash
      const password = this.passphrase ? this.passphrase : '40176A2084CD236E206524B0E32B1270CA6403CF574DDCF65F18EDF8F40C74A0';
      const key = crypto.createHash('sha256').update(String(password)).digest('base64').substr(0, 32);
      if (!this.fileMessage) {
        // Defining iv
        const iv = crypto.randomBytes(16);
        this.iv = iv.toString('hex');

        // Creating Cipheriv with its parameter
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

        // Updating text
        let encrypted = cipher.update(this.message);

        // Using concatenation
        encrypted = Buffer.concat([encrypted, cipher.final()]);

        // iv and encrypted data
        return [encrypted.toString('hex')];
      }
      console.log(this.messageFile.getQueuedFiles());

      // here will be array of promisified functions
      const promises = [];

      // loop through fileList with for loop
      for (let i = 0; i < this.messageFile.getQueuedFiles().length; i += 1) {
        promises.push(this.getBase64(this.messageFile.getQueuedFiles()[i]));
      }

      // array with base64 strings
      // eslint-disable-next-line no-return-await
      return Promise.all(promises);
    },
  },
  mounted() {
    this.passphrase = 'pass';
    this.message = 'message';
    this.encryptMessage().then((data) => {
      console.log(data);
    }).catch((err) => console.log(err));

    const vm = this;
    Dropzone.autoDiscover = false;
    // eslint-disable-next-line no-unused-vars
    this.carrierImage = new Dropzone('#carrier-image', {
      url: 'http://localhost:3000/testAPI',
      // upload multiple files
      uploadMultiple: true,
      // 1 mb is here the max file upload size constraint
      maxFilesize: 1,
      acceptedFiles: '.jpeg,.jpg,.png,.gif',
      autoProcessQueue: false,
      paramName: 'carrierImages',

      init() {
        document.getElementById('btn_upload').addEventListener('click', () => {
          const dropzone = this;
          vm.encryptMessage()
            .then((data) => {
              console.log(data);
              vm.encryptedData = data;
              dropzone.processQueue(); // Tell Dropzone to process all queued files.
            })
            .catch((err) => console.log(err));
        });

        // Event to send your custom data to your server
        this.on('sendingmultiple', (file, xhr, data) => {
          data.append('encryptedData',
            vm.encryptedData.length === 0 ? null : JSON.stringify(vm.encryptedData));
          data.append('iv', String(vm.iv));
        });
      },
      success(file) {
        const link = document.createElement('a');
        link.download = file.name;
        link.href = file.dataURL;
        link.click();
      },
    });
    this.messageFile = new Dropzone('#message-file', {
      url: 'http://localhost:3000/testAPI',
      // upload multiple files
      uploadMultiple: true,
      // 1 mb is here the max file upload size constraint
      maxFilesize: 1,
      autoProcessQueue: false,
      paramName: 'messageFiles',
    });
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

.dz-drag-hover {
  /*background-color: red !important;*/
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
