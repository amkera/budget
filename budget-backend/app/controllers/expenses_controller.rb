class ExpensesController < ApplicationController

  def index
    expenses = Expense.all
    render json: expenses
  end

  def show
    expense = Expense.find(params[:id])
    render json: expense
  end

  def create
    user = User.find(params[:user_id])
    expense = user.expenses.build({
      name: expense.name,
      amount: expense.amount
    })
    expense.save
    render json: expense 
    # if expense.save
    #   render json: expense
    # else
    #   alert: {message: "something went wrong"}
    # end
  end

  def destroy
    expense = Expense.find(params[:id])
    expense.destroy
  end


end
