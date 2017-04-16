class Type < ActiveRecord::Base
  has_many :things, dependent: :restrict_with_error
  validates :name, presence: true
  default_scope { order(name: :asc) }
end
