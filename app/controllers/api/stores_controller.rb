class Api::StoresController < ApplicationController
    before_action :require_login, only: [:create, :update]
    
    def create 
        @store = Store.new(store_params)
        
        if @store.save
            render 'api/stores/show'
        else
            render json: ['You can only create One Store'], status: 422
        end
    end

    def show
        @store= Store.find_by(id: params[:id])
        render :show
    end

    def update 
        @store= Store.find_by(id: params[:id])
        
        if @store.update(store_params)
            render :show
        else
            render json: @store.errors.full_messages, status: 422
        end
    end

    def index
        @stores= Store.all
        render :index
    end


    private
    def store_params
        params.require(:store).permit(:name, :description, :owner_id)
    end
end
