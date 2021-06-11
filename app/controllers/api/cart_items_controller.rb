class Api::CartItemsController < ApplicationController 
    before_action only: [:index, :update, :destroy]

    def index 
        if logged_in?
            @cart_items = CartItem.all.select{|item| item.user_id == current_user.id }
            render 'api/cart_items/index'
        else
            return nil
        end
    end 

    def update 
        if logged_in?
            @cart_item = CartItem.find_by(id: params[:id])
                if @cart_item.update(cartitem_params)
                    @cart_items = Cartitem.all.select{ |item| item.user_id == current_user.id }
                    render 'api/cart_items/index'
                end
        else
            render json: @cart_item.errors.full_messages, status: 404 
        end
    end 

    def destroy 
        if logged_in? 
            @cart_item = CartItem.find_by(id: params[:id])
            if @cart_item.destroy 
                @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
                render'api/cart_items/index'
            end 
        else
            render json: @cart_item.errors.full_messages, status: 404 
        end
    end

    def create 
        all_items = CartItem.all.select{ |item| item.user_id == current_user.id }
        @cart_item = CartItem.new(cartitem_params)
        temp = {};
        all_items.map { |cart_item| temp[cart_item.product_id] = cart_item.id} 
        if temp.keys.include?(@cart_item.product_id) 
            @existing_cart = CartItem.find_by(id: temp[@cart_item.product_id])
            
            if @existing_cart.save && logged_in? 
                @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
                render 'api/cart_items/index'
            else 
                render json: @cart_item.errors.full_messages, status: 404
            end

        else 

            if @cart_item.save && logged_in? 
                @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
                render 'api/cart_items/index'
            else 
                render json: @cart_item.errors.full_messages, status: 404
            end
            
        end
    end

    private 
    def cartitem_params 
        params.require(:cart_item).permit(:user_id, :product_id)
    end
end

