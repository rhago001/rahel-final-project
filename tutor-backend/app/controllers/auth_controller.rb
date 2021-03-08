class AuthController < ApplicationController

  def create
    # byebug
    @user=User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:password])
        
        payload={"user_id": @user.id}
        token= encode(payload)

        render json: {
          user: @user,
          token: token,
          authenticated: true
        }
      else
        render json: {
          message: "Invalid Information",
          authenticated: false
        }
      end 
  end 



end 