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
        sheetId: process.env['GOOGLE_SHEET_ID'],
        apiKey: process.env['GOOGLE_API_KEY'],
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      },
    },
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env['EIGHTBASE_WORKSPACE_ENDPOINT'],
        fieldName: 'eightBase',
        typeName: 'eightBase',
        headers: {
          Authorization: `Bearer ${process.env['EIGHTBASE_API_TOKEN']}`,
        },
      },
    },
  ],
};
