class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['hello'] # or {}

    return [status_code, header, body]
  end
end
