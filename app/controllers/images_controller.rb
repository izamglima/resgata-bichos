class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :edit, :update, :destroy]

  # GET /images
  # GET /images.json
  def index
    @images = Image.where(animal_id: params[:animal_id])
  end

  # GET /images/1
  # GET /images/1.json
  def show
    @animal = Animal.find(params[:animal_id])
    @images = @animal.images
  end

  # GET /images/new
  def new
    @animal = Animal.find(params[:animal_id])
    @animal_images = @animal.images
  
    @image = Image.new(animal: @animal)
  end

  # GET /images/1/edit
  def edit
    @animal_images = @animal.images
  end

  # POST /images
  # POST /images.json
  def create
    @animal = Animal.find(params[:animal_id])
    @image = @animal.images.new(image_params)
    respond_to do |format|
      if @image.save
        format.html { redirect_to new_animal_event_path(@animal, { status: params[:status] }), notice: 'Imagem criada com sucesso' }
        format.json { render :show, status: :created, location: @image }
      else
        @animal = Animal.find(params[:animal_id])
        @animal_images = @animal.images
        @image = Image.new(animal: @animal)
        format.html { render :new }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /images/1
  # PATCH/PUT /images/1.json
  def update
    respond_to do |format|
      if @image.update(image_params)
        format.html { redirect_to animal_image_path, notice: 'Image was successfully updated.' }
        format.json { render :show, status: :ok, location: @image }
      else
        format.html { render :edit }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /images/1
  # DELETE /images/1.json
  def destroy
    @image.destroy

    respond_to do |format|
      format.html { redirect_to animal_images_url, notice: 'Image was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  
  # Use callbacks to share common setup or constraints between actions.
  def set_image
    @animal = Animal.find(params[:animal_id])
    @image = @animal.images.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def image_params
    params.fetch(:image, {}).permit(:image)
  end
end
