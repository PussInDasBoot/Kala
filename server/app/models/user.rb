class User < ApplicationRecord

# See if user is already authenticated, if not create a new user
# Returns an instance of a user
  def self.find_or_create_from_auth_hash(auth_hash)
    user = self.find_by(uid: auth_hash[:uid], provider: auth_hash[:provider])
    unless user
      user = User.new(provider: auth_hash[:provider], uid: auth_hash[:uid])
      if auth_hash[:info]
        user.name = auth_hash[:info][:name] || ""
        user.email = auth_hash[:info][:email] || ""
      end
    end
    user.access_token = auth_hash[:credentials][:token];
    user.access_token_expiry = Time.at(auth_hash[:credentials][:expires_at])
    user.refresh_token = auth_hash[:credentials][:refresh_token]
    user.save
    user
  end

end
