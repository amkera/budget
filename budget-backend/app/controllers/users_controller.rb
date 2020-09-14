class UsersController < ApplicationController
  #before_action :find_user only: [:show, :edit, :update, :destroy]

  def index
    users = User.all
    render json: users, include: [:expenses]
  end

  def show
    user = User.find(params[:id])
    render json: user, include: [:expense]
  end

end
