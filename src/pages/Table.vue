<template>
  <Layout>
    <h1>Table page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
    </p>

    <select v-model="selected" @change.prevent="onChange($event)">
      <option
        v-for="(option, i) in options"
        v-bind:value="option.value"
        :key="i"
      >
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br />

    <ul>
      <li v-for="edge in fData" :key="edge.id">
        {{ edge.data }}
      </li>
    </ul>
  </Layout>
</template>

// Limitations // Max columns 52 // Max rows 10000

<page-query>
  query MyData {
    res: allGoogleSheet {
      edges {
        node {
          id
          title
          data
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Table',
  },
  data() {
    return {
      fData: [],
      selected: null,
      options: [
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'Four', value: 4 },
      ],
    };
  },
  computed: {},
  methods: {
    onChange(event) {
      return this.getRelatedData(event.target.value);
    },

    getRelatedData(parentId) {
      // create new array for easier filter
      let newArr = [];
      const obj = this.$page.res;
      obj.edges.forEach(({ node }) => {
        if (node.id == parentId) {
          newArr.push({
            id: node.id,
            title: node.title,
            data: node.data,
          });
        }
      });
      this.fData = newArr;
      return newArr;
    },
  },
};
</script>
