

var eventoData;
if ($('.search').length > 0) {
	//Esta promise espera a api retornar os dados para então alimentar o array da variável eventoData
	axios('/api/search').then(function(response) { 

		eventoData = response.data.map(function(evento) {
		return {latitude: evento.latitude, longitude: evento.longitude, status: evento.status, address: evento.address, name: evento.animal.name, id_animal: evento.animal_id, id_event: evento.id};
	});
	axios('/api/search/adoptions').then(function(response) { 

		adoptionsData = response.data.map(function(evento) {
		return {latitude: evento.latitude, longitude: evento.longitude, address: evento.address, name: evento.animal.name, id_animal: evento.animal_id, id_adoption: evento.id};
	});
	  
	//chamada do mapa
	initialize("todos");

	});    
};

function displayPins(filter){
    // define a área de mapa a exibir
    var bounds = new google.maps.LatLngBounds();

    //percorre o eventoData e cria marcadores com o conteúdo
	for (var i = 0; i < eventoData.length; i++){
		
		var status = eventoData[i].status;
		if (filter == status || filter == "todos") {
			var latlng = new google.maps.LatLng(eventoData[i].latitude, eventoData[i].longitude);
			var nome = eventoData[i].name;
			var address = eventoData[i].address;
			var id_animal = eventoData[i].id_animal;
			var id_event = eventoData[i].id_event;

			createPins(latlng, nome, status, address, id_animal, id_event);
		// Os valores de latitude e longitude do marcador são adicionados à
		// variável bounds
		bounds.extend(latlng); 
		}
	}

	for (var i = 0)

   // Aqui a API redefine o nível do zoom de acordo com as posições passadas dos casos registrados
   map.fitBounds(bounds);
}

// cria e define o conteúdo dos marcadores
function createPins(latlng, nome, status, address, id_animal, id_event){
	var marker = new google.maps.Marker({
		map: map,
		position: latlng,
		title: nome
	});

   	// Adiciona um listener para o evento click para montar o conteúdo da infowindow
   	google.maps.event.addListener(marker, 'click', function() {
      
		// Variável que define a estrutura do HTML a inserir na Info Window.
		var infoContent = '<div id="container-infos">' +
		'<div class="title-info">' + nome + '</div>' +
		'<div class="title-info">' + address + '</div>' +
		'<div class="content-info">' + status + '</div></div>'+
		'<div class="content-info"><a class="link-green" target="_blank" href="animals/' + id_animal + '/events/' +  id_event +  ' ">Ver caso</a>' + '</div></div>';

		// seta o conteúdo da infoContent
		infos.setContent(infoContent);

		// Este é o evento que abre o info window
		infos.open(map, marker);
   });
}

function initialize(filter) {
	var mapOptions = {
		center: new google.maps.LatLng(-22.8533142,-47.1294165),
		zoom: 12,
		mapTypeId: 'roadmap',
	};
	map = new google.maps.Map(document.getElementById('map-search'), mapOptions);

	// Cria apenas, o conteudo é adicionado no createPins
	infos = new google.maps.InfoWindow();

	google.maps.event.addListener(map, 'click', function() {
		infos.close();
	});

	// Chamada para a função que vai percorrer as informações do eventoData e criar os pins no mapa
	displayPins(filter);
}