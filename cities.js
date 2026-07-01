const massachusettsCities = [
  "Danvers", "Dedham", "Dennis", "Dennis Port", "Devens",
  "Dighton", "Dorchester", "Dorchester Center", "Douglas", "Dover",
  "Dracut", "Dudley", "Dunstable", "Duxbury", "East Bridgewater",
  "East Brookfield", "East Dennis", "East Falmouth", "East Freetown", "East Longmeadow",
  "East Orleans", "East Sandwich", "East Taunton", "East Templeton", "East Walpole",
  "East Wareham", "East Weymouth", "Eastham", "Easthampton", "Easton",
  "Edgartown", "Erving", "Essex", "Everett", "Fairhaven",
  "Fall River", "Falmouth", "Fayville", "Feeding Hills", "Fiskdale",
  "Fitchburg", "Florence", "Forestdale", "Foxborough", "Framingham",
  "Franklin", "Gardner", "Georgetown", "Gill", "Gloucester",
  "Grafton", "Granby", "Granville", "Great Barrington", "Green Harbor",
  "Greenfield", "Groton", "Groveland", "Hadley", "Halifax",
  "Hamilton", "Hampden", "Hanover", "Hanson", "Harvard",
  "Harwich", "Harwich Port", "Hatfield", "Haverhill", "Haydenville",
  "Hingham", "Holbrook", "Holden", "Holland", "Holliston",
  "Holyoke", "Hopedale", "Hopkinton", "Housatonic", "Hubbardston",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < massachusettsCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(massachusettsCities[i]);
}

module.exports = { batches };
