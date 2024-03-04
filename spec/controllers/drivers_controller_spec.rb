require 'rails_helper'

RSpec.describe 'Drivers API', type: :request do
  describe 'GET /drivers' do
    before do
      FactoryBot.create_list(:driver, 10)
    end

    it 'returns all drivers' do
      get '/drivers'

      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body).size).to eq(10)
    end

  end

  describe 'GET /drivers/:id' do
    before do 
        @driver = FactoryBot.create(:driver)
        get "/drivers/#{@driver.id}" 
    end
    context 'when the record exists' do
      it 'returns the driver' do
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)["id"]).to eq(@driver.id)
      end
    end
  end




end