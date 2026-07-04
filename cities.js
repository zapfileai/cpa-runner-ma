const massachusettsCities = [
  "West Yarmouth", "Westborough", "Westfield", "Westford", "Westminster",
  "Weston", "Westport", "Westwood", "Weymouth", "Whately",
  "Whitinsville", "Whitman", "Wilbraham", "Williamsburg", "Williamstown",
  "Wilmington", "Winchendon", "Winchester", "Winthrop", "Woburn",
  "Woodville", "Worcester", "Worthington", "Wrentham", "Yarmouth Port",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < massachusettsCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(massachusettsCities[i]);
}

module.exports = { batches };
