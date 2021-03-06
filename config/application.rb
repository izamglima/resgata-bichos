require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ResgataBichos
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.paperclip_defaults = {
		storage: :s3,
		s3_host_name: "us-west-2.amazonaws.com"                
	}
	gmail_username= ENV['GMAIL_USERNAME']
	gmail_password=  ENV['GMAIL_PASSWORD']
  end
end
