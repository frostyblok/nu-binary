class JsonWebToken
  HMAC_SECRET = NuBinary::Application.credentials.secret_key_base

  def self.encode(payload, expires_in = 24.hours.from_now)
    payload[:exp] = expires_in.to_i

    JWT.encode(payload, HMAC_SECRET)
  end

  def self.decode(token)
    response = JWT.decode(token, HMAC_SECRET).first

    HashWithIndifferentAccess.new(response)
  rescue JWT::DecodeError
    raise ExceptionHandler::InvalidToken, 'Invalid token'
  end
end
