class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :expenses
  has_many :expenses
end
