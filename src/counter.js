const fs = require('fs');
const path = require('path');

function getVisitCount() {
  const counterPath = path.join(process.cwd(), '.counter.json');

  let count = 1;

  if (fs.existsSync(counterPath)) {
    try {
      const data = fs.readFileSync(counterPath, 'utf8');
      const json = JSON.parse(data);
      count = (json.count || 0) + 1;
    } catch (error) {
      // If file exists but is invalid, start fresh
      count = 1;
    }
  }

  fs.writeFileSync(counterPath, JSON.stringify({ count }, null, 2), 'utf8');

  return count;
}

module.exports = { getVisitCount };
