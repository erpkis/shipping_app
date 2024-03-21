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
            jwt_token = jwt_token = Warden::JWTAuth::UserEncoder.new.call(user, :user, nil).first
            cookies.signed[:jwt] = {
                value: jwt_token,
                httponly: true,
                secure: Rails.env.production?,
                samesite: :none,
                domain: :all
              }
        end
    end
  end

  def destroy #wylogowanie
    puts "TEST"
    binding.pry
    super do |user|
        
        cookies.signed.delete(:jwt)
    end
  end
  respond_to :json
  private
    def respond_with(_resource, _opts={})
        render json:{
            message:'You are logged in',
            user: current_user
        }, status: :ok
    end

    def respond_to_on_destroy
        binding.pry
        log_out_success && return if current_user

        log_out_failure
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
