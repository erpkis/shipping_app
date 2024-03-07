class ClientsController < ApiBaseController
  
    private
  
    def resource_class
      Client
    end
  
    def resource_params
      params.require(:client).permit(:name, :address, :city, :postal_code)
    end
  end
  