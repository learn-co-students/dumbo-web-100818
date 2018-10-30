class Vegetable < ActiveRecord::Base


  def self.search(search_term)
    self.where('name like ?', "%#{ search_term }%")
  end

end