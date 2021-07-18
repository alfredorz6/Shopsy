class Api::SearchItemsController < ApplicationController
    def index
        products1 = Product.search_by_name(params[:query])
        products2 = Product.search_by_store(params[:query])
        @products = products1 + products2
        if @products.length < 1
          render json: ["#{params[:query]}"]
        else
          render 'api/products/index'
        end
    end
end
    