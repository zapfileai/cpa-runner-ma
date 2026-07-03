const massachusettsCities = [
  "North Billerica", "North Brookfield", "North Chatham", "North Chelmsford", "North Dartmouth",
  "North Dighton", "North Eastham", "North Easton", "North Falmouth", "North Grafton",
  "North Marshfield", "North Oxford", "North Reading", "North Truro", "North Uxbridge",
  "North Weymouth", "Northampton", "Northborough", "Northbridge", "Norton",
  "Norwell", "Norwood", "Oak Bluffs", "Oakham", "Ocean Bluff",
  "Orange", "Orleans", "Osterville", "Oxford", "Palmer",
  "Paxton", "Peabody", "Pembroke", "Pepperell", "Petersham",
  "Pittsfield", "Plainville", "Plymouth", "Plympton", "Pocasset",
  "Prides Crossing", "Princeton", "Provincetown", "Quincy", "Randolph",
  "Raynham", "Raynham Center", "Reading", "Readville", "Rehoboth",
  "Revere", "Rochdale", "Rochester", "Rockland", "Rockport",
  "Roslindale", "Rowley", "Roxbury", "Roxbury Crossing", "Royalston",
  "Russell", "Rutland", "Sagamore", "Sagamore Beach", "Salem",
  "Salisbury", "Sandisfield", "Sandwich", "Saugus", "Scituate",
  "Seekonk", "Sharon", "Sheffield", "Shelburne Falls", "Sheldonville",
  "Sherborn", "Shirley", "Shrewsbury", "Shutesbury", "Siasconset",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < massachusettsCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(massachusettsCities[i]);
}

module.exports = { batches };
