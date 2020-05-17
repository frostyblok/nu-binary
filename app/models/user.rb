# frozen_string_literal: true

class User < ActiveRecord::Base
  has_secure_password

  validates_presence_of :password_digest, :email
  validates_uniqueness_of :email

  has_many :calculations
end
