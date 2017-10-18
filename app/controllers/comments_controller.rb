class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    respond_to do |format|
      
      if @comment.save
        format.html { redirect_to :back, notice: 'Comentário adicionado com sucesso' }
        format.json { render :show, status: :created, location: @image }
      else
        format.html { redirect_to(:back) }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:body, :event_id, :user_id)
    end

end