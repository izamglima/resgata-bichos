var eventoData;
//Esta promise espera a api retornar os dados para então alimentar o array da variável eventoData
axios('/api/search').then(function(response) { 

  eventoData = response.data.map(function(evento) {
    return {latitude: evento.latitude, longitude: evento.longitude, status: evento.status, id: evento.id};
  });
  //chamada do mapa
  initialize();

});
// Esta função vai percorrer a informação contida na variável eventoData
// e cria os marcadores através da função createMarker
function displayMarkers(){

   // esta variável vai definir a área de mapa a abranger e o nível do zoom
   // de acordo com as posições dos marcadores
   var bounds = new google.maps.LatLngBounds();

   // Loop que vai percorrer a informação contida em eventoData 
   // para que a função createMarker possa criar os marcadores 
   for (var i = 0; i < eventoData.length; i++){

      var latlng = new google.maps.LatLng(eventoData[i].latitude, eventoData[i].longitude);
      var nome = eventoData[i].nome;
      var status = eventoData[i].status;
      var id = eventoData[i].id;

      createMarker(latlng, nome, status, id);

      // Os valores de latitude e longitude do marcador são adicionados à
      // variável bounds
      bounds.extend(latlng); 
   }

   // Depois de criados todos os marcadores,
   // a API, através da sua função fitBounds, vai redefinir o nível do zoom
   // e consequentemente a área do mapa abrangida de acordo com
   // as posições dos marcadores
   map.fitBounds(bounds);
}

// Função que cria os marcadores e define o conteúdo de cada Info Window.
function createMarker(latlng, nome, status, id){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: nome
   });

   // Evento que dá instrução à API para estar alerta ao click no marcador.
   // Define o conteúdo e abre a Info Window.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Variável que define a estrutura do HTML a inserir na Info Window.
      var iwContent = '<div id="iw_container">' +
      '<div class="iw_title">' + nome + '</div>' +
      '<div class="iw_title">' + id + '</div>' +
      '<div class="iw_content">' + status + '</div></div>';
      
      // O conteúdo da variável iwContent é inserido na Info Window.
      infoWindow.setContent(iwContent);

      // A Info Window é aberta com um click no marcador.
      infoWindow.open(map, marker);
   });
}

function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(-22.8533142,-47.1294165),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

  map = new google.maps.Map(document.getElementById('map-search'), mapOptions);

  // Cria a nova Info Window com referência à variável infoWindow.
  // O conteúdo da Info Window é criado na função createMarker.
  infoWindow = new google.maps.InfoWindow();

  // Evento que fecha a infoWindow com click no mapa.
  google.maps.event.addListener(map, 'click', function() {
    infoWindow.close();
  });

  // Chamada para a função que vai percorrer a informação
  // contida na variável markersData e criar os marcadores a mostrar no mapa
  displayMarkers();
}
