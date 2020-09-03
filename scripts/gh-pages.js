const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/social-playground',
    {
        branch: 'master',
        repo: 'https://github.com/sgoguen/social-playground.git',
        user: {
            name: 'Steve Goguen',
            email: 'sgoguen@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)