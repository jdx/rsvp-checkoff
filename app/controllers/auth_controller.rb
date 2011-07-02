require 'oauth2'

class AuthController < ApplicationController
  def login
    client = OAuth2::Client.new(ENV['MEETUP_APP_KEY'], ENV['MEETUP_APP_SECRET'], :authorize_url => 'https://secure.meetup.com/oauth2/authorize')
    redirect_to client.web_server.authorize_url(
      :redirect_uri => redirect_uri
    )
  end

  def callback
  end

  private

  def redirect_uri
    uri = URI.parse(request.url)
    uri.path = '/auth/meetup/callback'
    uri.query = nil
    uri.to_s
  end
end
