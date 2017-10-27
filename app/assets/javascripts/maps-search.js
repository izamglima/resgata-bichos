var eventData;
var adoptionsData;

if ($('.search').length > 0) {
	//Esta promise espera a api retornar os dados para então alimentar o array da variável eventData
	axios('/api/search').then(function(response) { 
		eventData = response.data.map(function(evento) {
			return {latitude: evento.latitude, longitude: evento.longitude, status: evento.status, address: evento.address, name: evento.animal.name, id_animal: evento.animal_id, id_event: evento.id};
		});
	})
	.then(function(){
		axios('/api/search/adoptions').then(function(response) { 
			adoptionsData = response.data.map(function(evento) {
				return {latitude: evento.latitude, longitude: evento.longitude, address: evento.address, name: evento.animal.name, id_animal: evento.animal_id, id_adoption: evento.id};
			});
		})
		.then(function(){
			initialize("todos");
		});
	});
};

function displayPins(filter){
    // define a área de mapa a exibir
    var bounds = new google.maps.LatLngBounds();

    //percorre o eventData e cria marcadores com o conteúdo
	for (var i = 0; i < eventData.length; i++){
		
		var status = eventData[i].status;
		if (filter == status || filter == "todos") {
			var latlng = new google.maps.LatLng(eventData[i].latitude, eventData[i].longitude);
			var nome = eventData[i].name;
			var address = eventData[i].address;
			var id_animal = eventData[i].id_animal;
			var id_event = eventData[i].id_event;

			createPins(latlng, nome, status, address, id_animal, id_event, null);
		// Os valores de latitude e longitude do marcador são adicionados à
		// variável bounds
		bounds.extend(latlng); 
		}
	}

	for (var i = 0; i < adoptionsData.length; i++) {
		if (filter == "adoptions" || filter == "todos"){
			var latlng = new google.maps.LatLng(adoptionsData[i].latitude, adoptionsData[i].longitude);
			var nome = adoptionsData[i].name;
			var address = adoptionsData[i].address;
			var id_animal = adoptionsData[i].id_animal;
			var id_adoption = adoptionsData[i].id_adoption;

			createPins(latlng, nome, null, address, id_animal, null, id_adoption);
			bounds.extend(latlng);
		}
	}

   // Aqui a API redefine o nível do zoom de acordo com as posições passadas dos casos registrados
   map.fitBounds(bounds);
}

// cria e define o conteúdo dos marcadores
function createPins(latlng, nome, status, address, id_animal, id_event, id_adoption){
	var isAdoption = status === null && id_event === null;

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
		'<div class="title-info">' + address + '</div>';

		if (isAdoption) {
			infoContent += '<div class="content-info">Para adoção</div></div>' +
			'<div class="content-info"><a class="link-green" target="_blank" href="animals/' + 
			id_animal + '/adoptions/' +  id_adoption +  ' ">Ver animal</a>' + '</div></div>';
		} else {
			infoContent += '<div class="content-info">' + status + '</div></div>' +
			'<div class="content-info"><a class="link-green" target="_blank" href="animals/' + 
			id_animal + '/events/' +  id_event +  ' ">Ver animal</a>' + '</div></div>';
		}

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

	// Chamada para a função que vai percorrer as informações do eventData e criar os pins no mapa
	displayPins(filter);
}