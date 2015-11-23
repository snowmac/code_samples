class User < ActiveRecord::Base
  has_many :post

  # Compute the gravatar for the user, on create email
  def email=(email)
    self[:email] = email
    self[:gravatar] = Digest::MD5.hexdigest(email) if email.present?
  end

end
