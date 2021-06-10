class Api::ProductsController < ApplicationController
    before_action :require_login, only: [:create, :update]

    def index
        
        unless params[:storeId]
            @products = Product.all
            
        else
            @products = Product.where(store_id: params[:storeId])
        end
        
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
        
        render :show
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def update 
        @product = current_user.store.products.find_by(id: params[:id])

                                
        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = current_user.store.products.find_by(id: params[:id])
        if @product.destroy
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    

    private
    def product_params
        params.require(:product).permit(:name, :description, :id, :price, :store_id)
    end
end
