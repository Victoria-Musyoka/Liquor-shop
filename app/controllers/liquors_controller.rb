class LiquorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

def index
liquor = Liquor.all
render json: liquor

end

def create
liquor = Liquor.create(liquor_params)
render json: liquor, status: :created
end

def update
liquor = find_liquor
liquor.update(liquor_params)
render json: liquor

end

def destroy
liquor = find_liquor
liquor.destroy
head :no_content
end

private

def liquor_params
params.permit(:title, :image, :description, :rating)
end

def render_not_found_response
render json: {error: "liquor not found"}, status: :not_found

end

def find_liquor
Liquor.find(params[:id])
end

end
