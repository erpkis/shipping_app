class DriversController < ApiBaseController
  before_action :authenticate_user!
  private

  def resource_class
    Driver
  end

  def resource_params
    params.require(:driver).permit(:name, :surname, :phone_number, :address, :city, :postal_code)
  end

  def authenticate_user!
    binding.pry
    super
  end
end
