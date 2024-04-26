# frozen_string_literal: true

module Types
    class DriverType < Types::BaseObject
        field :id, ID, null: false
        field :name, String
    end
end
  