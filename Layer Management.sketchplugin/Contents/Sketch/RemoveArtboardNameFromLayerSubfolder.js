@import 'common.js'

var RemoveArtboardNameFromLayerSubfolder = function(context) {

    // Variables
    var selection = context.selection;
    var app = [NSApplication sharedApplication]
    var doc = context.document; //reference sketch document
    var allArtboards = [[doc currentPage] artboards]
    log(allArtboards);
    for (var j=0; j < allArtboards.length; j++){

  	  var artboard = [allArtboards objectAtIndex:j]

    	var artboardName = [artboard name]
      var layers = [artboard layers]


    	for (var k=0; k < layers.length; k++){
     		var layer = [layers objectAtIndex:k];
    		//addArtboardNameToLayerName(artboardName, layer);
    		removeArtboardNameFromLayerName(artboardName, layer);
    	}
    }

    function removeArtboardNameFromLayerName(artboardName, layer) {
    	var layerName = [layer name];
    	if(layerName.indexOf(artboardName) === 0) {
    	  var newName = [layer name].replace(artboardName + "/", "");
      	[layer setName:newName]
    }
  }
}
