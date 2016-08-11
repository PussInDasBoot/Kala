class UsersController < ApplicationController

  def current_user_info
    if user_signed_in?
      render json: { name:  current_user.name, 
                     email: current_user.email, 
                     profile_picture: current_user.profile_picture }
    else
      redirect_to root_url, notice: "There is no user signed in"
    end
  end

end