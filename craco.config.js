const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@data': path.resolve(__dirname, 'src/data'),

      '@auth': path.resolve(__dirname, 'src/features/authentication'),
      '@jobs': path.resolve(__dirname, 'src/features/jobs'),

      '@jobsComponents': path.resolve(__dirname, 'src/features/jobs/components'),
      '@authComponents': path.resolve(__dirname, 'src/features/authentication/components'),

      '@jobsHooks': path.resolve(__dirname, 'src/features/jobs/hooks'),
      '@authHooks': path.resolve(__dirname, 'src/features/authentication/hooks'),

      '@jobsSlices': path.resolve(__dirname, 'src/features/jobs/slices'),
      '@authSlices': path.resolve(__dirname, 'src/features/authentication/slices'),

      '@jobsServices': path.resolve(__dirname, 'src/features/jobs/services'),
      '@authServices': path.resolve(__dirname, 'src/features/authentication/services'),
    },
  },
};