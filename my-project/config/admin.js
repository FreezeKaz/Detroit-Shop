module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8199eea039312259a22494705c69063d'),
  },
});
