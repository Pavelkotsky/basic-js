const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 const createDreamTeam = (members) => {
  if (members == undefined || !Array.isArray(members) || members.length == 0) {
      return false;
  }

  const teamName = [];
  
  members.forEach(elem => {
      if (typeof elem === "string") {
          teamName.push(elem.trim()[0].toUpperCase())
      }
  })

  teamName.sort();
  return teamName.join("");
}

module.exports = {
  createDreamTeam
};
