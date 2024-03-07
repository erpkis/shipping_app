RSpec.shared_examples "API CRUD operations" do |model_factory, endpoint|
    let(:valid_attributes) { FactoryBot.attributes_for(model_factory) }
    let(:model_class) { model_factory.to_s.classify.constantize }
    let(:model_instance) { FactoryBot.create(model_factory) }
    let(:model_symbol) { model_factory.to_s.singularize.to_sym }
  
    describe "GET /#{endpoint}" do
      before do
        FactoryBot.create_list(model_factory, 10)
        get "/#{endpoint}"
      end
  
      it "returns all instances" do
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body).size).to eq(10)
      end
    end
  
    describe "GET /#{endpoint}/:id" do
      before { get "/#{endpoint}/#{model_instance.id}" }
  
      it "returns the instance" do
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)["id"]).to eq(model_instance.id)
      end
    end
  
    describe "POST /#{endpoint}" do
      before { post "/#{endpoint}", params: { model_symbol => valid_attributes } }
  
      it "creates a new instance" do
        expect(response).to have_http_status(201)
        expect(model_class.count).to eq(1)
      end
    end
  
    describe "PUT /#{endpoint}/:id" do
      let(:new_attributes) { { name: 'New Name' } }
  
      before { put "/#{endpoint}/#{model_instance.id}", params: { model_symbol => new_attributes } }
  
      it "updates the instance" do
        expect(response).to have_http_status(200)
        expect(model_instance.reload.name).to eq('New Name')
      end
    end
  
    describe "DELETE /#{endpoint}/:id" do
      before { delete "/#{endpoint}/#{model_instance.id}" }
  
      it "deletes the instance" do
        expect(response).to have_http_status(204)
        expect(model_class.exists?(model_instance.id)).to be false
      end
    end
  end