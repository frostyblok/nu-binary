FactoryBot.define do
  factory :user do
    password { 'password' }
    email { "test@example.com" }
  end
end
