<template>
  <b-form-row>
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
                add store
              </b-button>
            </b-form-row>
          </b-col>
          <b-col>
            <b-form-row>
              <b-button type="button" @click="reset" variant="warning">
                reset store
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
          bg-variant="secondary"
          text-variant="light"
        >
          <b-card-text>name : {{ name }}</b-card-text>
          <b-card-text>age : {{ age }}</b-card-text>
        </b-card>
        <b-card
          title="Current Pinia store"
          bg-variant="secondary"
          text-variant="light"
        >
          <b-card-text>name : {{ sampleName }}</b-card-text>
          <b-card-text>age : {{ sampleAge }}</b-card-text>
        </b-card>
      </b-card-group>
    </b-col>
  </b-form-row>
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
