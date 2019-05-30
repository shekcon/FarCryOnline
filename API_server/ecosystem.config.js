module.exports = {
    apps: [{
      name: 'FarCryOnline',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'http://ec2-18-188-223-17.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FarCryOnline.pem',
        ref: 'origin/API_server',
        repo: 'git@github.com:Shekcon/FarCryOnline.git',
        path: '/home/ubuntu/FarCryOnline/API_server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }