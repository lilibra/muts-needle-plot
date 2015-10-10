// import our plot-library
var mutneedles = require("muts-needle-plot");

var target = yourDiv; // autmically generated in snippets examples
var muts = "./data/ENST00000557334_genomic.json";
var regions = [
  {"name": "PI3K-ABD", "coord": "16-105"},
  {"name": "PI3K-RBD", "coord": "187-289"},
  {"name": "PI3K-C2", "coord": "33-487"},
  {"name": "PI3K helica", "coord": "51-694"},
  {"name": "PI3K/PI4K", "coord": "797-1068"}
];
var legends = {x: "PIK3CA genomic pos", y: "Mutation Count"}
var colorMap = {
  // mutation categories
  "missense_variant": "yellow",
  "frameshift_variant": "blue",
  "stop_gained": "red",
  "stop_lost": "orange",
  "synonymous_variant": "lightblue"
};


var config = {minCoord: 1, maxCoord: 1068, mutationData: muts, regionData: regions, target: target, legends: legends, colorMap: colorMap }

var instance =  new mutneedles(config);

//@biojs-instance=instance (provides the instance to the BioJS event system)
