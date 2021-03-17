module.exports = ({ env }) => ({
  host: env('HOST', '192.168.1.110'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://butik-api.pamosystems.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '420a442f867b4fe212c2772e83daf452'),
    },
    host: env('ADMINHOST', '192.168.1.110'),
    port: env.int('ADMINPORT', 1338),
  },
  cron: {
    enabled: true
  },
});
