require 'pry'

require_relative '../lib/animal'
require_relative '../lib/mammal'
require_relative '../lib/set_on_fire_able'
require_relative '../lib/convenience_store'

Dir[File.join(File.dirname(__FILE__), "../lib", "*.rb")].each {|f| require f}


binding.pry
false