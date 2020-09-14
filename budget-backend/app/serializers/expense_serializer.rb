class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :user_id
  belongs_to :user 
end
