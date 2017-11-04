class AnimalsController < ApplicationController
    before_action :set_animal, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, except: [:show]
    before_filter :require_permission, only: [:edit, :destroy]

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
        @status_animal = params[:status]
        
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
        @user = current_user
        
        respond_to do |format|
            if @animal.save

                format.html { redirect_to new_animal_image_path(@animal, { status: params[:status] }), notice: 'Animal criado com sucesso' }
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
        params.require(:animal).permit(:name, :color, :animal_type, :sex, :age, :size)
    end

    def require_permission
      if current_user != Animal.find(params[:id]).user
        redirect_to root_path
      end
    end

    def dog_races
      RaceDog.all.map { |race| [ race.name, race.name ] }
    end

    def cat_races
      RaceCat.all.map { |race| [ race.name, race.name ] }
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
