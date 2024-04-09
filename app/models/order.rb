class Order < ApplicationRecord
  belongs_to :client
  belongs_to :car
  belongs_to :driver
end

class OrderStatus < ApplicationRecord
  NEW = 0
  IN_PROGRESS = 10
  COMPLETED = 20
end