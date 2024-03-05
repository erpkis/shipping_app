class DriversController < ApiBaseController
  
  private

  def resource_class
    Driver
  end

  def resource_params
    params.require(:driver).permit(:name, :surname, :phone_number, :address, :city, :postal_code)
  end
end
