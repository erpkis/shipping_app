require 'rails_helper'

RSpec.describe 'Orders API', type: :request do
  it_behaves_like "API CRUD operations", :order, "orders", {delivery_location: "test"}
end