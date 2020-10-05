class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :expenses => [:id, :name, :amount, :user_id])
  end
  #params are coming from the URL. Strong params looks for request from /user or /expenses
  #data that URL is sent from is specified/required. then it looks for the key value pairs

  def set_user
    @user = User.find(params[:id])
  end


end
