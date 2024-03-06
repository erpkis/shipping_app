FactoryBot.define do
  factory :order do
    delivery_date { "2024-03-06" }
    delivery_location { "2024-03-06" }
    status { 1 }
    description { "MyString" }
    weight { "MyString" }
    client { nil }
    car { nil }
    driver { nil }
  end
end
