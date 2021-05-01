module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    url: '/dashboard', // We change the path to access to the admin (highly recommended for security reasons).
    auth: {
      secret: env('ADMIN_JWT_SECRET', '40e2acde3b289d0c1d2edbc5dc51b487'),
    },
  },
});

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   admin: {
//     url: '/dashboard', // We change the path to access to the admin (highly recommended for security reasons).
//   },
// });