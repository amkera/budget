class UsersController < ApplicationController
  #before_action :find_user only: [:show, :edit, :update, :destroy]

  def index
    users = User.all
    render json: users #include: [:expenses]
  end

  def show
    user = User.find(params[:id])
    render json: user #include: [:expense]
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end


end
