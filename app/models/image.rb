class Image < ActiveRecord::Base
  include Protectable
  attr_accessor :image_content

  has_many :thing_images, inverse_of: :image, dependent: :destroy
  has_many :things, through: :thing_images

  scope :not_belonging_to_a_user, -> {
    if !User.where.not(image_id:nil).blank?
      where('Images.id not in (?)', User.where.not(image_id:nil).pluck(:image_id))
    end
  }

  def basename
    caption || "image-#{id}"
  end
end
