const { execSync } = require('child_process');

module.exports = (path, packs, dev) => {
  console.log('Installer Initializing');

  const packages = packs.join(' ');

  let devFlag = '';

  if(dev) {
    devFlag = '-D';
  }

  execSync(`npm install ${devFlag} ${packages}`, {
    cwd: path,
    stdio: 'inherit'
  });

  console.log('Installer Completed');
};