class OrdersController < ApiBaseController
  
    private
  
    def resource_class
      Order
    end
  
    def resource_params
      params.require(:order).permit(:delivery_date, :delivery_location, :status, :description, :weight, :client_id, :car_id, :driver_id)
    end
  end
  