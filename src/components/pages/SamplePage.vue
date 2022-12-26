<template>
  <b-card bg-variant="secondary" text-variant="light">
    <h1>Demo of resetting Pinia's read-only state</h1>
    <b-card-header>
      <b-card-text>
        <span>Check using</span>
        <b-button
          href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
          target="_blank"
          title="Vue.js devtool"
        >
          <span style="text-decoration: underline"> Vue.js devtool </span>
          <span> </span>
          <i class="bi bi-box-arrow-up-right"></i>
        </b-button>
      </b-card-text>
    </b-card-header>
    <b-card-body>
      <b-form-row class="p-3 progress-bar-striped">
        <b-col>
          <b-form>
            <b-form-group label="name : ">
              <b-form-input name="input-name" type="text" v-model="name" />
            </b-form-group>
            <b-form-group label="age">
              <b-form-input name="input-age" type="number" v-model="age" />
            </b-form-group>
            <b-form-row>
              <b-col>
                <b-form-row>
                  <b-button type="button" @click="addStore" variant="primary">
                    <i class="bi bi-plus-square"></i>
                    add Pinia store
                  </b-button>
                </b-form-row>
              </b-col>
              <b-col>
                <b-form-row>
                  <b-button type="button" @click="reset" variant="danger">
                    <i class="bi bi-x-square"></i>
                    reset Pinia store
                  </b-button>
                </b-form-row>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
        <b-col>
          <b-card-group deck>
            <b-card
              title="Current Component data"
              bg-variant="light"
              text-variant="dark"
            >
              <b-card-text>name : {{ name }}</b-card-text>
              <b-card-text>age : {{ age }}</b-card-text>
            </b-card>
            <b-card
              title="Current Pinia store"
              bg-variant="dark"
              text-variant="light"
            >
              <b-card-text>name : {{ sampleName }}</b-card-text>
              <b-card-text>age : {{ sampleAge }}</b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-form-row>
    </b-card-body>
    <b-card-footer>
      <b-row>
        <b-col>
          <span>(c) 2022 rksan</span>
          <b-button
            href="https://github.com/rksan/pinia-reset-demo"
            target="_blank"
            title="Github"
            variant="none"
          >
            <i class="bi bi-github"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-card-footer>
  </b-card>
</template>

<script>
import { mapState } from "pinia";
import { useSampleStore } from "@/stores/store";

export default {
  setup() {
    const store = useSampleStore();

    return {
      store,
    };
  },

  data() {
    return {
      name: "hanako",
      age: 94,
    };
  },

  computed: {
    ...mapState(useSampleStore, {
      sampleName: (state) => state.name,
      sampleAge: (state) => state.age,
    }),
  },

  methods: {
    addStore() {
      this.store.setName(this.name);
      this.store.setAge(this.age);
    },
    reset() {
      this.store.reset();
    },
  },
};
</script>
