class Order < ApplicationRecord
  belongs_to :client
  belongs_to :car
  belongs_to :driver
end
