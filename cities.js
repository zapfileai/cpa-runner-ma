const massachusettsCities = [
  "Somerset", "Somerville", "South Chatham", "South Dartmouth", "South Deerfield",
  "South Dennis", "South Easton", "South Egremont", "South Grafton", "South Hadley",
  "South Hamilton", "South Harwich", "South Lancaster", "South Lee", "South Walpole",
  "South Wellfleet", "South Weymouth", "South Yarmouth", "Southampton", "Southborough",
  "Southbridge", "Southfield", "Southwick", "Spencer", "Springfield",
  "Sterling", "Still River", "Stoneham", "Stoughton", "Stow",
  "Sturbridge", "Sudbury", "Sunderland", "Sutton", "Swampscott",
  "Swansea", "Taunton", "Templeton", "Tewksbury", "Thorndike",
  "Three Rivers", "Topsfield", "Townsend", "Turners Falls", "Tyngsboro",
  "Upton", "Uxbridge", "Vineyard Haven", "Waban", "Wakefield",
  "Wales", "Walpole", "Waltham", "Ware", "Wareham",
  "Warren", "Watertown", "Waverley", "Wayland", "Webster",
  "Wellesley", "Wellesley Hills", "Wellfleet", "Wenham", "West Barnstable",
  "West Boylston", "West Bridgewater", "West Brookfield", "West Chatham", "West Dennis",
  "West Falmouth", "West Harwich", "West Hyannisport", "West Newbury", "West Newton",
  "West Roxbury", "West Springfield", "West Stockbridge", "West Townsend", "West Wareham",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < massachusettsCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(massachusettsCities[i]);
}

module.exports = { batches };
