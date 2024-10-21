const { exec } = require('child_process');

module.exports = {
  '0 1 * * 7': async () => {
    exec('node scripts/reviews.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Błąd podczas uruchamiania skryptu: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  },
};