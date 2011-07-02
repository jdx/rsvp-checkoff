require 'oauth2'

class AuthController < ApplicationController
  def login
    redirect_to client.web_server.authorize_url(
      :redirect_uri => redirect_uri
    )
  end

  def callback
    access_token = client.web_server.get_access_token(params[:code], redirect_uri => redirect_uri)
    render :text => access_token
  end

  private

  def client
    OAuth2::Client.new(ENV['MEETUP_APP_KEY'], ENV['MEETUP_APP_SECRET'], :authorize_url => 'https://secure.meetup.com/oauth2/authorize')
  end

  def redirect_uri
    uri = URI.parse(request.url)
    uri.path = '/auth/meetup/callback'
    uri.query = nil
    uri.to_s
  end
end
