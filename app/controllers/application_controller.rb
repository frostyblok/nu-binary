class ApplicationController < ActionController::API
  before_action :authorize_request!

  include ExceptionHandler

  protected

  def authorize_request!
    @current_user = AuthorizeRequest.new(request.headers).call[:user]
  end
end
