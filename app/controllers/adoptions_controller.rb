class AdoptionsController < ApplicationController
  #before_action :set_adoption, only: [:show, :edit, :update, :destroy]

  def index
    @adoptions = Adoption.where(animal_id: params[:animal_id])
  end

  def show
    @animal = Animal.find(params[:animal_id])
    @adoption = Adoption.find(params[:id])    
    @comment = @adoption.comments.new #cria um novo comentário para aquele evento
    @comments = @adoption.comments
  end

  
  def new
    @animal = Animal.find(params[:animal_id])
    @adoption = Adoption.new(animal: @animal)
  end

  
  def edit
  end

  def create
    @animal = Animal.find(params[:animal_id])
    @adoption = Adoption.new(adoption_params)
    @adoption.animal = @animal

    respond_to do |format|
      if @adoption.save
        format.html { redirect_to :controller => 'search', :action => 'search',  notice: 'Adoção criada com sucesso' }
        format.json { render :show, status: :created, location: @adoption }
      else
        format.html { render :new }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @adoption.update(adoption_params)
        format.html { redirect_to animal_events_path, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @adoption }
      else
        format.html { render :edit }
        format.json { render json: @adoption.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @adoption.destroy
    respond_to do |format|
      format.html { redirect_to animal_events_path, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def adoption_params
      params.require(:adoption).permit(:date_adoption, :comment, :latitude, :longitude, :address, :vaccinated)
    end
end
