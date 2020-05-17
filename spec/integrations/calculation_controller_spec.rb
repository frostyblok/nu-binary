require 'rails_helper'

RSpec.describe CalculationController, type: :request do
  let(:user) { create(:user) }
  let(:first_string) { 'abcdefg' }
  let(:second_string) { 'beg' }
  let(:calculations_params) do
    {
      first_input: first_string,
      second_input: second_string
    }
  end
  let(:json) { JSON.parse(response.body) }
  let(:headers) do
    {
      'Authorization' => generate_token(user.id),
      'Content-Type' => 'application/json'
    }
  end

  context '#is_continuous' do
    context 'when the strings are continuous substring' do
      before { post '/calculations', params: calculations_params.to_json, headers: headers }

      it 'successfully creates a new team' do
        expect(json['message']).to eq('Computed successfully')
        expect(json['id'].size).to_not be_nil
        expect(json['first_string']).to eq(first_string)
        expect(json['second_string']).to eq(second_string)
        expect(json['result']).to eq('YES')
        expect(json['status']).to eq(200)
      end
    end

    context 'when the strings are not continuous substring' do
      let(:first_string) { 'abcadebabdeb' }
      let(:second_string) { 'baabbd' }

      before { post '/calculations', params: calculations_params.to_json, headers: headers }

      it 'successfully creates a new team' do
        expect(json['message']).to eq('Computed successfully')
        expect(json['id'].size).to_not be_nil
        expect(json['first_string']).to eq(first_string)
        expect(json['second_string']).to eq(second_string)
        expect(json['result']).to eq('NO')
        expect(json['status']).to eq(200)
      end
    end
  end

  context '#show' do
    let(:calculation) { create(:calculation, user: user) }
    before { get '/calculations', params: {}, headers: headers }

    it 'successfully fetches all user calculations' do
      expect(json['message']).to eq('Fetched successfully')
      expect(json['results'].size).to eq(user.calculations.size)
      expect(json['status']).to eq(200)
    end
  end
end
