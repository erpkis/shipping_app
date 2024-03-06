class Order < ApplicationRecord
  belongs_to :customer
  belongs_to :car
  belongs_to :driver
end
