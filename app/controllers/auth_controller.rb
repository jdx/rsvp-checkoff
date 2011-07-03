class AuthController < ApplicationController
  def login
    redirect_to meetup_client.web_server.authorize_url(
      :redirect_uri => redirect_uri
    )
  end

  def callback
    if params[:code]
      access_token = meetup_client.web_server.get_access_token(params[:code], :redirect_uri => redirect_uri)
      session[:access_token] = access_token.token
      redirect_to :meetups
    else
      redirect_to :home
    end
  end

  private

  def redirect_uri
    uri = URI.parse(request.url)
    uri.path = '/auth/meetup/callback'
    uri.query = nil
    uri.to_s
  end
end
