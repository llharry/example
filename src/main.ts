import fs from 'fs'
console.log('Setting config.canRestart to true in 30 seconds...')

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
setTimeout(() => {
  config.canRestart = true
  fs.writeFileSync('./config.json', JSON.stringify(config))
    console.log('config.canRestart is now true')
}, 30000)
