class UsersController < ApplicationController
    def index
        user= User.all
        render json: user
    end
    def create
        user = User.create(signup_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        
        end

    end

    private
    def signup_params
        params.permit(:email, :password, :password_confirmation)
    end
end
