/* global google */

let map;
const centerMap = { lat: -5.749025, lng: -35.2626732 };
var marker;
var infowindow;

class LocalControl {
    constructor(map) {
        this.controlDiv = document.createElement('div');
        this.controlUI = document.createElement('div');
        this.controlText = document.createElement('div');

        this.controlUI.style.backgroundColor = 'rgba(255,255,255)';
        this.controlUI.style.border = '2px solid #ebebeb';
        this.controlUI.style.borderRadius = '15px';
        this.controlUI.style.padding = '15px';
        this.controlUI.style.margin = '15px';
        this.controlUI.className = 'a';


        this.controlDiv.appendChild(this.controlUI);

        this.controlText.style.fontSize = '16px';
        this.controlText.style.textAlign = 'center';
        this.controlText.style.lineHeight = '20px';
        this.controlText.style.color = '#333';
        this.controlText.style.padding = '9px';
        this.controlText.className = 'botao';

        this.controlUI.appendChild(this.controlText);

        this.controlUI.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) { // callback de sucesso
                        // ajusta a posiÃ§Ã£o do marker para a localizaÃ§Ã£o do usuÃ¡rio
                        marker = new google.maps.Marker({
                            map: map,
                            draggable: false,
                            animation: google.maps.Animation.DROP,
                            position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                            icon: 'img/mapa/user.png'
                        });
                        infowindow = new google.maps.InfoWindow({
                            content: '<h3>LocalizaÃ§Ã£o</h3>'
                        });

                        marker.addListener('click', function() {
                            infowindow.open(map, marker);
                        });
                        map.panTo(marker.position);
                        map.setZoom(16);
                    },
                    function(error) { // callback de erro
                        alert('Erro ao obter localização!');
                        console.log('Erro ao obter localização.', error);
                    });
                this.controlDiv.style.display = 'none';
            } else {
                console.log('Navegador nÃ£o suporta Geolocalização!');
            }
        });
    }
}

function marcadores() {
    var locations = [
        ['Posto Ipiranga', -5.7413882, -35.2669367, 'img/mapa/valid.png'],
        ['Posto Interlagos', -5.7579979, -35.2638898, 'img/mapa/not-valid.png'],
        ['Posto Carrefour', -5.7592728, -35.2475323, 'img/mapa/valid.png'],
        ['Posto Vale Dourado', -5.7594884, -35.2647112, 'img/mapa/not-valid.png'],
        ['Posto Ale', -5.768729, -35.2672614, 'img/mapa/valid.png'],
        ['Posto Leganes', -5.7447409, -35.26769, 'img/mapa/not-valid.png'],
        ['Posto Petrobras', -5.7658638, -35.2788638, 'img/mapa/valid.png'],
        ['Posto Petrobras', -5.7622468, -35.2877292, 'img/mapa/not-valid.png'],
        ['Posto Petrobras', -5.7716351, -35.2690476, 'img/mapa/valid.png'],
        ['Posto Petrobras', 5.7678136, 35.254553, 'img/mapa/not-valid.png'],
        ['Posto Petrobras', -5.7627432, -35.2518332, 'img/mapa/valid.png'],
        ['Posto Petrobras', -5.760228, -35.2481881, 'img/mapa/not-valid.png'],
        ['Posto Ale', -5.6612735, -35.2549529, 'img/mapa/valid.png'],
        ['Posto Ale', -5.768729, -35.2672613, 'img/mapa/not-valid.png'],
        ['Posto Macaco', -5.7740969, -35.2591476, 'img/mapa/valid.png'],
        ['Posto Ale', -5.7712735, -35.2549526, 'img/mapa/not-valid.png'],
        ['Posto Cirne', -5.7669697, -35.2780742, 'img/mapa/valid.png'],
        ['Posto Canaã', -5.767795, -35.2545825, 'img/mapa/not-valid.png']
    ];

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: locations[i][3]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }
}

function initMap() {
    const mapOptions = {
        center: centerMap,
        zoom: 14,
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    marcadores();

    const centerControl = new LocalControl(map);
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(centerControl.controlDiv);
}