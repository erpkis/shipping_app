require 'rails_helper'

RSpec.describe "Clients", type: :request do
  it_behaves_like "API CRUD operations", :client, "clients"
end
