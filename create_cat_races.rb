races = [
      ['Sem raça definida', 'Sem raça definida'],
      ['Abissínio', 'Abissínio'],
      ['American Shorthair', 'American Shorthair'],
      ['American Short hair', 'American Short hair'],
      ['Bengal', 'Bengal'],
      ['Brasileiro Real', 'Brasileiro Real'],
      ['British', 'British'],
      ['Cornish Rex', 'Cornish Rex'],
      ['Exótico', 'Exótico'],
      ['Gato Srd Pelo Curto', 'Gato Srd Pelo Curto'],
      ['Himaláia', 'Himaláia'],
      ['Maine Coon', 'Maine Coon'],
      ['Munchkin', 'Munchkin'],
      ['Oriental', 'Oriental'],
      ['Persa', 'Persa'],
      ['Pixie Bob', 'Pixie Bob'],
      ['Ragdoll', 'Ragdoll'],
      ['Russian Blue', 'Russian Blue'],
      ['Sagrado Da Birmânia ', 'Sagrado Da Birmânia '],
      ['Savannah', 'Savannah'],
      ['Scottish Fold', 'Scottish Fold'],
      ['Siamês', 'Siamês'],
      ['Siberiana', 'Siberiana'],
      ['Sphynx', 'Sphynx'],
      ['York', 'York']
    ]
    races.each { |races_arr| RaceCat.create!(name: races_arr[0]) }

    