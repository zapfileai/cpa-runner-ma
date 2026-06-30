const massachusettsCities = [
  "Abington", "Accord", "Acton", "Acushnet", "Adams",
  "Agawam", "Allston", "Amesbury", "Amherst", "Andover",
  "Arlington", "Ashburnham", "Ashfield", "Ashland", "Assonet",
  "Athol", "Attleboro", "Attleboro Falls", "Auburn", "Auburndale",
  "Avon", "Ayer", "Babson Park", "Baldwinville", "Barnstable",
  "Barre", "Becket", "Bedford", "Belchertown", "Bellingham",
  "Belmont", "Berkley", "Berkshire", "Berlin", "Bernardston",
  "Beverly", "Billerica", "Blackstone", "Blandford", "Bolton",
  "Boston", "Boxborough", "Boxford", "Boylston", "Braintree",
  "Brant Rock", "Brewster", "Bridgewater", "Brighton", "Brimfield",
  "Brockton", "Brookfield", "Brookline", "Burlington", "Buzzards Bay",
  "Byfield", "Cambridge", "Canton", "Carlisle", "Carver",
  "Cataumet", "Centerville", "Charlemont", "Charlestown", "Charlton",
  "Charlton Depot", "Chatham", "Chelmsford", "Chelsea", "Cherry Valley",
  "Cheshire", "Chesterfield", "Chestnut Hill", "Chicopee", "Chilmark",
  "Clinton", "Cohasset", "Concord", "Cotuit", "Dalton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < massachusettsCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(massachusettsCities[i]);
}

module.exports = { batches };
