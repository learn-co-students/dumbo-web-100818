class ApplicationController < ActionController::API
  def issue_token(payload)
    JWT.encode(payload, 'SECRET')
  end

  def decode_token
    JWT.decode(get_token, 'SECRET')[0]
  end

  def get_token
    request.authorization
  end

  def current_user
    User.find(decode_token["user_id"])
  end

  def logged_in
    !!current_user
  end

end
