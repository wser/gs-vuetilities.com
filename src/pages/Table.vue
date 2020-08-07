<template>
  <Layout>
    <h1>Table page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
    </p>

    <div v-for="edge in $page.allGoogleSheet.edges" :key="edge.node.id">
      <h2>{{ edge.node.data }}</h2>
    </div>
  </Layout>
</template>

// Limitations // Max columns 52 // Max rows 10000

<page-query>
  query MyData {
    allGoogleSheet {
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
};
</script>
