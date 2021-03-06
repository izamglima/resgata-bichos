class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = Event.all.where(animal_id: params[:animal_id])
  end

  # GET /events/1
  # GET /events/1.json
  def show
    @animal = Animal.find(params[:animal_id])
    @event = @animal.events.find(params[:id])
    @comment = @event.comments.new #cria um novo comentário para aquele evento
    @comments = @event.comments

  end

  # GET /events/new
  def new
    @animal = Animal.find(params[:animal_id])
    @event = Event.new(animal: @animal)
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @animal = Animal.find(params[:animal_id])
    @event = Event.new(event_params)
    @event.animal = @animal
    
    #se encontrado, envia email para usuário com animal perdido
    if @event.status == "encontrado"
      #chama método no model
      @nearbys = @event.same_region

      if @nearbys
        #busca os users
        @nearbys.each do |event|
          @animal_region = event.animal
          @user_region = event.animal.user
          NearbyMailer.region_email(@user_region, @animal_region, @event.animal).deliver_now
        end
      end
    end

    respond_to do |format|
      if @event.save
        format.html { redirect_to :controller => 'search', :action => 'search',  notice: 'Event criado com sucesso' }
        format.json { render :show, status: :created, location: @event }
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
      if @event.update(event_params)
        format.html { redirect_to animal_events_path, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to animal_events_path, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @animal = Animal.find(params[:animal_id])
      @event = @animal.events.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:data_event, :status, :resolved, :comment, :latitude, :longitude, :address)
    end
end
