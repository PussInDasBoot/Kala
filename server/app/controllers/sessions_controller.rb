class SessionsController < ApplicationController

  def new
    redirect_to '/auth/google_oauth2'
  end

  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session[:user_id] = @user.id
    session[:access_token] = @user.access_token
    self.current_user

    redirect_to kala_path
  end

  def destroy
    reset_session
    redirect_to root_url, :notice => 'Logged out!'
  end

  def reset_session
    session.delete(:user_id)
    session.delete(:access_token)
  end

  def failure
    # if you want to debug something better, this is the object you want
    #auth = request.env["omniauth.error"]
    redirect_to root_url
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

end
