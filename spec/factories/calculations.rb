FactoryBot.define do
  factory :calculation do
    first_string { 'Chelsea' }
    second_string { 'Chelsea' }
    user { create(:user) }
  end
end
