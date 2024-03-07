require 'rails_helper'

RSpec.describe 'Drivers API', type: :request do
  it_behaves_like "API CRUD operations", :driver, "drivers"
end