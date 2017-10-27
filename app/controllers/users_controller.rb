class UsersController < ApplicationController
  
  def show
    @user = User.all.where(user_id: params[:user_id])
  end
end	