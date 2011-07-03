class ApplicationController < ActionController::Base
  protect_from_forgery

  protected
  def require_login
    unless session[:access_token]
      redirect_to :controller => :auth, :action => :login
    end
  end
end
