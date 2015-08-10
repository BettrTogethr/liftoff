Package.describe({
  name: 'liftoff:core',
  summary: 'Core Liftoff files.',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  packages = [
    'standard-app-packages',
    'check',
    'coffeescript',
    'underscore',
    'accounts-password',
    'kadira:flow-router',
    'kadira:blaze-layout',
    'arillo:flow-router-helpers',
    'materialize:materialize',
    'zimme:active-route',
    'modweb:materialize-connection-status',
    'useraccounts:materialize',
    'useraccounts:flow-routing'
  ];

  api.use(packages);
  api.imply(packages);

  files = {};

  files.clientAndServer = [
    'lib/config/accountsTemplates.litcoffee',
    'lib/router.litcoffee'
  ];

  files.client = [
    'client/css/main.css',
    'client/views/main.html',
    'client/views/layout/footer.html',
    'client/views/layout/header.html',
    'client/views/layout/header.litcoffee',
    'client/views/layout/mainLayout.html',
    'client/views/pages/about.html',
    'client/views/pages/home.html',
  ];

  files.server = [
    'server/fixtures.litcoffee',
    'server/publications.litcoffee'
  ]

  api.addFiles(files.clientAndServer, ['client', 'server']);
  api.addFiles(files.client, 'client');
  api.addFiles(files.server, 'server');
});
