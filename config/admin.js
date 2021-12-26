module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1968399c33f570cc5e37685d93003f2a'),
  },
});
