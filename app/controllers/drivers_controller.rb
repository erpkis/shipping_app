class DriversController < ApplicationController
  before_action :set_driver, only: %i[show update destroy]
  def index
    @drivers = Driver.all
    render json: @drivers
  end

  def show
    render json: @driver
  end

  def update
    if @driver.update(driver_params)
      render json: @driver
    else
      render json: @driver.errors
    end
  end

  def create
    @driver = Driver.create(driver_params)
    if @driver.save
      render json: @driver
    else
      render json: @driver.errors
    end
  end

  def destroy
    @driver.destroy
  end

  private

  def set_driver
    @driver = Driver.find(params[:id])
  end

  def driver_params
    params.require(:driver).permit(:name, :surname, :phone_number, :address, :city, :postal_code)
  end
end
