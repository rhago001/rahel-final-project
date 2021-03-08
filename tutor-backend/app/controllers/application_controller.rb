class ApplicationController < ActionController::API

  def secret_key
    'hellow4'
  end 

  def encode(payload)

    token= JWT.encode(payload, secret_key, 'HS256')
  end

  def decode(token)
    JWT.decode(token, secret_key, true, {algorithm: 'HS256'})[0]
  end 

end
