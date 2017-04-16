class Type < ActiveRecord::Base
  has_many :things, dependent: :restrict_with_error
  validates :name, presence: true
end
