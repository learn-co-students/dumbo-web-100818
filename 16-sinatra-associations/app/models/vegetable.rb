class Vegetable < ActiveRecord::Base

  belongs_to :farmer

  def self.search(search_term)
    self.where('name like ?', "%#{ search_term }%")
  end

end