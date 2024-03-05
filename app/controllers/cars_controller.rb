class CarsController < ApiBaseController
    private

    def resource_class
        Car
    end

    def resource_params
        params.require(:car).permit(:name, :model, :year, :vin, :fuel_type, :capacity)
    end
end
