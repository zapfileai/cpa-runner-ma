const massachusettsCities = [
  "Hudson", "Hull", "Humarock", "Hyannis", "Hyde Park",
  "Ipswich", "Jamaica Plain", "Jefferson", "Kingston", "Lakeville",
  "Lancaster", "Lanesborough", "Lawrence", "Lee", "Leeds",
  "Leicester", "Lenox", "Lenox Dale", "Leominster", "Leverett",
  "Lexington", "Lincoln", "Littleton", "Longmeadow", "Lowell",
  "Ludlow", "Lunenburg", "Lynn", "Lynnfield", "Malden",
  "Manchaug", "Manchester", "Manomet", "Mansfield", "Marblehead",
  "Marion", "Marlborough", "Marshfield", "Marshfield Hills", "Marstons Mills",
  "Mashpee", "Mattapan", "Mattapoisett", "Maynard", "Medfield",
  "Medford", "Medway", "Melrose", "Mendon", "Merrimac",
  "Methuen", "Middleborough", "Middleton", "Milford", "Millbury",
  "Millis", "Millville", "Milton", "Monson", "Montague",
  "Monument Beach", "Nahant", "Nantucket", "Natick", "Needham",
  "Needham Heights", "New Bedford", "New Salem", "Newbury", "Newburyport",
  "Newton", "Newton Center", "Newton Highlands", "Newton Lower Falls", "Newton Upper Falls",
  "Newtonville", "Norfolk", "North Adams", "North Andover", "North Attleboro",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < massachusettsCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(massachusettsCities[i]);
}

module.exports = { batches };
