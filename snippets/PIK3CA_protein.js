// import our plot-library
var mutneedles = require("muts-needle-plot");

var colorMap = {
  // mutation categories
  "missense_variant": "yellow",
  // regions
  "X-binding": "olive",
  "region1": "olive"
};

var legends = {
  x: "Corresponding protein positions to transcript X",
  y: "Number of recorded mutation"
};

//Crate config Object
var plotConfig = {
  maxCoord :      250,
  minCoord :      0,
  targetElement : yourDiv,
  mutationData:   "./data/muts.json",
  regionData:     "./data/regions.json",
  colorMap:       colorMap,
  legends:        legends
};

// Instantiate a plot
var instance = new mutneedles(plotConfig);

//@biojs-instance=instance (provides the instance to the BioJS event system)
