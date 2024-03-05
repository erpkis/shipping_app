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

  describe 'POST /drivers' do
    let(:valid_attributes) { { name: 'John Doe', email: 'john@example.com' } }

    context 'when the request is valid' do
      before { post '/drivers', params: valid_attributes }

      it 'creates a driver' do
        expect(JSON.parse(response.body)["name"]).to eq('John Doe')
        expect(response).to have_http_status(201)
      end

    end
  end

  describe 'PUT /drivers/:id' do
    let(:valid_attributes) { { name: 'John Doe' } }
    before do
      @driver =  FactoryBot.create(:driver)
    end

    context 'when the record exists' do
      before { put "/drivers/#{@driver.id}", params: valid_attributes }

      it 'updates the record' do
        expect(JSON.parse(response.body)["name"]).to eq('John Doe')
        expect(response).to have_http_status(204)
      end

    end
  end

  describe 'DELETE /drivers/:id' do
    let!(:driver) { create(:driver) }

    before { delete "/drivers/#{driver.id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end



end