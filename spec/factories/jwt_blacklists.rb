FactoryBot.define do
  factory :jwt_blacklist do
    jti { "MyString" }
    exp { "2024-03-14 14:16:29" }
  end
end
