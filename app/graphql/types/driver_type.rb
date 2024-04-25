# frozen_string_literal: true

module Types
    class DriverType < Types::BaseObject
        field :id, ID, null: false
        field :name, String
        field :surname, String
        field :phone_number, String
        field :address, String
        field :city, String
        field :postal_code, String
    end
end
  