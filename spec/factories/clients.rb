FactoryBot.define do
  factory :client do
    name { Faker::Name.name }
    address { Faker::Address.street_name }
    city { Faker::Address.city }
    postal_code { Faker::Address.zip_code }
  end
end
