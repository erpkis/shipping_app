# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
    include ActionController::Cookies
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  def create #logowanie
    super do |user|
        if user
            # binding.pry
            jwt_token = jwt_token = Warden::JWTAuth::UserEncoder.new.call(user, :user, nil).first
            cookies.signed[:jwt] = {
                value: jwt_token,
                httponly: true,
                secure: Rails.env.production?,
                samesite: :none,
                domain: :all,
                expires: 60.minute.from_now,
            }
        end
    end
  end

#   def destroy #wylogowanie
#     puts "WYLOGOWUJE"
#     # super do |user|
        
#     #     cookies.delete(:jwt)
#     # end
#   end
  respond_to :json
  private
    def respond_with(_resource, _opts={})
        render json:{
            message:'You are logged in',
            user: current_user
        }, status: :ok
    end

    def respond_to_on_destroy
        if current_user
            log_out_success 
            cookies.delete(:jwt)
            return
        else   
            log_out_failure
        end
    end

    def log_out_success
        render json: {
            message:'You are logged out'
        }, status: :ok
    end

    def log_out_failure
      
        render json: {
            message:'Something went wrong'
        }, status: :unauthorized
    end
end
