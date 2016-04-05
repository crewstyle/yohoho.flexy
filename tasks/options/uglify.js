module.exports = {
  src: {
    files: {
      //JS version including jQuery package
      './dist/flexy.min.js': [
        './bower_components/jquery/dist/jquery.js',
        './flexy.js'
      ],
      //JS version without jQuery package
      './dist/standalone/flexy.min.js': [
        './flexy.js'
      ],
    }
  },

  options: {
    preserveComments: 'some'
  }
};
