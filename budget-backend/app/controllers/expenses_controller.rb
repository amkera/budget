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
    expense = Expense.create(expense_params)
    render json: expense
  end

  def destroy
    expense = Expense.find(params[:id])
    expense.destroy
  end

  private

  def expense_params
    #params.permit(:name, :amount, :user_id)
    params.require(:expense).permit(:name, :amount, :user_id)
  end


end


# def create
#   user = User.find(params[:user_id])
#   expense = user.expenses.build({
#     name: expense.name,
#     amount: expense.amount
#   })
#   expense.save
#   render json: expense
# end
