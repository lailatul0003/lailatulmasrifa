var wms_layers = [];

var format_sungai_0 = new ol.format.GeoJSON();
var features_sungai_0 = format_sungai_0.readFeatures(json_sungai_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_0.addFeatures(features_sungai_0);
var lyr_sungai_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_0, 
                style: style_sungai_0,
                interactive: true,
                title: '<img src="styles/legend/sungai_0.png" /> sungai'
            });
var format_tuplahfixtenan_1 = new ol.format.GeoJSON();
var features_tuplahfixtenan_1 = format_tuplahfixtenan_1.readFeatures(json_tuplahfixtenan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuplahfixtenan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuplahfixtenan_1.addFeatures(features_tuplahfixtenan_1);
var lyr_tuplahfixtenan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tuplahfixtenan_1, 
                style: style_tuplahfixtenan_1,
                interactive: true,
    title: 'tuplah fix tenan<br />\
    <img src="styles/legend/tuplahfixtenan_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/tuplahfixtenan_1_1.png" /> Belukar<br />\
    <img src="styles/legend/tuplahfixtenan_1_2.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/tuplahfixtenan_1_3.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/tuplahfixtenan_1_4.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/tuplahfixtenan_1_5.png" /> Pemukiman<br />\
    <img src="styles/legend/tuplahfixtenan_1_6.png" /> Perkebunan<br />\
    <img src="styles/legend/tuplahfixtenan_1_7.png" /> Pertambangan<br />\
    <img src="styles/legend/tuplahfixtenan_1_8.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/tuplahfixtenan_1_9.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/tuplahfixtenan_1_10.png" /> Sawah<br />\
    <img src="styles/legend/tuplahfixtenan_1_11.png" /> Tambak<br />\
    <img src="styles/legend/tuplahfixtenan_1_12.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/tuplahfixtenan_1_13.png" /> <br />'
        });

lyr_sungai_0.setVisible(true);lyr_tuplahfixtenan_1.setVisible(true);
var layersList = [lyr_sungai_0,lyr_tuplahfixtenan_1];
lyr_sungai_0.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_tuplahfixtenan_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_sungai_0.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_tuplahfixtenan_1.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_sungai_0.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_tuplahfixtenan_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', });
lyr_tuplahfixtenan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});