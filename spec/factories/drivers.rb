FactoryBot.define do
  factory :driver, class: Driver do
    name { Faker::Name.name }
    surname { Faker::Name.name }
    phone_number { "123-123-123" }
  end
end