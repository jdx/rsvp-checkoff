require 'oauth2'

class ApplicationController < ActionController::Base
  protect_from_forgery

  protected
  def require_login
    unless session[:access_token]
      redirect_to :controller => :auth, :action => :login
    end
  end

  def meetup_client
    OAuth2::Client.new(ENV['MEETUP_APP_KEY'],
                       ENV['MEETUP_APP_SECRET'],
                       :site => 'https://api.meetup.com/',
                       :authorize_url => 'https://secure.meetup.com/oauth2/authorize?set_mobile=on',
                       :access_token_url => 'https://secure.meetup.com/oauth2/access',
                       :access_token_method => :post)
  end

  def access_token
    access_token = OAuth2::AccessToken.new(meetup_client,
                                           session[:access_token])
    access_token.token_param = 'access_token'
    return access_token
  end
end
