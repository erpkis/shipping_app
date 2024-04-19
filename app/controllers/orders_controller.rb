class OrdersController < ApiBaseController
  
    private
  
    def resource_class
      Order
    end
  
    def resource_params
      params.require(:order).permit(:delivery_date, :delivery_location, :status, :description, :order_type, :orderable_id, :client_id, :car_id, :driver_id)
    end
  end
  