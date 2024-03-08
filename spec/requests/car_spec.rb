require 'rails_helper'

RSpec.describe "Cars", type: :request do
  it_behaves_like "API CRUD operations", :car, "cars", {name: "New name"}
end
