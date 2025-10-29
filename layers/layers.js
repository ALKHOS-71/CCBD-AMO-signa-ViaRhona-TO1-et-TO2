var wms_layers = [];


    var projection_Ortho20cm_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortho20cm_0 = projection_Ortho20cm_0.getExtent();
    var size_Ortho20cm_0 = ol.extent.getWidth(projectionExtent_Ortho20cm_0) / 256;
    var resolutions_Ortho20cm_0 = new Array(14);
    var matrixIds_Ortho20cm_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortho20cm_0[z] = size_Ortho20cm_0 / Math.pow(2, z);
        matrixIds_Ortho20cm_0[z] = z;
    }
    var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/annexes/ressources/wmts/ortho.xml",
                                attributions: ' ',
                                "layer": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortho20cm_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortho20cm_0),
                resolutions: resolutions_Ortho20cm_0,
                matrixIds: matrixIds_Ortho20cm_0
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortho 20 cm',
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CCBD_2 = new ol.format.GeoJSON();
var features_CCBD_2 = format_CCBD_2.readFeatures(json_CCBD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCBD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCBD_2.addFeatures(features_CCBD_2);
var lyr_CCBD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCBD_2, 
                style: style_CCBD_2,
                popuplayertitle: 'CCBD',
                interactive: false,
                title: '<img src="styles/legend/CCBD_2.png" /> CCBD'
            });
var format_COMMUNESCCBD_3 = new ol.format.GeoJSON();
var features_COMMUNESCCBD_3 = format_COMMUNESCCBD_3.readFeatures(json_COMMUNESCCBD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNESCCBD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESCCBD_3.addFeatures(features_COMMUNESCCBD_3);
var lyr_COMMUNESCCBD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESCCBD_3, 
                style: style_COMMUNESCCBD_3,
                popuplayertitle: 'COMMUNES CCBD',
                interactive: false,
                title: '<img src="styles/legend/COMMUNESCCBD_3.png" /> COMMUNES CCBD'
            });
var format_TRACESECHAPPEESCCBD_4 = new ol.format.GeoJSON();
var features_TRACESECHAPPEESCCBD_4 = format_TRACESECHAPPEESCCBD_4.readFeatures(json_TRACESECHAPPEESCCBD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACESECHAPPEESCCBD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACESECHAPPEESCCBD_4.addFeatures(features_TRACESECHAPPEESCCBD_4);
var lyr_TRACESECHAPPEESCCBD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRACESECHAPPEESCCBD_4, 
                style: style_TRACESECHAPPEESCCBD_4,
                popuplayertitle: 'TRACES ECHAPPEES CCBD',
                interactive: true,
                title: '<img src="styles/legend/TRACESECHAPPEESCCBD_4.png" /> TRACES ECHAPPEES CCBD'
            });
var format_VOIEVERTEARANDONCREMIEU_5 = new ol.format.GeoJSON();
var features_VOIEVERTEARANDONCREMIEU_5 = format_VOIEVERTEARANDONCREMIEU_5.readFeatures(json_VOIEVERTEARANDONCREMIEU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOIEVERTEARANDONCREMIEU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOIEVERTEARANDONCREMIEU_5.addFeatures(features_VOIEVERTEARANDONCREMIEU_5);
var lyr_VOIEVERTEARANDONCREMIEU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOIEVERTEARANDONCREMIEU_5, 
                style: style_VOIEVERTEARANDONCREMIEU_5,
                popuplayertitle: 'VOIE VERTE ARANDON-CREMIEU',
                interactive: false,
                title: '<img src="styles/legend/VOIEVERTEARANDONCREMIEU_5.png" /> VOIE VERTE ARANDON-CREMIEU'
            });
var format_VIARHONA_6 = new ol.format.GeoJSON();
var features_VIARHONA_6 = format_VIARHONA_6.readFeatures(json_VIARHONA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_6.addFeatures(features_VIARHONA_6);
var lyr_VIARHONA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_6, 
                style: style_VIARHONA_6,
                popuplayertitle: 'VIARHONA',
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_6.png" /> VIARHONA'
            });
var format_PROJETDEDEFINITIONTO1TO2_7 = new ol.format.GeoJSON();
var features_PROJETDEDEFINITIONTO1TO2_7 = format_PROJETDEDEFINITIONTO1TO2_7.readFeatures(json_PROJETDEDEFINITIONTO1TO2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROJETDEDEFINITIONTO1TO2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJETDEDEFINITIONTO1TO2_7.addFeatures(features_PROJETDEDEFINITIONTO1TO2_7);
var lyr_PROJETDEDEFINITIONTO1TO2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJETDEDEFINITIONTO1TO2_7, 
                style: style_PROJETDEDEFINITIONTO1TO2_7,
                popuplayertitle: 'PROJET DE DEFINITION TO1 TO2',
                interactive: true,
                title: '<img src="styles/legend/PROJETDEDEFINITIONTO1TO2_7.png" /> PROJET DE DEFINITION TO1 TO2'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_CCBD_2.setVisible(true);lyr_COMMUNESCCBD_3.setVisible(true);lyr_TRACESECHAPPEESCCBD_4.setVisible(true);lyr_VOIEVERTEARANDONCREMIEU_5.setVisible(true);lyr_VIARHONA_6.setVisible(true);lyr_PROJETDEDEFINITIONTO1TO2_7.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_OpenStreetMap_1,lyr_CCBD_2,lyr_COMMUNESCCBD_3,lyr_TRACESECHAPPEESCCBD_4,lyr_VOIEVERTEARANDONCREMIEU_5,lyr_VIARHONA_6,lyr_PROJETDEDEFINITIONTO1TO2_7];
lyr_CCBD_2.set('fieldAliases', {'qc_id': 'qc_id', 'nom_epci': 'nom_epci', });
lyr_COMMUNESCCBD_3.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_TRACESECHAPPEESCCBD_4.set('fieldAliases', {'SITE SIGNA': 'SITE SIGNA', 'TRAVAUX': 'TRAVAUX', 'ANTENNE': 'ANTENNE', 'REMARQUES': 'REMARQUES', 'VARIANTE': 'VARIANTE', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_VOIEVERTEARANDONCREMIEU_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'LINEAIRE': 'LINEAIRE', });
lyr_VIARHONA_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'id': 'id', });
lyr_PROJETDEDEFINITIONTO1TO2_7.set('fieldAliases', {'fid': 'fid', 'Identifiant': 'Identifiant', 'Itinéraire implantation': 'Itinéraire implantation', 'Commune implantation': 'Commune implantation', 'Voie implantation': 'Voie implantation', 'Sens de circulation': 'Sens de circulation', 'Type de panneau': 'Type de panneau', 'Sens de la flèche': 'Sens de la flèche', 'Mention 1': 'Mention 1', 'Kilométrage 1': 'Kilométrage 1', 'ID 1': 'ID 1', 'Mention 2': 'Mention 2', 'Kilométrage 2': 'Kilométrage 2', 'ID 2': 'ID 2', 'Dimension du support': 'Dimension du support', 'Dimension du panneau': 'Dimension du panneau', 'MAITRE OUVRAGE': 'MAITRE OUVRAGE', 'Dépose support': 'Dépose support', 'Pose support existant': 'Pose support existant', 'Pose support projeté': 'Pose support projeté', 'Dépose panneau': 'Dépose panneau', 'Repose panneau': 'Repose panneau', 'Pose panneau projeté': 'Pose panneau projeté', 'Marquage au sol': 'Marquage au sol', 'REMARQUE': 'REMARQUE', });
lyr_CCBD_2.set('fieldImages', {'qc_id': 'TextEdit', 'nom_epci': 'TextEdit', });
lyr_COMMUNESCCBD_3.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_TRACESECHAPPEESCCBD_4.set('fieldImages', {'SITE SIGNA': 'TextEdit', 'TRAVAUX': 'TextEdit', 'ANTENNE': 'TextEdit', 'REMARQUES': 'TextEdit', 'VARIANTE': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_VOIEVERTEARANDONCREMIEU_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'LINEAIRE': 'TextEdit', });
lyr_VIARHONA_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'id': 'TextEdit', });
lyr_PROJETDEDEFINITIONTO1TO2_7.set('fieldImages', {'fid': 'TextEdit', 'Identifiant': 'TextEdit', 'Itinéraire implantation': 'TextEdit', 'Commune implantation': 'TextEdit', 'Voie implantation': '', 'Sens de circulation': 'TextEdit', 'Type de panneau': 'TextEdit', 'Sens de la flèche': 'TextEdit', 'Mention 1': 'TextEdit', 'Kilométrage 1': 'TextEdit', 'ID 1': 'TextEdit', 'Mention 2': 'TextEdit', 'Kilométrage 2': 'TextEdit', 'ID 2': 'TextEdit', 'Dimension du support': 'TextEdit', 'Dimension du panneau': 'TextEdit', 'MAITRE OUVRAGE': 'TextEdit', 'Dépose support': 'TextEdit', 'Pose support existant': 'TextEdit', 'Pose support projeté': 'TextEdit', 'Dépose panneau': 'TextEdit', 'Repose panneau': 'TextEdit', 'Pose panneau projeté': 'TextEdit', 'Marquage au sol': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_CCBD_2.set('fieldLabels', {'qc_id': 'no label', 'nom_epci': 'no label', });
lyr_COMMUNESCCBD_3.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_TRACESECHAPPEESCCBD_4.set('fieldLabels', {'SITE SIGNA': 'inline label - visible with data', 'TRAVAUX': 'no label', 'ANTENNE': 'no label', 'REMARQUES': 'no label', 'VARIANTE': 'no label', 'SOURCE': 'no label', 'VIARHON-VV': 'no label', 'OP EPCI': 'no label', 'OP TERRAIN': 'no label', });
lyr_VOIEVERTEARANDONCREMIEU_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'LINEAIRE': 'no label', });
lyr_VIARHONA_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'id': 'no label', });
lyr_PROJETDEDEFINITIONTO1TO2_7.set('fieldLabels', {'fid': 'no label', 'Identifiant': 'inline label - visible with data', 'Itinéraire implantation': 'inline label - visible with data', 'Commune implantation': 'inline label - visible with data', 'Voie implantation': 'inline label - visible with data', 'Sens de circulation': 'inline label - visible with data', 'Type de panneau': 'inline label - visible with data', 'Sens de la flèche': 'inline label - visible with data', 'Mention 1': 'inline label - visible with data', 'Kilométrage 1': 'inline label - visible with data', 'ID 1': 'inline label - visible with data', 'Mention 2': 'inline label - visible with data', 'Kilométrage 2': 'inline label - visible with data', 'ID 2': 'inline label - visible with data', 'Dimension du support': 'inline label - visible with data', 'Dimension du panneau': 'inline label - visible with data', 'MAITRE OUVRAGE': 'inline label - visible with data', 'Dépose support': 'inline label - visible with data', 'Pose support existant': 'inline label - visible with data', 'Pose support projeté': 'inline label - visible with data', 'Dépose panneau': 'inline label - visible with data', 'Repose panneau': 'inline label - visible with data', 'Pose panneau projeté': 'inline label - visible with data', 'Marquage au sol': 'inline label - visible with data', 'REMARQUE': 'inline label - visible with data', });
lyr_PROJETDEDEFINITIONTO1TO2_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});