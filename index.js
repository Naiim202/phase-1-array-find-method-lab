

function superbowlWin(record) {
    for (let entry of record) {
      if (entry.result === 'W') {

        return entry.year;
      }
    }
    return undefined;
  }
  
  module.exports = superbowlWin;
  