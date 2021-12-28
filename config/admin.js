module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '337a05d6c849ac8b09d6dd1d9d2dac77'),
  },
});
