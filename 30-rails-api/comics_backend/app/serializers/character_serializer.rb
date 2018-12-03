class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :alias, :power
end
