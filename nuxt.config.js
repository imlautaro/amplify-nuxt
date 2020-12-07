export default {
    srcDir: 'src',
    components: true,
    plugins: ['~/plugins/amplify.js'],
    build: {
        transpile: ['aws-amplify']
    }
}