FactoryBot.define do
  factory :car do
    name {SecureRandom.alphanumeric(5)}
    model {SecureRandom.alphanumeric(6)}
    year {SecureRandom.alphanumeric(4)}
    vin {SecureRandom.alphanumeric(17)}
    fuel_type {"diesel"}
    capacity {5000}
  end
end
