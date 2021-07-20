class Api::CartItemsController < ApplicationController 
    before_action only: [:index, :update, :destroy, :show]

    def index
        @cart_items = current_user.cartitems

        render :index
    end



    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cartitem_params)
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :show
    end

    def create
        @cart_item = CartItem.new(cartitem_params)
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end


    private 
    def cartitem_params 
        params.require(:cart_item).permit(:user_id, :product_id)
    end
end

