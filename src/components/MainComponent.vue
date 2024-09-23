<template>
  <div class="container">
    <h1>Ulrike's Mnemonics</h1>
    <form>
      <fieldset>
        <input
          placeholder="Type kanji ideogram to filter"
          @input="filterKanji"
          v-model="inputValue"
        />
      </fieldset>
    </form>
    <table class="striped">
      <thead>
        <tr>
          <th>Kanji</th>
          <th>OnYomi</th>
          <th>KunYomi</th>
          <th>Meaning</th>
          <th>Mnemonic</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="kanji in data" :key="kanji.jok_hen">
          <td>{{ kanji.glyph == undefined ? kanji : kanji.glyph }}</td>
          <td>{{ kanji.on_joyo }}</td>
          <td>{{ kanji.kun_joyo }}</td>
          <td>{{ kanji.eng_meaning_0 }}</td>
          <td>{{ this.decodeMnemonic(kanji["0"].mnemonics_value) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    stripHtmlTags(str) {
      return str.replace(/<[^>]*>/g, "");
    },
    decodeHtml(str) {
      var textarea = document.createElement("textarea");
      textarea.innerHTML = str;
      return textarea.value;
    },
    decodeMnemonic(str) {
      var no_tag_str = this.stripHtmlTags(str);
      return this.decodeHtml(no_tag_str);
    },
    filterKanji() {
      if (this.inputValue != "") {
        for (let pos in this.json.data) {
          if (this.json.data[pos].glyph == this.inputValue) {
            this.data = { 0: this.json.data[pos] };
          }
        }
      } else {
        this.data = this.json.data;
      }
    },
  },
  async setup() {
    const response = await fetch(
      "https://japanesestudies.github.io/joyo-kanji/complete-ulrike-joyo-kanji.json"
    );
    const json = await response.json();
    const data = ref(json.data);

    return { json, data };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 10px;
}
</style>
