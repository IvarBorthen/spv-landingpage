export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e750306ee607d5c5f9ddd11',
                  title: 'Sanity Studio',
                  name: 'spv-landingpage-studio',
                  apiId: '37a7a050-5ca3-4084-921b-28e5efd76018'
                },
                {
                  buildHookId: '5e750306df1397911b6a4e3a',
                  title: 'Blog Website',
                  name: 'spv-landingpage',
                  apiId: 'f4d9a476-ffa2-43c1-961b-81ab63dd1490'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IvarBorthen/spv-landingpage',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://spv-landingpage.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
