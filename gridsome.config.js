// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1KZPKDyOAco7TUAUR0sfuizDuFgT1dG0prQEKU5NE83Q',
        apiKey: 'AIzaSyBK93ogIACkildpT901EGyFpf_0Gya6CWU',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      },
    },
  ],
};
