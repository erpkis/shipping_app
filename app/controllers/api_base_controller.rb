class ApiBaseController < ApplicationController
    before_action :set_resource, only: [:show, :update, :destroy]

    def index
        resources = resource_class.all
        render json: resources
    end

    def show
        render json: @resource
    end

    def create
        @resource = resource_class.new(resource_params)
        if @resource.save
        render json: @resource, status: :created, location: @resource
        else
        render json: @resource.errors, status: :unprocessable_entity
        end
    end

    def update
        if @resource.update(resource_params)
        render json: @resource
        else
        render json: @resource.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @resource.destroy
        head :no_content
    end

    private

    def set_resource
        @resource = resource_class.find(params[:id])
    end

    
    def resource_class
        raise NotImplementedError
    end

    
    def resource_params
        raise NotImplementedError
    end
end