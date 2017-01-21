source 'https://rubygems.org'

ruby "2.3.1"
gem 'rails', '4.2.6'

gem 'rails-api', '~>0.4','>=0.4.0'
gem 'pg', '~>0.19','>=0.19.0'
gem 'jbuilder', '~>2.0','>=2.6.0'
gem "figaro"
gem 'mongoid', '~> 5.1', '>=5.1.5'
gem 'httparty', '~> 0.14', '>=0.14.0'
gem 'rack-cors','~>0.4','>=0.4.0', :require => 'rack/cors'
gem 'pry-rails', '~> 0.3.4', '>=0.3.4'

group :development do
  gem 'spring', '~>2.0','>=2.0.0'
end

group :development, :test do
  gem 'webrick', '~> 1.3', '>= 1.3.1'
  gem 'rspec-rails', '~>3.5','>=3.5.2'
  gem 'byebug', '~> 9.0', '>= 9.0.5'
end

group :production do
  gem 'rails_12factor', '~>0.0','>=0.0.3'
  gem 'puma', '~> 3.6.2', '>=3.6.2'
end
