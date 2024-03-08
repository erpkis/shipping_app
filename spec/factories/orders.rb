FactoryBot.define do
  factory :order do
    delivery_date { "2024-03-06" }
    delivery_location { "Warsaw" }
    status { 1 }
    description { "MyString" }
    weight { "MyString" }
    client_id { FactoryBot.create(:client).id }
    car_id { FactoryBot.create(:car).id }
    driver_id { FactoryBot.create(:driver).id }
  end
end
