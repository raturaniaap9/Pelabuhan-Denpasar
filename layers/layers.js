var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_BatasAdministrasi_Polygon_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_Polygon_1 = format_BatasAdministrasi_Polygon_1.readFeatures(json_BatasAdministrasi_Polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_Polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_Polygon_1.addFeatures(features_BatasAdministrasi_Polygon_1);
var lyr_BatasAdministrasi_Polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_Polygon_1, 
                style: style_BatasAdministrasi_Polygon_1,
                popuplayertitle: "BatasAdministrasi_Polygon",
                interactive: true,
    title: 'BatasAdministrasi_Polygon<br />\
    <img src="styles/legend/BatasAdministrasi_Polygon_1_0.png" /> Denpasar Barat<br />\
    <img src="styles/legend/BatasAdministrasi_Polygon_1_1.png" /> Denpasar Selatan<br />\
    <img src="styles/legend/BatasAdministrasi_Polygon_1_2.png" /> Denpasar Timur<br />\
    <img src="styles/legend/BatasAdministrasi_Polygon_1_3.png" /> Denpasar Utara<br />'
        });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Kecamatan_3 = new ol.format.GeoJSON();
var features_Kecamatan_3 = format_Kecamatan_3.readFeatures(json_Kecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_3.addFeatures(features_Kecamatan_3);
var lyr_Kecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_3, 
                style: style_Kecamatan_3,
                popuplayertitle: "Kecamatan ",
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_3.png" /> Kecamatan '
            });
var format_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4 = new ol.format.GeoJSON();
var features_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4 = format_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4.readFeatures(json_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4.addFeatures(features_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4);
var lyr_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4, 
                style: style_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4,
                popuplayertitle: "TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASAR-point",
                interactive: true,
    title: 'TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASAR-point<br />\
    <img src="styles/legend/TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4_0.png" /> PELABUHAN PENGUMPAN LOKAL SANUR<br />\
    <img src="styles/legend/TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4_1.png" /> PELABUHAN PENGUMPAN LOKAL SERANGAN<br />'
        });

lyr_Positronretina_0.setVisible(true);lyr_BatasAdministrasi_Polygon_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Kecamatan_3.setVisible(true);lyr_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_BatasAdministrasi_Polygon_1,lyr_Jalan_2,lyr_Kecamatan_3,lyr_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4];
lyr_BatasAdministrasi_Polygon_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Desa_Lurah': 'Desa_Lurah', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Luas_m2': 'Luas_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Sumber': 'Sumber', });
lyr_Jalan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Fungsi': 'Fungsi', 'Nama_Jalan': 'Nama_Jalan', 'Status': 'Status', 'BWK': 'BWK', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'Desa_Lurah': 'Desa_Lurah', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Shape_Leng': 'Shape_Leng', });
lyr_Kecamatan_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Jenis Data': 'Jenis Data', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'foto': 'foto', });
lyr_BatasAdministrasi_Polygon_1.set('fieldImages', {'OBJECTID': 'Range', 'Desa_Lurah': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Luas_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'OBJECTID': '', 'Fungsi': '', 'Nama_Jalan': '', 'Status': '', 'BWK': '', 'SBWP': '', 'BLOK': '', 'Desa_Lurah': '', 'Kecamatan': '', 'Kota': '', 'Shape_Leng': '', });
lyr_Kecamatan_3.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Jenis Data': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'foto': 'ExternalResource', });
lyr_BatasAdministrasi_Polygon_1.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'Desa_Lurah': 'hidden field', 'Kecamatan': 'inline label - always visible', 'Kota': 'inline label - always visible', 'Luas_m2': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Sumber': 'hidden field', });
lyr_Jalan_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Fungsi': 'hidden field', 'Nama_Jalan': 'inline label - always visible', 'Status': 'hidden field', 'BWK': 'hidden field', 'SBWP': 'hidden field', 'BLOK': 'hidden field', 'Desa_Lurah': 'hidden field', 'Kecamatan': 'hidden field', 'Kota': 'no label', 'Shape_Leng': 'hidden field', });
lyr_Kecamatan_3.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Jenis Data': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'foto': 'no label', });
lyr_TITIK_LOKASI_PELABUHAN_DI_KOTA_DENPASARpoint_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});