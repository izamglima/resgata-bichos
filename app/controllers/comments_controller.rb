class CommentsController < ApplicationController
  #mover do show do animal para show do evento
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      #@animal = Animal.find(params[:animal_id])
      #@event = @animal.events.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:body)
    end

end