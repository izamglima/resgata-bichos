class AnimalsController < ApplicationController
    before_action :set_animal, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, except: [:show]

    # GET /animals
    # GET /animals.json
    def index
        @animals = current_user.animals.all
    end

    # GET /animals/1
    # GET /animals/1.json
    def show
    end

    # GET /animals/new
    def new
        @dog_races = dog_races
        @cat_races = cat_races
        @ages = ages
        @animals = current_user.animals.all
        @animal = current_user.animals.new
        
    end

    # GET /animals/1/edit
    def edit
        @dog_races = dog_races
        @cat_races = cat_races
        @ages = ages
        @animals = current_user.animals.all
    end

    # POST /animals
    # POST /animals.json
    def create
        @animals = current_user.animals.all
        @animal = current_user.animals.new(animal_params)

        respond_to do |format|
            if @animal.save
                format.html { redirect_to new_animal_image_path(@animal, { status: params[:status] }), notice: 'Animal was successfully created.' }
                format.json { render :show, status: :created, location: @animal }
            else
                @dog_races = dog_races
                @cat_races = cat_races
                @ages = ages
                format.html { render :new }
                format.json { render json: @animal.errors, status: :unprocessable_entity }
            end
        end
    end

    # PATCH/PUT /animals/1
    # PATCH/PUT /animals/1.json
    def update
        respond_to do |format|
            if @animal.update(animal_params)
                format.html { redirect_to @animal, notice: 'Animal was successfully updated.' }
                format.json { render :show, status: :ok, location: @animal }
            else
                format.html { render :edit }
                format.json { render json: @animal.errors, status: :unprocessable_entity }
          end
        end
    end

    # DELETE /animals/1
    # DELETE /animals/1.json
    def destroy
        @animal.destroy
        respond_to do |format|
            format.html { redirect_to animals_url, notice: 'Animal was successfully destroyed.' }
            format.json { head :no_content }
        end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal
        @animal = Animal.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def animal_params
        params.require(:animal).permit(:name, :race, :color, :animal_type, :sex, :age, :size)
    end

    def dog_races
    [
      ['Sem raça definida', 'Sem raça definida'],
      ['Affenpinscher', 'Affenpinscher'],
      ['Afghan Hound', 'Afghan Hound'],
      ['Airedale Terrier', 'Airedale Terrier'],
      ['Akita', 'Akita'],
      ['American Bully', 'American Bully'],
      ['American Pit Bull Terrier', 'American Pit Bull Terrier'],
      ['American Staffordshire Terrier', 'American Staffordshire Terrier'],
      ['American Stafforshire', 'American Stafforshire'],
      ['Australian Cattle Dog', 'Australian Cattle Dog'],
      ['Australian Shepherd ', 'Australian Shepherd '],
      ['Basenji', 'Basenji'],
      ['Basset Hound', 'Basset Hound'],
      ['Beagle ', 'Beagle '],
      ['Bearded Collie', 'Bearded Collie'],
      ['Bernese Mountain Dog', 'Bernese Mountain Dog'],
      ['Bichon Frisé', 'Bichon Frisé'],
      ['Bichon Havanês', 'Bichon Havanês'],
      ['Biewer Terrier', 'Biewer Terrier'],
      ['Billy', 'Billy'],
      ['Boerboel', 'Boerboel'],
      ['Boiadeiro Bernês', 'Boiadeiro Bernês'],
      ['Boiadeiro De Entlebuch', 'Boiadeiro De Entlebuch'],
      ['Border Collie', 'Border Collie'],
      ['Boston Terrier', 'Boston Terrier'],
      ['Bouvier Des Flandres', 'Bouvier Des Flandres'],
      ['Boxer', 'Boxer'],
      ['Braco Alemão (kurzhaar)', 'Braco Alemão (kurzhaar)'],
      ['Breton', 'Breton'],
      ['Buldogue Americano', 'Buldogue Americano'],
      ['Buldogue Campeiro', 'Buldogue Campeiro'],
      ['Buldogue Francês', 'Buldogue Francês '],
      ['Buldogue Inglês', 'Buldogue Inglês'],
      ['Bull Terrier', 'Bull Terrier'],
      ['Bull Terrier Miniatura', 'Bull Terrier Miniatura'],
      ['Bulmastife', 'Bulmastife'],
      ['Cairn Terrier', 'Cairn Terrier'],
      ['Cane Corso', 'Cane Corso'],
      ['Cão Das Montanhas Do Atlas ', 'Cão Das Montanhas Do Atlas '],
      ['Cão De Crista Chinês', 'Cão De Crista Chinês'],
      ['Cão De Santo Humberto', 'Cão De Santo Humberto'],
      ['Cavalier King Charles Spaniel', 'Cavalier King Charles Spaniel'],
      ['Chesapeake Bay Retriever', 'Chesapeake Bay Retriever'],
      ['Chihuahua', 'Chihuahua'],
      ['Chinese Crested Dog', 'Chinese Crested Dog'],
      ['Chow Chow', 'Chow Chow'],
      ['Cocker', 'Cocker'],
      ['Cocker Spaniel Americano', 'Cocker Spaniel Americano'],
      ['Cocker Spaniel Inglês', 'Cocker Spaniel Inglês'],
      ['Collie', 'Collie'],
      ['Coonhound Preto E Castanho', 'Coonhound Preto E Castanho'],
      ['Coton De Tuléar', 'Coton De Tuléar'],
      ['Dachshund (teckel)', 'Dachshund (teckel)'],
      ['Dálmata', 'Dálmata'],
      ['Dobermann', 'Dobermann'],
      ['Dog', 'Dog'],
      ['Dogo Argentino', 'Dogo Argentino'],
      ['Dogue Alemão', 'Dogue Alemão'],
      ['Dogue De Bordeaux', 'Dogue De Bordeaux'],
      ['Ferret', 'Ferret'],
      ['Fila Brasileiro', 'Fila Brasileiro'],
      ['Flat Coated Retriever', 'Flat Coated Retriever'],
      ['Foxhound Americano', 'Foxhound Americano'],
      ['Fox Terrier De Pêlo Liso', 'Fox Terrier De Pêlo Liso'],
      ['Fox Terrier Pêlo Duro', 'Fox Terrier Pêlo Duro'],
      ['Galgo Espanhol', 'Galgo Espanhol'],
      ['Golden', 'Golden'],
      ['Golden Retriever', 'Golden Retriever'],
      ['Greinhound', 'Greinhound'],
      ['Griffon De Bruxelas', 'Griffon De Bruxelas'],
      ['Husky Siberiano', 'Husky Siberiano'],
      ['Jack Russel', 'Jack Russel'],
      ['Kerry Blue Terrier', 'Kerry Blue Terrier'],
      ['King Charles Spaniel', 'King Charles Spaniel'],
      ['Kuvasz', 'Kuvasz'],
      ['Labrador', 'Labrador'],
      ['Labrador Retriever', 'Labrador Retriever'],
      ['Lhasa Apso', 'Lhasa Apso'],
      ['Lulu Da Pomerânia (spitz)', 'Lulu Da Pomerânia (spitz)'],
      ['Malamute Do Alaska', 'Malamute Do Alaska'],
      ['Maltês', 'Maltês'],
      ['Mastiff', 'Mastiff'],
      ['Mastiff Inglês', 'Mastiff Inglês'],
      ['Mastim Dos Pireneus', 'Mastim Dos Pireneus'],
      ['Mastim Napolitano', 'Mastim Napolitano'],
      ['Mini Coelho', 'Mini Coelho'],
      ['Norwich Terrier', 'Norwich Terrier'],
      ['Olde Englishbulldogge Brasileiro', 'Olde Englishbulldogge Brasileiro'],
      ['Old English Sheepdog', 'Old English Sheepdog'],
      ['Papillon', 'Papillon'],
      ['Parson Russell Terrier', 'Parson Russell Terrier'],
      ['Pastor Alemão', 'Pastor Alemão'],
      ['Pastor Alemão Branco', 'Pastor Alemão Branco'],
      ['Pastor Australiano (shepherd)', 'Pastor Australiano (shepherd)'],
      ['Pastor Belga', 'Pastor Belga'],
      ['Pastor Maremano Abruzês', 'Pastor Maremano Abruzês'],
      ['Pequeno Lebrel Italiano', 'Pequeno Lebrel Italiano'],
      ['Pequinês', 'Pequinês'],
      ['Perdigueiro Português', 'Perdigueiro Português'],
      ['Pinscher', 'Pinscher'],
      ['Pinscher Miniatura', 'Pinscher Miniatura'],
      ['Pit Bull Terrier', 'Pit Bull Terrier'],
      ['Pointer Inglês', 'Pointer Inglês'],
      ['Poodle', 'Poodle'],
      ['Poodle Micro Toy', 'Poodle Micro Toy'],
      ['Poodle Toy', 'Poodle Toy'],
      ['Pug', 'Pug'],
      ['Puli', 'Puli'],
      ['Rhodesian Ridgeback', 'Rhodesian Ridgeback'],
      ['Rottweiler', 'Rottweiler'],
      ['Samoieda', 'Samoieda'],
      ['São Bernardo', 'São Bernardo'],
      ['Schipperke', 'Schipperke'],
      ['Schnauzer', 'Schnauzer'],
      ['Schnauzer Gigante', 'Schnauzer Gigante'],
      ['Schnauzer Miniatura', 'Schnauzer Miniatura'],
      ['Setter Inglês', 'Setter Inglês'],
      ['Setter Irlandês', 'Setter Irlandês'],
      ['Shar Pei', 'Shar Pei'],
      ['Shiba', 'Shiba'],
      ['Shih-tzu', 'Shih-tzu'],
      ['Skye Terrier', 'Skye Terrier'],
      ['Smoushond Holandês', 'Smoushond Holandês'],
      ['Spaniel Bretão', 'Spaniel Bretão'],
      ['Spitz Alemão', 'Spitz Alemão'],
      ['Spitz Japonês', 'Spitz Japonês'],
      ['Springer Spaniel Inglês', 'Springer Spaniel Inglês'],
      ['Staffordshire Bull Terrier', 'Staffordshire Bull Terrier'],
      ['Super Cão (Rot C/ Pit)', 'Super Cão (Rot C/ Pit)'],
      ['Teckel', 'Teckel'],
      ['Terra Nova', 'Terra Nova'],
      ['Terrier Brasileiro (fox Paul.)', 'Terrier Brasileiro (fox Paul.)'],
      ['Toy Fox Terrier', 'Toy Fox Terrier'],
      ['Veadeiro Pampeano', 'Veadeiro Pampeano'],
      ['Weimaraner', 'Weimaraner'],
      ['Welsh Corgi Cardigan', 'Welsh Corgi Cardigan'],
      ['Welsh Corgi Pembroke', 'Welsh Corgi Pembroke'],
      ['Welsh Springer Spaniel', 'Welsh Springer Spaniel'],
      ['Welsh Terrier', 'Welsh Terrier'],
      ['West Highland White Terrier', 'West Highland White Terrier'],
      ['Whippet', 'Whippet'],
      ['York Chocolat', 'York Chocolat'],
      ['Yorkshire', 'Yorkshire'],
      ['Yorkshire Terrier', 'Yorkshire Terrier']
    ]
    end

    def cat_races
    [
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
    end

    def ages
    [
      ['Até 1 ano', 'Até 1 ano'],
      ['1', '1'],
      ['2','2'],
      ['3','3'],
      ['4','4'],
      ['5','5'],
      ['6','6'],
      ['7','7'],
      ['8','8'],
      ['9','9'],
      ['10','10'],
      ['11','11'],
      ['12','12'],
      ['13','13'],
      ['14','14'],
      ['15','15'],
      ['16','16'],
      ['17','17'],
      ['18','18'],
      ['19','19'],
      ['Mais que 20','Mais que 20']
    ]
    end
end
